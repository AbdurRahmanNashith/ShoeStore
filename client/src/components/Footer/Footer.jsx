import React from 'react'
import("./footer.scss")

const footer = () => {
  return (

    <div className="footer">

      <div className="top">
        <div className="item">
          <span> Contact us</span>
          <span> Delivery Information</span>
          <span> Returns & Refunds</span>
          <span> Customer Service</span>
          <span> Size Guide</span>
          <span> FAQs</span>  </div>

        <div className="item">
          <span> Store Loactor</span>
          <span> About Shoe Style</span>
          <span> Prodcut Care</span>
          <span> Sustainability</span>
        </div>

        <div className="item">
          <span> Facebook</span>
          <span> Instagram</span>
          <span> Youtube</span>
          <span> Whatsapp</span>
        </div>

      </div>

      <div className="bottom">
        <div className="logo">SHOE STYLE</div>
        <span className="copyrigh">© 2023 shoestyle.com </span>
        
      </div>


    </div>
  )
}

export default footer
