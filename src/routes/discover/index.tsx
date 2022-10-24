import React from "react";
import "./discover.scss";
import img1 from '../../assets/images/dis1.jpg'
import img2 from '../../assets/images/dis2.webp'
import img3 from '../../assets/images/dis3.jpg'
import img4 from '../../assets/images/dis4.jpg'

const Discover = () => {
  return (
    <section id="discover">
      <h2> Descubra</h2>

     <div id="discover-list"> 
      <div className="discover-container">
            <div className="discover-item">
              <img src={img1} alt="porshe exclusive manufaktur" />
              <h3> Porshe exclusive manufaktur </h3>
            </div>
      </div>

      <div className="discover-container">
            <div className="discover-item">
              <img src={img2} alt="Porshe Finder" />
              <h3> Porshe Finder </h3>
            </div>
      </div>

      <div className="discover-container">
            <div className="discover-item">
              <img src={img3} alt="Porshe e-performance" />
              <h3> Porshe e-performance </h3>
            </div>
      </div>

      <div className="discover-container">
            <div className="discover-item">
              <img src={img4} alt="Porshe life stile" />
              <h3> Porshe life stile </h3>
            </div>
      </div>
      </div>
    </section>
  );
};

export default Discover;
