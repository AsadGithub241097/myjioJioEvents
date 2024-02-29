import "./ProductPramotion.css";
import React from "react";
import watch1 from "../ProductPramotionPage/Product-image/watch.png";
import watch2 from "../ProductPramotionPage/Product-image/watch.png";
import watch3 from "../ProductPramotionPage/Product-image/watch.png";
import watch4 from "../ProductPramotionPage/Product-image/watch.png";
import watch5 from "../ProductPramotionPage/Product-image/watch.png";
import watch6 from "../ProductPramotionPage/Product-image/watch.png";
import watch7 from "../ProductPramotionPage/Product-image/watch.png";
import platform1 from "../ProductPramotionPage/Product-image/platform.png";

const ProductPramotion = () => {
  const PramotionProductArray = [
    { productitem: watch1, productname: "Product Launch", platform: platform1 },
    { productitem: watch2, productname: "Product Launch" },
    { productitem: watch3, productname: "Product Launch" },
    { productitem: watch4, productname: "Product Launch" },
    { productitem: watch5, productname: "Product Launch" },
    { productitem: watch6, productname: "Product Launch" },
    { productitem: watch7, productname: "Product Launch" },
  ];
  return (
    <div className="ProductPramoMainDiv">
      <div className="ProductPramotionHeading">
        <p className="PPHeading">Browse by categories</p>
      </div>

      <div className="ProductCardsLine1">
        {PramotionProductArray.map((item) => (
          <div className="Cards">
            <div class="wave-01"></div>
            <div class="wave-02"></div>
            <div class="wave-03"></div>
            <img className="ProductIMG" src={item.productitem} />
            <p className="ProductTitle">{item.productname}</p>
          </div>
        ))}
      </div>
      <div className="ProductCardsLine2">
        <div className="card1">
          <p>Asad</p>
        </div>
        <div className="card2">
          <p>Asad</p>
        </div>
        <div className="card3">
          <p>Asad</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPramotion;
