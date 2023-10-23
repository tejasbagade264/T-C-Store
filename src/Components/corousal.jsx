import React from "react";
import Slider from "react-slick";
import styles from "../styles/corousel.module.css"; // Import the CSS module
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, 
  };

  return (
    <Slider {...settings}>
      {/* <div className={styles["Container-corousal"]}> */}

      <div>
        <img src="corousal1.jpg" alt="Image 1" className={styles["carousel-image"]} />
      </div>
      <div>
        <img src="corousal2.jpg" alt="Image 2" className={styles["carousel-image"]} />
      </div>
      <div>
        <img src="corousal3.jpg" alt="Image 3" className={styles["carousel-image"]} />
      </div>
      <div>
        <img src="corousal1.jpg" alt="Image 4" className={styles["carousel-image"]} />
      </div>
      <div>
        <img src="corousal1.jpg" alt="Image 5" className={styles["carousel-image"]} />
      </div>
      {/* </div> */}
    </Slider>
  );
}
