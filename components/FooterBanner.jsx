import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    buttonText,
    image,
  },
  product,
}) => {
  console.log(product);
  console.log(image);

  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          {/* <p>{discount}</p> */}
          {/* <h3>{largeText1}</h3> */}
          {/* <h3>{largeText2}</h3> */}
          {/* <p>{saleTime}</p> */}
          <img
            src={urlFor(image)}
            alt="engine"
            className="footer-banner-image"
          />
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product.slug.current}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
