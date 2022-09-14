import React from "react";
import "./Home.css";
import nftImage from "../../images/nftImage.png";
import NftRoadmap from "../NftRoadmap/NftRoadmap";
import NftCollection from "../NftCollection/NftCollection";
import Creators from "../Creators/Creators";
import FAQs from "../FAQs/FAQs";
import Partner from "../Partner/Partner";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col backgroundImage">
        <p className="text-white text-4xl text-center lg:text-7xl font-bold">
          THE RUMBLE GENESIS 5 NFT
          <p className="mt-4">COLLECTION</p>
        </p>

        <p className="mt-4 bg-[#D4BA0B] text-black text-lg px-9 py-3 rounded-tl-3xl rounded-br-3xl hover:bg-black hover:text-[#D4BA0B] cursor-pointer transition-transform hover:ease-in-out duration-300 hover:scale-110">
          Mint Is Live
        </p>
      </div>

      <div className="bg-[#1b1b1b] py-40">
        <div className="container mx-auto grid md:grid-cols-2 place-items-end">
          <div>
            <p className="text-[#D4BA0B] font-semibold text-6xl">About</p>
            <p className="text-white mt-10 text-xl font-medium">
              The African continent is filled with many talented artists and art
              collectors. Many of these talented artists do not have the
              opportunity to show their talents to the world due to their art
              only being seen by the people closest to them. Through NFTs, these
              individuals are able to show their art pieces to NFT communities
              around the world.
            </p>
            <p className="text-white mt-4 text-xl font-medium">
              The Big 5 Collection, powered by African NFT, gives African
              artists access to the global NFT market, where their voices can be
              heard and their talents are seen. The African NFT Big 5 Collection
              represents the animals of the Big 5 through unique, artistic
              expression, to embody the essence of Africa, its creativity, and
              its innovation. We hope to capture the beauty of Africa in each of
              the NFTs we produce and that our community shares in the
              excitement of African culture and art.
            </p>
          </div>
          <div>
            <img src={nftImage} alt="" />
          </div>
        </div>
        <NftRoadmap />
        <NftCollection />
        <Creators />
        <FAQs />
        <Partner />
      </div>
    </>
  );
};

export default Home;
