import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitalMemeCard } from "../../Store/memeCardSlice";
import Shemmer from "../Shemmer/Shemmer";
import NotFound from "../404/NotFound";

function Card() {
  const dataValue = useSelector((sate) => sate.cards.cardsData.memes);
  const pending = useSelector((sate) => sate.cards.loding);
  const errorCheck = useSelector((sate) => sate.cards.seterror);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInitalMemeCard());
  }, []);

  if (pending) {
    return <Shemmer />;
  }

  if (errorCheck === "rejected") {
    return <NotFound />;
  }

  if (!dataValue) {
    return null;
  }

  return (
    <>
      <div className="bg-[#121212] py-10 w-full">
        <div className="columns-1 sm:columns-2 md:columns-3  gap-4 px-5 lg:px-20">
          {dataValue.map((item, index) => (
            <div
              className=" overflow-hidden bg-[#F0F0F0] mb-5 rounded-2xl shadow-sm shadow-[#F0F0F0]"
              key={index}
            >
              <div className="flex flex-col gap-3">
                <img
                  src={item.preview[0]}
                  className="w-full rounded-t-2xl"
                  alt=""
                />
                <h1 className="text-center  py-2 px-2 font-semibold">
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
