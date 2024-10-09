import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import red from "../../assets/Car/r.png";
import whitesmoke from "../../assets/Car/d.png";
import white from "../../assets/Car/iris.png";
import lightred from "../../assets/Car/2.png";
import yellow from "../../assets/Car/e.png";

const Hero = () => {
  const slides = [
    {
      image: red,
      carName: "CARMINE RED",
      details: "A bold choice for the daring.",
      bgColor: "#FFCCCC",
    },
    {
      image: whitesmoke,
      carName: "RACING YELLOW",
      details: "Bright and eye-catching.",
      bgColor: "#F9E79F",
    },
    {
      image: white,
      carName: "CRAYON",
      details: "A classic look with a twist.",
      bgColor: "#F2F3F4",
    },
    {
      image: lightred,
      carName: "GUARDS RED",
      details: "The perfect balance of elegance.",
      bgColor: "#F5B7B1",
    },
    {
      image: yellow,
      carName: "LIGHT YELLOW",
      details: "A soft and subtle statement.",
      bgColor: "#F7EA00",
    },
  ];

  const [bgColor, setBgColor] = useState(slides[0].bgColor);

  return (
    <div
      className=""
      style={{
        backgroundColor: bgColor, // Background color will change dynamically
        transition: "background-color 1s ease",
        height: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 1500, // Time between transitions
          disableOnInteraction: false, // Continue autoplay after interaction
        }}
        loop={true} // Enable looping
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          const currentSlideIndex = swiper.realIndex; // Use realIndex for accurate index
          setBgColor(slides[currentSlideIndex].bgColor); // Update background color on every slide change
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-content"
              style={{
                textAlign: "center",
                padding: "20px",
                position: "relative",
              }}
            >
              <img
                src={slide.image}
                alt={slide.carName}
                className="car-image"
                style={{
                  maxWidth: "900px",
                  width: "100%",
                  height: "auto",
                  display: "block",
                  margin: "0 auto",

                  borderRadius: "10px", // Optional: adding border radius for a smoother look
                }}
              />
              <h2
                className="car-name md:text-[50px] text-[20px] "
                style={{
                  // fontSize: '50px',
                  fontWeight: "bold",
                  position: "absolute",
                  top: "-4px", // Positioning above the image
                  left: "50%",
                  transform: "translateX(-50%)",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "black", // White color for better contrast
                }}
              >
                {slide.carName}
              </h2>
              <p
                className="car-details"
                style={{
                  fontSize: "28px",
                  marginTop: "10px",
                  color: "black", // White color for better contrast
                }}
              >
                {slide.details}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
