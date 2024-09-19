import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [form] = Form.useForm();
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const presentCart = localStorage.getItem('UserCart');
    if (presentCart) {
      setCartItems(JSON.parse(presentCart));
    } else {
      setCartItems([]);
    }

    const user = localStorage.getItem('PawsUser');
    if (user) {
      form.setFieldsValue({
        email: user,
      });
    }
  }, [form]);

  // Validate if all fields are filled and valid
  const handleFormChange = () => {
    const hasErrors = form.getFieldsError().some(({ errors }) => errors.length);
    setIsFormValid(!hasErrors);
  };

  const handleSubmit = () => {
    // Handle the payment logic here
    navigate('/thankyou');
  };

  return (
    <div className="min-h-screen p-10 bg-white text-black">
      {cartItems.length > 0 ? <Row gutter={28}>
        {/* Left Side: Cart Items */}
        <Col span={14}>
          <h2>Cart Items</h2>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <p>{item.Product_name} - ₹{item.Price}</p>
                  <p>Quantity: {item.quantity}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty</p>
          )}
        </Col>

        {/* Right Side: Checkout Form */}
        <Col span={8}>
          <h2>Checkout Form</h2>
          <Form
            form={form}
            layout="vertical"
            onFieldsChange={handleFormChange} // Trigger validation on form changes
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
        </Col>
      </Row>: <div className='w-full text-center text-5xl'>Oops ! Your Cart is Empty :{`(`}</div>}
    </div>
  );
};

export default CheckoutPage;
