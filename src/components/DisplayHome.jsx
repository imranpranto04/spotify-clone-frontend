import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";

const DisplayHome = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="mb-4">
          <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
          <div className="flex overflow-auto">
            {albumsData.map((item, index) => (
              <AlbumItem item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
