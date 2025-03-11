import { MdMovie } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { GiTv } from "react-icons/gi";
import { FaBookmark } from "react-icons/fa";
import profileImage from "../image/user.svg"

const Sidebar = () => {
    return (
        <header  className=" flex justify-between bg-[#161D2F] px-3 py-5 mb-6">

            <div>
                <a href=""><MdMovie className="w-[25px] h-[20px] text-[#FC4747] " /></a>
            </div>
            <div className="flex gap-6">
                <a href=""><FaHome className="w-4 h-4 text-[#5A698F] " /></a>
                <a href=""><TbMovie className="w-4 h-4 text-[#5A698F] " /></a>
                <a href=""><GiTv className="w-4 h-4 text-[#5A698F] " /></a>
                <a href=""><FaBookmark className="w-4 h-4 text-[#5A698F] " /></a>
            </div>
            <div>
                <a href=""><img src={profileImage} alt="" /></a>
            </div>
        </header>
    )
}

export default Sidebar