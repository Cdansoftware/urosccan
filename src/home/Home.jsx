import React, { useEffect, useState } from "react";
import Carousel from "../components/carousel/Carousel";
import Testimonial from "../components/testimonial/Testimonial";
import Right from "../components/rightImg/Right";
import Left from "../components/leftImg/Left";
import Chess from "../components/chess/Chess";
import CardBox from "../components/cardBox/CardBox";
import ContactModal from "../components/popup/Popup";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal as soon as component mounts
    setShowModal(true);
  }, []);

  return (
    <div>
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
      <Carousel />
      <Testimonial />
      <Right />
      <Left />
      <Chess />
      <CardBox />
    </div>
  );
};

export default Home;
