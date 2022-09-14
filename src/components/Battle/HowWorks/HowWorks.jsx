import React from "react";
import Title from "../../Title/Title";
import Nft1 from "../../../images/nft1.png";
import Nft2 from "../../../images/nft2.png";
import Versus from "../../../images/versus.png";

const HowWorks = () => {
  return (
    <div className="container mx-auto">
      <Title titleName={"How Rumble Works?"} />

      <div className="grid md:grid-cols-3 text-white place-items-center ">
        <div>
          <p className="mb-10 text-center font-medium text-2xl">RUMBLE #5795</p>
          <img src={Nft1} alt="" />
          <p className="text-[#D4BA0B] font-medium text-2xl mt-8">
            RUMBLE #5795 Attacked For{" "}
          </p>
          <p className="text-sm font-medium">= (8900-10% + 2% + 1985)</p>
          <p className="text-sm font-medium">= 10173</p>
        </div>

        <div>
          <img src={Versus} alt="" />
        </div>

        <div>
          <p className="mb-10 text-center font-medium text-2xl">RUMBLE #5795</p>
          <img src={Nft2} alt="" />
          <p className="text-[#D4BA0B] font-medium text-2xl mt-8">
            RUMBLE #5795 Attacked For{" "}
          </p>
          <p className="text-sm font-medium">= (8900-10% + 2% + 1985)</p>
          <p className="text-sm font-medium">= 10173</p>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="bg-[#D4BA0B] text-black px-9 py-3 rounded-tl-3xl rounded-br-3xl hover:bg-black hover:text-[#D4BA0B] cursor-pointer transition-transform hover:ease-in-out duration-500 hover:scale-110">
          <p>RUMBLE #1629 WON</p>
        </div>
      </div>

      <div className="bg-black text-white mt-10">
        <div className="grid md:grid-cols-3 py-5 place-items-center">
          <div className="text-left font-medium text-4xl">
            <p>Final</p>
            <p>Attack</p>
            <p>Power</p>
          </div>
          <p className="text-[#D4BA0B]  text-5xl">=</p>
          <div className="text-2xl font-medium">
            <p>Elemental Power +</p>
            <p>Type Advantage (-20% to +20%)+</p>
            <p>Rarity Boost (0-5%)+</p>
            <p>Athena's Blessing (0 to 3000 Random roll)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
