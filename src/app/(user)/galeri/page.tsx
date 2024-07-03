/** @format */
"use client";
import ShowData from "./ShowData";
// gallery

const Gallery = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="mb-4">
        {/* keterangan */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">Galeri</h2>
        </div>
      </div>
      <ShowData />
    </div>
  );
};

export default Gallery;
