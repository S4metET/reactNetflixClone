import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
    return (
        <div className="flex bg-[#000000] gap-4 items-center ">
            <div>
            <IoSearchOutline className="text-white" />
            </div>
            <div className="text-white">   
                <input className="text-white w-[214px]" type="text" name="" id="" placeholder="Search for movies or TV series"/>    
            </div>
        </div>
    )
}

export default Search