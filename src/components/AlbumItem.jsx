import React from "react";

const AlbumItem = ({ item }) => {
  const { image, name, desc, id } = item;
  return (
    <>
      <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
        <img className="rounded" src={image} alt="" />
        <p className="">{name}</p>
        <p className="">{desc}</p>
      </div>
    </>
  );
};

export default AlbumItem;
