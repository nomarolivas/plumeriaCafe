import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

const sliderImages = [
    { url: "/Users/nomarolivas/Documents/GitHub/plumeriaCafe/plumeria/src/Images/Stacks Pic 1.jpeg" },
    { url: "/Users/nomarolivas/Documents/GitHub/plumeriaCafe/plumeria/src/Images/Stacks Pic 1.jpeg" },
    { url: "images/3.jpg" },
    { url: "images/4.jpg" },
    { url: "images/5.jpg" },
    { url: "images/6.jpg" },
    { url: "images/7.jpg" },
  ];

const Home = () => {
    const [imageNum, setImageNum] = useState(1);
    return (
 
        <div className="image-slider">
            <SimpleImageSlider
                style={{ margin: '0 auto', padding: '0', width: '100% auto'}}
                    // width= {1070} 
                    width= "100%"
                    height={600}

                    navMargin={0}
                    images={sliderImages}
                    showBullets={true}
                

                    showNavs={true}
                    autoPlay={true} 
                    onStartSlide = {(index, length) => {
                        setImageNum(index);
                    }}
                    autoPlayDelay = {8}
                            
                />

            </div>  
        

    );
}

export default Home;

