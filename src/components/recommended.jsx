import { CiBookmark } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";

const Recommended = () => {
    return (
        <div>
            <div>
                <h1>Recommended for you</h1>
            </div>
            <div>
              <div>
                <img src="" alt="" />
                <div>
                    <CiBookmark />
                </div>
              </div>
            <div>
                <p>2019</p>
                <FaCircle />
                <TbMovie />
                <p>Movie</p>
            </div>
            <div>
                <h1>The Great Lanas</h1>
            </div>
            </div>
        </div>
    )
}

export default Recommended