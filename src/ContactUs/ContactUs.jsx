import { useForm } from "react-hook-form";
import Subscribe from "../shared/Subscribe/Subscribe";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div
        className="hero  w-full h-[400px]"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/xGJ72QD/slrkjgblergb.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">Contact Us</h1>
          </div>
        </div>
      </div>
      {/* form */}

      <div className="w-full max-w-4xl mx-auto p-5">
        <h1 className="text-3xl font-bold text-center mb-10">Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName", {
                  required: "First name is required",
                })}
                className="w-full  text-black p-3 bg-white border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName", { required: "Last name is required" })}
                className="w-full  text-black p-3 bg-white border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Enter a valid email",
                  },
                })}
                className="w-full  text-black p-3 bg-white border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone Number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    //   value: /^[0-9]{10}$/,
                    message: "Enter a valid phone number",
                  },
                })}
                className="w-full p-3 text-black bg-white border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <textarea
              placeholder="Your Message"
              {...register("message", { required: "Message is required" })}
              rows="6"
              className="w-full p-3 text-black bg-white border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <Subscribe></Subscribe>
    </div>
  );
};

export default ContactUs;
