import about from "../../assets/Car/about.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS for animations
    }, []);

    const handletoast = () => {
        toast.error("Something went wrong, please try again.");
    };

    return (
        <div className="relative">
            {/* ToastContainer placed here for better control over its position */}
            <ToastContainer
                position="top-right" // Set the position to top-right
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

            <div className="grid md:grid-cols-2 gap-10 items-center justify-center my-20 p-5 md:p-0">
                {/* Image Section */}
                <div data-aos="fade-right">
                    <img className="w-[80%] m-auto" src={about} alt="About" />
                    <div className="flex justify-end -mt-12">
                        <button className="bg-black text-white text-xl font-bold bg-opacity-20 p-5 rounded-2xl">
                            <h1>20050+</h1>
                            <h1>SuperCharged Power</h1>
                        </button>
                    </div>
                </div>

                {/* Text Section */}
                <div className="space-y-8" data-aos="fade-left">
                    <h1 className="text-4xl font-bold">Machines With Future Technology</h1>
                    <p>
                        See the future with high-performance electric cars produced by
                        renowned brands. They feature futuristic builds and designs with new
                        and innovative platforms that last a long time.
                    </p>

                    <button
                        onClick={handletoast}
                        className="bg-blue-500 px-10 p-2 text-xl text-white mt-5"
                    >
                        Know Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
