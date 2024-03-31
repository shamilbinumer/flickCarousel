import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './assets/images/img1.jpg'
import img2 from './assets/images/img2.jpg'
import img3 from './assets/images/img3.jpg'
import img4 from './assets/images/img4.jpg'
import img5 from './assets/images/img5.jpg'
import img6 from './assets/images/img6.jpg'

import './App.scss'

function App() {
  const [currentContent, setCurrentContent] = useState(null);
  const sliderRef = useRef(null);

  const content = {
    img: [
      { image: img1, head: "heading 1", disc: "description 1" },
      { image: img2, head: "heading 2", disc: "description 2" },
      { image: img3, head: "heading 3", disc: "description 3" },
      { image: img4, head: "heading 4", disc: "description 4" },
      { image: img5, head: "heading 5", disc: "description 5" },
      { image: img6, head: "heading 6", disc: "description 6" },
    ]
  };

  useEffect(() => {
    setCurrentContent(content.img[0]); // Set initial content
  }, []);

  const afterChange = (index) => {
    setCurrentContent(content.img[index]);
    const bgImage = document.querySelector(".background-image");
    bgImage.classList.add("animate");
    const textdata = document.querySelector(".overlay");
    textdata.classList.add("overlay-animate");
    const texth2 = document.querySelector(".texth2");
    texth2.classList.add("texth2-animate");
    const textp = document.querySelector(".textp");
    textp.classList.add("textp-animate");
    setTimeout(() => {
      bgImage.classList.remove("animate");
      textdata.classList.remove("overlay-animate");
    }, 1000);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange, // Use the afterChange function directly in settings
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  

  return (
    <div className="main">
      <div className="background-image-container">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${currentContent?.image || img1})` // Fallback for initial render
          }}
        />
         <div className="overlay">
              <h2 className="texth2">{currentContent?.head || "heading"}</h2>
              <p className="textp">{currentContent?.disc || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia dolorum"}</p>
          </div>
        <div className="thubnail-main">
          <Slider ref={sliderRef} {...settings}>
            {content.img.map((item, index) => (
              <div key={index} className="carrd">
                <div className="img-main">
                  <div className="img">
                    <div className="thumbnails">
                      <img src={item.image} alt="" onClick={() => sliderRef.current.slickGoTo(index)} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default App;
