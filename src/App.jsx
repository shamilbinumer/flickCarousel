import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css'

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };

  const handleCardClick = (index) => {
    // console.log("lloooog");
    setSelectedCard(index);
    // Assuming the image URL follows the pattern "/{index}.jpg"
    setSelectedImage(`/${index+1}.jpg`);
    console.log(selectedImage);
  };
  return (
    <>
      <Slider {...settings}>
            {[1, 2, 3, 4, 5,6,7,8,9].map((item, index) => (
            <div key={index} className={`carrd ${selectedCard === index ? 'selected' : ''}`} onClick={() => handleCardClick(index)}>
                <div className="caaard">
                  <div className="img" style={{ backgroundImage: `url(/${item}.jpg)`,backgroundSize:"cover" }}></div>
                  <p className="card-title">CardTitle</p>
                  <p className="card-discrption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit possimus</p>
                </div>
              </div>
            ))}
      </Slider>
      <div className="imaage">
        <img src={selectedImage} alt=""  style={{width:"20%",textAlign:"center"}}/>
      </div>
    </>
  )
}

export default App
