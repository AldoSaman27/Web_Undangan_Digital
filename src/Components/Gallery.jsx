import "../Styles/Gallery.css";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const imagesFile = [
    {
      src: "/assets/image/image-1.png",
    },
    {
      src: "/assets/image/image-2.png",
    },
    {
      src: "/assets/image/image-3.png",
    },
    {
      src: "/assets/image/image-4.png",
    },
    {
      src: "/assets/image/image-5.png",
    },
    {
      src: "/assets/image/image-6.png",
    },
    {
      src: "/assets/image/image-7.png",
    },
    {
      src: "/assets/image/image-8.png",
    },
  ];

  return (
    <section data-aos="fade-up" data-aos-duration="1500">
      <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 justify-content-center">
        {imagesFile.map((item, index) => (
          <div
            key={index}
            className="col mt-3"
            onClick={() => {
              setIsOpen(true);
              setImageIndex(index);
            }}
          >
            <img
              src={item.src}
              alt={`Reinhart Paquale & Jessica Elleora ${index}`}
              className="img-fluid w-100 rounded"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={imageIndex}
        slides={imagesFile}
      />
    </section>
  );
};

export default Gallery;
