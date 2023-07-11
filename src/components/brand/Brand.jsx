import React from "react";
import "./brand.css";
import { sauroncyber, mithriltech, moriasoft } from "./imports";

const Brands = [
  {
    company: sauroncyber,
    image: sauroncyber,
  },
  {
    company: mithriltech,
    image: mithriltech,
  },
  {
    company: moriasoft,
    image: moriasoft,
  },
];

const Brand = () => {
  return (
    <div className="company__brand">
      {Brands.map((brand, index) => (
        <div key={index}>
          <img src={brand.image} alt={brand.company} />
        </div>
      ))}
    </div>
  );
};
export default Brand;
