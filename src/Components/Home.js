import React, { useState } from "react";

import Carousel from "./Custom/Carousel.js";

const Home = () => {
  const [images, setImages] = useState([
    "https://picsum.photos/id/757/600/300",
    "https://picsum.photos/id/756/600/300",
    "https://picsum.photos/id/755/600/300",
    "https://picsum.photos/id/758/600/300"
  ]);

  return (
    <div className="home">
      <Carousel images={images} />
    </div>
  );
};

export default Home;
