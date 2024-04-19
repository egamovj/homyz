/* eslint-disable no-unused-vars */
import "./Companies.css";

import Prologis from "../../assets/prologis.png";
import Tower from "../../assets/tower.png";
import Equinix from "../../assets/equinix.png";
import Realty from "../../assets/realty.png";

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={Prologis} alt="Prologis" />
        <img src={Tower} alt="Tower" />
        <img src={Equinix} alt="Equinix" />
        <img src={Realty} alt="Realty" />
      </div>
    </section>
  );
};

export default Companies;
