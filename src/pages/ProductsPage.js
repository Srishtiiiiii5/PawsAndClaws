import React, { useState } from 'react';
import { Tabs, Card, Rate, Button, Row, Col, Checkbox } from 'antd'; // Importing Ant Design components
import productsData from '../data.json';
import toast from 'react-hot-toast';

const { TabPane } = Tabs;

const ProductsPage = () => {
  const [selectedAnimal, setSelectedAnimal] = useState('Dog');
  const [filteredTypes, setFilteredTypes] = useState([]);

  // Filter products by animal type and selected categories
  const filteredProducts = productsData.filter(
    (product) =>
      product.Animal_type === selectedAnimal &&
      (filteredTypes.length === 0 || filteredTypes.includes(product.Product_type))
  );

  // Handle the change of animal type in tabs
  const handleTabChange = (key) => {
    setSelectedAnimal(key);
    setFilteredTypes([]); // Reset filter when tab changes
  };

  return (
    <div className="p-5 bg-white ">
      {/* Centering the Tabs */}
      <div className="flex justify-center mb-8">
        <Tabs className='custom-tabs' tabBarStyle={{ color: 'black', fontWeight: 600, width: '300px' }} defaultActiveKey="Dog" onChange={handleTabChange} centered>
          <TabPane tab="Shop for Dogs" key="Dog" />
          <TabPane tab="Shop for Cats" key="Cat" />
        </Tabs>
      </div>

      <Row gutter={16}>
        {/* Category Filter on the Left */}
        <Col xs={24} sm={8} md={6} lg={4}>
          <ProductFilter filteredTypes={filteredTypes} setFilteredTypes={setFilteredTypes} />
        </Col>

        {/* Product Grid on the Right */}
        <Col xs={24} sm={16} md={18} lg={20}>
          <ProductGrid products={filteredProducts} />
        </Col>
      </Row>
    </div>
  );
};

// Checkbox Filter component to filter products by type
const ProductFilter = ({ filteredTypes, setFilteredTypes }) => {
  const productTypes = ['Accessories', 'Treats', 'Grooming', 'Supplements', 'Clothing', 'Bowls and Feeders', 'Furniture', 'Toys'];

  const handleFilterChange = (checkedValues) => {
    setFilteredTypes(checkedValues);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md h-[500px]">
      <h3 className="text-lg font-semibold mb-4 text-black">Filter by Product Type</h3>
      <Checkbox.Group className='flex flex-col' value={filteredTypes} onChange={handleFilterChange}>
        {productTypes.map((type) => (
          <div key={type} className="py-1">
            <Checkbox value={type}>{type}</Checkbox>
          </div>
        ))}
      </Checkbox.Group>
    </div>
  );
};

// Grid to display the filtered products
const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 h-screen overflow-auto">
      {products.map((product, index) => (
        <Card
          className="max-h-[700px]"
          key={index}
          hoverable
          cover={<img alt={product.Product_name} src={product.image_url || 'https://via.placeholder.com/150'} />}
        >
          <Card.Meta title={product.Product_name} description={`₹${product.Price}`} />
          <div className="flex flex-col gap-2">
            <Rate disabled value={product.Rating} className="mt-2" />
            <Button
              onClick={() => {
                const cart = localStorage.getItem('UserCart');
                let productInCart = false;

                // If cart exists in local storage
                if (cart) {
                  let foundCart = JSON.parse(cart);

                  // Check if product is already in the cart
                  const updatedCart = foundCart.map((item) => {
                    if (item.id === product.id) {
                      productInCart = true;
                      return { ...item, quantity: item.quantity + 1 }; // Increase quantity if product is found
                    }
                    return item;
                  });

                  // If product is not in the cart, add it
                  if (!productInCart) {
                    updatedCart.push({ ...product, quantity: 1 });
                  }

                  localStorage.setItem('UserCart', JSON.stringify(updatedCart));
                } else {
                  // If no cart exists in local storage, create one with the product
                  localStorage.setItem('UserCart', JSON.stringify([{ ...product, quantity: 1 }]));
                }
                toast.success('Item added to cart');
              }}
              type="primary"
              className="bg-black rounded-lg text-lg py-6"
            >
              Add to Cart
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProductsPage;
