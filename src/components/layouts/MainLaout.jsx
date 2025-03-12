import { useState } from "react";
import Sidebar from "../sidebar";
import Search from "../search";
import App from "../../App";
import HomePage from "../home";
import Movies from "../movies";
import Series from "../series";

export default function MainLayout(){
    const [currentPage, setCurrentPage] = useState(window.location.pathname);

    const navigate = (path) => {
        window.history.pushState({} , "" , path);
        setCurrentPage(path)
    }
    return(
        <div className="bg-[#000000]">
        
                <Sidebar navigate={navigate}/>
            
            <div>
                <Search/>
                <div>
                    <App>
                        {currentPage ==="/" && <HomePage/>}
                        {currentPage === "/filmler" && <Movies/>}
                        {currentPage === "/diziler" && <Series/>}

                    </App>
                </div>
            </div>
        </div>
    )
}