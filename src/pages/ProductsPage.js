import React, { useState } from 'react';
import { Tabs, Select, Card, Rate, Button } from 'antd'; // Importing Ant Design components
import productsData from '../data.json'
import toast from 'react-hot-toast';

const { TabPane } = Tabs;
const { Option } = Select;



const ProductsPage = () => {

  const [selectedAnimal, setSelectedAnimal] = useState('Dog');
  const [filteredType, setFilteredType] = useState('All');

  // Filter products by animal type and product type
  const filteredProducts = productsData.filter(
    (product) =>
      product.Animal_type === selectedAnimal && (filteredType === 'All' || product.Product_type === filteredType)
  );

  // Handle the change of animal type in tabs
  const handleTabChange = (key) => {
    setSelectedAnimal(key);
    setFilteredType('All'); // Reset filter when tab changes
  };

  return (
    <div className="p-5 bg-white">
      {/* Tabs for Dog and Cat */}
      <Tabs defaultActiveKey="Dog" onChange={handleTabChange}>
        <TabPane tab="Shop for Dogs" key="Dog">
          <ProductFilter filteredType={filteredType} setFilteredType={setFilteredType} />
          <ProductGrid products={filteredProducts} />
        </TabPane>
        <TabPane tab="Shop for Cats" key="Cat">
          <ProductFilter filteredType={filteredType} setFilteredType={setFilteredType} />
          <ProductGrid products={filteredProducts} />
        </TabPane>
      </Tabs>
    </div>
  );
};

// Filter component to filter products by type
const ProductFilter = ({ filteredType, setFilteredType }) => {
  const productTypes = ['All', 'Accessories', 'Treats', 'Grooming', 'Supplements', 'Clothing', 'Bowls and Feeders'];

  return (
    <div className="mb-5">
      <Select
        value={filteredType}
        style={{ width: 200 }}
        onChange={(value) => setFilteredType(value)}
        placeholder="Filter by Product Type"
      >
        {productTypes.map((type) => (
          <Option key={type} value={type}>
            {type}
          </Option>
        ))}
      </Select>
    </div>
  );
};

// Grid to display the filtered products
const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 min-h-screen">
      {products.map((product, index) => (
        <Card
          className='max-h-[700px]'
          key={index}
          hoverable
          cover={<img alt={product.Product_name} src={product.image_url || 'https://via.placeholder.com/150'} />}
        >
          <Card.Meta title={product.Product_name} description={`₹${product.Price}`} />
          <div className='flex flex-col gap-2'>
            <Rate disabled value={product.Rating} className="mt-2" />
            <Button onClick={() => {
              const cart = localStorage.getItem("UserCart");
              let productInCart = false;

              // If cart exists in local storage
              if (cart) {
                let foundCart = JSON.parse(cart);

                // Check if product is already in the cart
                const updatedCart = foundCart.map(item => {
                  if (item.id === product.id) {
                    productInCart = true;
                    return { ...item, quantity: item.quantity + 1 };  // Increase quantity if product is found
                  }
                  return item;
                });

                // If product is not in the cart, add it
                if (!productInCart) {
                  updatedCart.push({ ...product, quantity: 1 });
                }

                localStorage.setItem("UserCart", JSON.stringify(updatedCart));

              } else {
                // If no cart exists in local storage, create one with the product
                localStorage.setItem("UserCart", JSON.stringify([{ ...product, quantity: 1 }]));
              }
              toast.success("Item added to cart")
            }} type='primary' className='bg-black rounded-lg text-lg py-6'>
              Add to Cart
            </Button>

          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProductsPage;
