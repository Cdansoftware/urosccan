import React from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import Heading from "../heading/Heading";

const Gallery = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title */}
        <Heading text="Gallery" />

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Big Image */}
          <div className="col-span-2 row-span-2">
            <img
              src={img1}
              alt="Gallery 1"
              className="w-full h-full object-cover rounded-lg shadow"
            />
          </div>

          {/* Small Images */}
          <img
            src={img2}
            alt="Gallery 2"
            className="w-full h-full object-cover rounded-lg shadow"
          />
          <img
            src={img3}
            alt="Gallery 3"
            className="w-full h-full object-cover rounded-lg shadow"
          />
          <img
            src={img4}
            alt="Gallery 4"
            className="w-full h-full object-cover rounded-lg shadow"
          />
          <img
            src={img5}
            alt="Gallery 5"
            className="w-full h-full object-cover rounded-lg shadow"
          />
           <img
            src={img6}
            alt="Gallery 5"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
