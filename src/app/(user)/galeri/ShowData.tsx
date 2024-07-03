/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import { FC, useEffect, useState } from "react";
import slide from "./slide";
import LightPlugins from "@/components/lightBox/LightPlugins";
import useGallery from "@/stores/crud/Gallery";
import PhotoAlbum from "react-photo-album";

type Props = {};

const ShowData: FC<Props> = ({}) => {
  // store
  const { setGallery, dtGallery } = useGallery();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [indexBox, setIndexBox] = useState<number>(-1);
  const [slides, setSlides] = useState<any>();

  const fetchDataGallery = async () => {
    const res = await setGallery({
      page,
      limit,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataGallery();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  useEffect(() => {
    setSlides(slide(dtGallery.data));
  }, [dtGallery.data]);

  return (
    <div className="flex-1 flex-col max-w-full h-full overflow-auto">
      {/* lightBox */}
      <LightPlugins index={indexBox} setIndex={setIndexBox} slides={slides} />
      {/* table */}
      {isLoading ? (
        <LoadingSpiner />
      ) : (
        <>
          <div className="">
            <PhotoAlbum
              layout="masonry"
              photos={slides}
              onClick={({ index: current }) => setIndexBox(current)}
            />
            {/* lightBox */}
          </div>
          {dtGallery?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtGallery?.current_page}
                totalPages={dtGallery?.last_page}
                setPage={setPage}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ShowData;
