import Slider from "@ant-design/react-slick";

const sliderImg = "/assets/images/handshake.png";

const OnboardSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    dotsClass: "slick-dots slick-thumb",
  };

  return (
    <div className="w-2/4 h-full bg-gray-500 col-lg-6 p-0">
      <Slider {...settings} className="h-screen">
        <div className="w-full h-screen relative inline-flex">
          <figure className="absolute top-0 left-0 right-0 bottom-0 w-full h-screen z-10 after:absolute after:content-[''] after:opacity-80 after:w-full after:h-full after:top-0 after:right-0 after:bottom-0">
            <img
              className="h-full w-full inline-block object-cover"
              src={sliderImg}
              alt="sliderChange"
            />
          </figure>
        </div>
      </Slider>
    </div>
  );
};

export default OnboardSlider;
