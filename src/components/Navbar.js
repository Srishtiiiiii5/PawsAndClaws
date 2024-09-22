import React, { useEffect, useState } from 'react'
import { Button, Col, Drawer, List, Modal, Row, Typography } from 'antd';
import toast from 'react-hot-toast';
import { DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import CheckoutPage from '../pages/CheckoutPage';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount , setTotalAmount] = useState(null);
  const [token, setToken] = useState('');
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const navigate = useNavigate();
  const showDrawer = () => {
    const data = localStorage.getItem("UserCart")
    if (data) {
      const foundCart = JSON.parse(data);
      setCartItems(foundCart);
    } else {
      setCartItems([]);
    }
    setOpen(true);
  };
  const onClose = () => {
    setCartItems([]);
    setOpen(false);
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("UserCart", JSON.stringify(updatedCart));
    toast.success("Item removed from cart");
  };

  useEffect(()=>{
    console.log(cartItems);
    let amount = 0;
    cartItems.forEach((item)=>{
      amount = amount + (item.quantity*item.Price)
    })
    setTotalAmount(amount);
  },[cartItems])

  useEffect(()=>{
    const foundToken = localStorage.getItem("PawsToken");
    setToken(foundToken);
  },[token])

  return (
    <div className="navbar justify-evenly px-40 bg-[#FFDDCC] text-black p-2">
      <div className="flex-1">
        <a className="btn btn-ghost">
          <img src= "/Assets/logo.png" className="w-14 h-14"/>
        </a>
      </div>
      <div className="flex-none p-2 space-x-5">
        <div onClick={()=>navigate('/')} className='text-xl text-white cursor-pointer'>
          Home
        </div>
        <div onClick={()=>navigate('/insurance')} className='text-xl text-white cursor-pointer'>
          Insurance
        </div>
        <div onClick={()=>navigate('/products')} className='text-xl text-white cursor-pointer'>
          Products
        </div>
        <div onClick={showDrawer} className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost text-black btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow-lg bg-white text-black">
            {!token && <li>
              <a href='/login' className="justify-between">
                Login
              </a>
            </li>}
            {token && <li><a onClick={()=>{
              localStorage.removeItem('PawsUser')
              localStorage.removeItem('UserCart')
              localStorage.removeItem('PawsToken')
              toast.success("Logged out")
              setToken('');
              navigate('/')
              
            }}>Logout</a></li>}
          </ul>
        </div>
      </div>
      <Drawer
        title="Your Cart"
        placement="right"
        onClose={onClose}
        open={open}
        width={400}
        footer={
          <>
          <p className='text-xl font-semibold p-1 flex justify-between'><span>Total Amount -</span> <span>₹{totalAmount}</span></p>
          <p className='text-xl font-semibold p-1 flex justify-between'><span>GST -</span> ₹{(totalAmount*0.18).toFixed(2)}</p>
          <p className='text-xl font-semibold p-1 flex justify-between'><span>Net Payable -</span> ₹{totalAmount + parseInt(totalAmount*0.18)}</p>
          <p>*Shipping  will be added in the next step</p>
          <Button disabled={cartItems.length == 0} onClick={()=> {setCheckoutModalOpen(true) ; setOpen(false)}} type="primary" className={`w-full bg-black text-white p-10 rounded-lg text-xl`}>
            Checkout
          </Button>
          </>
        }
      >
        {cartItems.length > 0 ? (
          <List
            itemLayout="vertical"
            dataSource={cartItems}
            renderItem={(item) => (
              <List.Item
                key={item.id}
                style={{
                  borderBottom: '1px solid #f0f0f0',
                  padding: '10px 0',
                }}
              >
                <Row justify="space-between" align="middle">
                  <Col>
                    <Typography.Text strong>{item.Product_name}</Typography.Text>
                    <br />
                    <Typography.Text type="secondary">Price: ₹{item.Price}</Typography.Text>
                    <br />
                    <Typography.Text>Quantity: {item.quantity}</Typography.Text>
                  </Col>
                  <Col>
                    <Button
                      type="text"
                      danger
                      icon={<DeleteOutlined/>}
                      onClick={() => handleRemoveItem(item.id)}
                    />
                  </Col>
                </Row>
              </List.Item>
            )}
          />
        ) : (
          <Typography.Text>No items in the cart</Typography.Text>
        )}
      </Drawer>
      <Modal title="Add Shipping Address" footer={null} onCancel={()=>setCheckoutModalOpen(false)} onClose={()=>setCheckoutModalOpen(false)} open={checkoutModalOpen} >
         <CheckoutPage setCheckoutModalOpen={setCheckoutModalOpen}/> 
      </Modal>
    </div>
  )
}

export default Navbar
