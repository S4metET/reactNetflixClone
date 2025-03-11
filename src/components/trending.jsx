import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { CiBookmark, CiBookmarkCheck } from "react-icons/ci";

const Trending = ({ addBookmark }) => {
    const [saved, setSaved] = useState(false);

    const handleBookmarkClick = () => {
        setSaved(!saved);
        const movie = {
            title: "Beyond Earth",
            year: "2019",
            genre: "Movie",
            rating: "PG"
        };
        
        if (!saved) {
            addBookmark(movie);
        } else {
            console.log("Beyond Earth kayıttan kaldırıldı!");
        }
    };
import { CiBookmark } from "react-icons/ci";
import img from "../image/Rectangle.png"
    return (
        <div className="px-4" >
            <div className="mb-4" >
                <h1 className="text-white">Trending</h1>
            </div>
        <div className="relative w-[240px] h-[140px] rounded-md overflow-hidden">
      <img
        src={img}
        alt="Movie Thumbnail"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-between p-2 text-white">
      <div className="flex justify-end">
          <CiBookmark className="text-xl w-[32px] h-[32px] p-1 rounded-full cursor-pointer bg-gradient-to-b from-[rgba(0,0,0,0.0001)] to-[rgba(0,0,0,0.75)] " />
      </div>
        <div>
            <div className="flex items-center gap-2 opacity-75 text-xs">
              <p>2019</p>
              <FaCircle className="w-[3px] h-[3px] " />
              <TbMovie />
              <p>Movie</p>
            </div>
            <div>
                <img src="" alt="" />
                <div>
                    <h3>Beyond Earth</h3>
                </div>
                <div>
                    <p>2019</p>
                    <FaCircle />
                    <TbMovie />
                    <p>Movie</p>
                </div>
                <div>
                    <h1>PG</h1>
                </div>
                <div onClick={handleBookmarkClick} style={{ cursor: "pointer" }}>
                    {saved ? <CiBookmarkCheck /> : <CiBookmark />}
                </div>
            </div>
        </div>
    );
};
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold">Beyond Earth</h3>
              <h1 className="px-2 py-1 opacity-50  bg-[Dark Blue] rounded text-sm">PG</h1>
            </div>
        </div>
      </div>
    </div>
    </div>
        
    )
}

export default Trending;