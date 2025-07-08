import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        const res = await fetch('http://localhost:5001/user/login', {
          method:'POST',
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })
        const data = await res.json();
        if(res.ok){
          localStorage.setItem("token",data.token);
          navigate("/");
        }
      }
      catch(error){
      console.log(error);
    }
    };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A]">
      <div className="w-full max-w-md px-6 py-12">
        <div className="flex justify-center mb-6">
          {/* Replace with your logo */}
          <svg className="w-10 h-10 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3c-4.97 0-9 3.58-9 8 0 2.29 1.5 4.43 3.73 5.76-.18.56-.5 1.15-.97 1.68-.16.18-.17.45-.02.65.13.18.35.27.57.23.36-.07.92-.32 1.65-.78.66.12 1.34.18 2.04.18 4.97 0 9-3.58 9-8s-4.03-8-9-8z" />
          </svg>
        </div>
        <h2 className="text-center text-2xl font-bold text-white mb-6">Sign up for an account</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-[#1E293B] text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-[#1E293B] text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
            >
              Sign up
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-gray-400">
          Already a member?{' '}
          <Link to="/signup" className="text-indigo-400 hover:underline">
            Sign in
          </Link>
        </p>
        <div className="flex justify-center">
          <button
  type="button"
  onClick={() => window.location.href = "http://localhost:5001/user/google"}
  className="w-2/3 max-w-xs mt-4 flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200 ml-8"
>
  <svg className="w-4 h-4" aria-hidden="true" /* ...svg props... */ />
  Sign up with Google
</button>
</div>
      </div>
    </div>
  )
}

export default Login