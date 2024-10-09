 
 import sub from  '../../assets/Car/sub.png'
 import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Subscribe = () => {

    const handletoast =()=>{
        toast.success("ThankYou For Subscribe!");
      

    }



    return (


        <div className='grid md:grid-cols-2 gap-10 items-center justify-center my-20 md:p-0 p-5 '>


       

        <div className='space-y-8'>
            <h1 className='text-4xl font-bold'>
            Do You Want To Receive 
            Special Offers?
            </h1>
            <p>
            Be the first to receive all the information about our products and new cars by email by subscribing to our mailing list.
            </p>

            <button onClick={handletoast} className='bg-blue-500 px-10 p-2 text-xl text-white mt-5'>Subscribe</button>
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
        <div>
            <img className='w-[80%] m-auto' src={ sub } alt="" /> 
        </div>
        
    </div>
    );


};

export default Subscribe;