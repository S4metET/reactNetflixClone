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

    return (
        <div>
            <div>
                <h1>Trending</h1>
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

export default Trending;