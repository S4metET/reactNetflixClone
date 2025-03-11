import { MdMovie } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { GiTv } from "react-icons/gi";
import { FaBookmark } from "react-icons/fa";
import profileImage from "../image/user.svg";
import { useState, useEffect } from "react";

const Sidebar = ({ setPage }) => {
    return (
        <header  className=" flex justify-between items-center bg-[#161D2F] px-3 py-5 mb-6">
            <div>
                <button onClick={() => navigate("/", setPage)}>
                    <MdMovie className="w-[25px] h-[20px] text-[#FC4747]" />
                </button>
            </div>
            <div className="flex gap-6">
                <button onClick={() => navigate("/", setPage)}>
                    <FaHome className="w-4 h-4 text-[#5A698F]" />
                </button>
                <button onClick={() => navigate("/movies", setPage)}>
                    <TbMovie className="w-4 h-4 text-[#5A698F]" />
                </button>
                <button onClick={() => navigate("/tv", setPage)}>
                    <GiTv className="w-4 h-4 text-[#5A698F]" />
                </button>
                <button onClick={() => navigate("/bookmarks", setPage)}>
                    <FaBookmark className="w-4 h-4 text-[#5A698F]" />
                </button>
            </div>
            <div>
                <button><img src={profileImage} alt="Profile" /></button>
            </div>
        </header>
    );
};

function navigate(path, setPage) {
    window.history.pushState({}, "", path);
    setPage(path);
}

const Home = () => {
    return (
        <div>
            <h1>Anasayfa</h1>
        </div>
    );
};

const Movies = () => {
    return (
        <div>
            <h1>Filmler</h1>
        </div>
    );
};

const TVShows = () => {
    return (
        <div>
            <h1>TV Dizileri</h1>
        </div>
    );
};

const Bookmarks = () => {
    return (
        <div>
            <h1>Kaydedilenler</h1>
        </div>
    );
};

const App = () => {
    const [page, setPage] = useState(window.location.pathname);

    useEffect(() => {
        const onPopState = () => setPage(window.location.pathname);
        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
    }, []);

    return (
        <div>
            <Sidebar setPage={setPage} />
            {page === "/" && <Home />}
            {page === "/movies" && <Movies />}
            {page === "/tv" && <TVShows />}
            {page === "/bookmarks" && <Bookmarks />}
        </div>
    );
};

export default Sidebar;
