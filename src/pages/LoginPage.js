import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Import emailjs

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(''); // To hold user-entered OTP
  const [generatedOtp, setGeneratedOtp] = useState(''); // To hold the OTP generated and sent to the user's email
  const [step, setStep] = useState(1); // Step 1: Enter email, Step 2: Enter OTP
  const navigate = useNavigate();
  const token = localStorage.getItem('PawsToken');

  useEffect(() => {
    if (token) {
      toast.error("User already logged in");
      navigate('/');
    }
  }, []);

  // Generate a random 6-digit OTP
  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Function to send OTP to the user's email
  const sendOtpEmail = async () => {
    const generatedOtp = generateOtp(); // Generate OTP
    setGeneratedOtp(generatedOtp); // Store generated OTP in state

    const templateParams = {
      to_email: email,
      message: `Your OTP for login is: ${generatedOtp}`,
    };

    try {
      // Use emailjs to send OTP
      await emailjs.send(
        'service_q2gitnd', // Replace with your emailjs service ID
        'template_jq50zu6', // Replace with your emailjs template ID
        templateParams,
        'uwnqbKkyGCJaW3ENx'
      );
      toast.success(`OTP sent to ${email}`);
      setStep(2); // Move to Step 2: OTP Verification
    } catch (error) {
      console.log(error);
      toast.error('Failed to send OTP. Please try again.');
    }
  };

  // Handle login after OTP is verified
  const handleOtpVerification = () => {
    if (otp === generatedOtp) {
      // OTP matches, login the user
      localStorage.setItem('PawsToken', 'pawsLoginToken');
      localStorage.setItem('PawsUser', email);
      toast.success("Logged in successfully");
      navigate('/');
    } else {
      toast.error('Invalid OTP. Please try again.');
    }
  };

  const handleLogin = () => {
    if (!email) {
      toast.error("Please Enter Email Id");
      return;
    }
    // Send OTP email
    sendOtpEmail();
  };

  return (
    <div className='flex items-center justify-center h-screen max-w-screen'>
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-gray-400 via-gray-800 to-slate-950 bg-clip-border text-white shadow-lg shadow-cyan-500/40">
          <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
            {step === 1 ? 'Sign In' : 'Enter OTP'}
          </h3>
        </div>
        <div className="flex flex-col gap-5 p-6">
          {step === 1 && (
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                placeholder=""
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                className="before:content[' '] after:content[' '] pointer-events-none absolute left-3 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-disabled:text-transparent"
              >
                Email
              </label>
            </div>
          )}

          {step === 2 && (
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="text"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <label
                className="before:content[' '] after:content[' '] pointer-events-none absolute left-3 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-disabled:text-transparent"
              >
                OTP
              </label>
            </div>
          )}
        </div>
        <div className="p-6 pt-0">
          <button
            data-ripple-light="true"
            type="button"
            className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-400 via-gray-800 to-slate-950 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={step === 1 ? handleLogin : handleOtpVerification}
          >
            {step === 1 ? 'Send OTP' : 'Verify OTP'}
          </button>
          {step === 1 && (
            <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
              Don't have an account?
              <button
                className="ml-1 block font-sans text-sm font-bold leading-normal text-cyan-500 antialiased"
                onClick={() => navigate('/signup')}
              >
                Sign up
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
