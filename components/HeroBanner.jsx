import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner, product }) => {
  console.log(heroBanner);
  console.log(product);

  return (
    <div className="hero-banner-container">
      <div className="hero-banner-items">
        <div className="hero-banner-text">
          <p className="BMW-parts">{heroBanner.smallText}</p>
          <h3>{heroBanner.midText}</h3>
          <h1>{heroBanner.largeText1}</h1>

          <div>
            <Link href={`/product/${product.slug.current}`}>
              <button type="button">{heroBanner.buttonText}</button>
            </Link>
            <div className="desc">
              <h5>Description</h5>
              <p>{heroBanner.desc}</p>
            </div>
          </div>
        </div>

        <img
          src={urlFor(heroBanner.image)}
          alt="engine"
          className="hero-banner-image"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
