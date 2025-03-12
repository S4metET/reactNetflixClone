import { CiBookmark } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { useState, useEffect } from "react";



const Recommended = () => {
    const [data, setData] = useState([]);
    const [errMessage, setErrMessage] = useState(null);

     useEffect(() => {
        const getUsers = async () => {
          try {
            const response = await fetch('https://clonejson.vercel.app/api/movies?limit=10')
            if (!response.ok) {
              throw new Error('Bir hata oluştu');
            }
            const data = await response.json();
            console.log(data);
            setData(data);
          } catch (err) {
            console.log(err);
            setErrMessage(err.message);
          }
        };
        getUsers();
      }, []);
    
      if (errMessage) {
        return (
          <>
            <p>{errMessage}</p>
          </>
        );
      }
      return (
        <>
          <div>
            <h1 className="text-white p-4">Recommended for you</h1>
          </div>
          <div className="grid px-4 gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {data.length === 0 ? (
              <p>İçerik bulunamadı</p>
            ) : (
              data.map(data => (
                <div className="flex flex-col text-white" key={data.title}>
                  <div className="relative p-0.5">
                    <img
                      src={data.image}
                      alt=""
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <CiBookmark className="absolute top-2 right-2 text-white text-xl w-[25px] h-[25px] p-1 rounded-full cursor-pointer bg-gradient-to-b from-[rgba(0,0,0,0.0001)] to-[rgba(0,0,0,0.75)]" />
                  </div>
      
                  <div className="flex p-0.5 items-center gap-2 opacity-75 text-xs">
                    <p className="text-white">{data.release_date}</p>
                    <FaCircle className="w-[3px] h-[3px]" />
                    <TbMovie />
                    <p>{data.type}</p>
                  </div>
                  <h1 className="text-sm font-semibold">{data.title}</h1>
                </div>
              ))
            )}
          </div>
        </>
      );
      
}





export default Recommended