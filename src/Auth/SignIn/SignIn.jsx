import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";


const SignIn = () => {

    
    const navigate = useNavigate();
    const {login}=useContext(AuthContext);
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

      console.log(data);

      login(data.email,data.password)
      .then(result =>{
        console.log(result.user)
        navigate('/')
        toast.success("Login SuccesFull!");
      })
      .catch(error=>{
        console.log('mama caught',error )
      })

    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-black p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login to Your Account</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input 
                type="email" 
                className={`mt-1 block bg-white text-black w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm`} 
                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
  
            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input 
                type="password" 
                className={`mt-1 bg-white  text-black block w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm`} 
                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>
  
            {/* Submit Button */}
            <div>
              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Login
              </button>
              <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
            </div>
          </form>
        
           <div>   <h1 className='mt-4 text-sm text-red-600'>
           <Link  to ='/'>Go Home ❓</Link></h1> <p>You Have no Account ?<Link to="/signup"><span className='text-blue'> CreateAccount</span></Link></p></div>

        </div>
      </div>
    );
};

export default SignIn;