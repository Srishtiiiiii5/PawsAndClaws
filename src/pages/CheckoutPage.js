import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import emailjs from 'emailjs-com';

const CheckoutPage = ({setCheckoutModalOpen}) => {
  const [cartItems, setCartItems] = useState([]);
  const [form] = Form.useForm();
  const [isFormValid, setIsFormValid] = useState(false);
  const email = localStorage.getItem("PawsUser");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('PawsToken');

    if(!token) {
      toast.error("Please login to continue");
      setCheckoutModalOpen(false);
      navigate('/login');
    }
    
    const presentCart = localStorage.getItem('UserCart');
    if (presentCart) {
      setCartItems(JSON.parse(presentCart));
    } else {
      setCartItems([]);
    }

    const user = localStorage.getItem('PawsUser');
    if (user) {
      form.setFieldsValue({ email: user });
    }
  }, [navigate, form]);

  const handleFormChange = () => {
    const values = form.getFieldsValue(['email', 'name', 'address']);
    setIsFormValid(values.email && values.name && values.address);
  };

  const handleSubmit =async () => {
    setCheckoutModalOpen(false);
    if(!email){
      toast.error("User not logged in");
      return;
    }

    const generateOrderId = () => {
      return `ORD-${Math.floor(100000 + Math.random() * 900000)}`; // Example: ORD-123456
    };
  
    const orderId = generateOrderId();
  
    // Get product names
    const productNames = cartItems.map(product => product.Product_name).join(', ');

    const templateParams = {
      to_email: email,
      message: `Your order with ID ${orderId} has been confirmed. The products you ordered are: ${productNames}. Thank you for shopping with us!`,
    };

    try {
      await emailjs.send(
        'service_q2gitnd', // Replace with your emailjs service ID
        'template_jq50zu6', // Replace with your emailjs template ID
        templateParams,
        'uwnqbKkyGCJaW3ENx'
      );
      toast.success("Order Placed successfully !")
      navigate('/thankyou'); // Navigate to the thank you page after order submission
    } catch (error) {
      toast.error("Something went wrong !")
      navigate('/thankyou'); // Navigate to the thank you page after order submission
    }
  };

  return (
    <div className="bg-white text-black p-2">
      {cartItems.length > 0 ? (
        <Form
          form={form}
          layout="vertical"
          onFieldsChange={handleFormChange}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Email is required' }]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Name is required' }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Address is required' }]}
          >
            <Input.TextArea placeholder="Enter your address" />
          </Form.Item>
          <Button
            type="primary"
            className='bg-black p-7 w-full'
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            Place Order
          </Button>
        </Form>
      ) : (
        <div className='w-full text-center text-5xl'>Oops! Your Cart is Empty :(</div>
      )}
    </div>
  );
};

export default CheckoutPage;
