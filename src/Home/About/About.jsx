import about from "../../assets/Car/about.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const About = () => {
  const handletoast = () => {
    toast.error("Something went wrong, please try again.");
  };

  return (
    <div className="grid md:grid-cols-2 gap-10 items-center justify-center my-20 p-5 md:p-0  ">
      <div>
        <img className="w-[80%] m-auto" src={about} alt="" />

        <div className="flex justify-end -mt-12 ">
          <button className="  bg-black text-white text-xl font-bold bg-opacity-20 p-5 rounded-2xl">
            <h1>20050+</h1>
            <h1>SuperChanged Power</h1>
          </button>
        </div>
      </div>

      <div className="space-y-8">
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
    </div>
  );
};

export default About;
