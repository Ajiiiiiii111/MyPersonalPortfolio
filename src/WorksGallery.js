// File: src/worksgallery.js
import React, { useState } from "react";
import "./about.css";

const images = [
  "iba.png",
  "img2.jpg",
  "img3.jpg",
    "img4.jpg",
    "img5.jpg",
"img6.jpg",
];

export default function WorksGallery() {
  const [modalImg, setModalImg] = useState(null);

  return (
    <div>
      <div className="works">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt=""
            onClick={() => setModalImg(src)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
      {modalImg && (
        <div className="modal" onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="" className="modal-img" />
        </div>
      )}
    </div>
  );
}