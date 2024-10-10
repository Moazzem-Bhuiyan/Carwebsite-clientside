import sub from '../../assets/Car/sub.png';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Subscribe = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS for animations
    }, []);

    const handletoast = () => {
        toast.success("Thank you for subscribing!");
    };

    return (
        <div className='grid md:grid-cols-2 gap-10 items-center justify-center my-20 md:p-0 p-5'>
            {/* Text Section */}
            <div className='space-y-8' data-aos="fade-up">
                <h1 className='text-4xl font-bold'>
                    Do You Want To Receive Special Offers?
                </h1>
                <p>
                    Be the first to receive all the information about our products and new cars by email by subscribing to our mailing list.
                </p>

                <button 
                    onClick={handletoast} 
                    className='bg-blue-500 px-10 p-2 text-xl text-white mt-5'
                >
                    Subscribe
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

            {/* Image Section */}
            <div data-aos="fade-left">
                <img className='w-[80%] m-auto' src={sub} alt="Subscribe" />
            </div>
        </div>
    );
};

export default Subscribe;
