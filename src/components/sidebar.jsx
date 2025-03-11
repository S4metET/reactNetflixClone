import { MdMovie } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { GiTv } from "react-icons/gi";
import { FaBookmark } from "react-icons/fa";
import profileImage from "../image/user.svg"

const Sidebar = () => {
    return (
        <header>
            <div>
                <a href=""><MdMovie /></a>
            </div>
            <div>
                <a href=""><FaHome /></a>
                <a href=""><TbMovie /></a>
                <a href=""><GiTv /></a>
                <a href=""><FaBookmark /></a>
            </div>
            <div>
                <a href=""><img src={profileImage} alt="" /></a>
            </div>
        </header>
    )
}

export default Sidebar