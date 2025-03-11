import { FaCircle } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { CiBookmark } from "react-icons/ci";

const Trending = () => {
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
                <div>
                    <CiBookmark />
                </div>
            </div>
        </div>
    )
}

export default Trending