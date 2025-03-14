import { CiBookmark } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { useState, useEffect } from "react";
import Bookmark from "./Bookmark";
import Loading from "./Loading";
const Series = () => {
   const [data, setData] = useState([]);
   const [errMessage, setErrMessage] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
       
            useEffect(() => {
               const getUsers = async () => {
                 try {
                   const response = await fetch('https://clonejson.vercel.app/api/movies?limit=10')
                   if (!response.ok) {
                     throw new Error('Bir hata oluştu');
                   }
                   const data = await response.json();
                   console.log(data);
                   setData(data.filter(series => series.type === 'series'));
                 } catch (err) {
                   console.log(err);
                   setErrMessage(err.message);
                 }finally{
                  setTimeout(() => {
                    setIsLoading(false);
                  },1000)
  
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
              if(isLoading){
                return (
                 <Loading />
                 )
               }
             return (
               <>
                 <div>
                   <h1 className="text-white p-4">TV Series</h1>
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
                          <div className="absolute top-2 right-2 text-white text-xl w-[25px] h-[25px] p-1 pr-8 rounded-full cursor-pointer ">
                             <Bookmark movie={{id:data.id, date: data.release_date, type:data.type, rating:data.age_rating, title: data.title, image: data.image }} />
                          </div>
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

export default Series

const Series = ({ data }) => {
  return (
    <div>
      <h1 className="text-white p-4">TV Series</h1>
      <div className="grid px-4 gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {data.length === 0 ? (
          <p>No content found</p> // Eğer arama sonucu boşsa, içerik bulunamadığını göster
        ) : (
          data.map((series) => (
            <div className="flex flex-col text-white" key={series.title}>
              <div className="relative p-0.5">
                <img
                  src={series.image}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                <CiBookmark className="absolute top-2 right-2 text-white text-xl w-[25px] h-[25px] p-1 rounded-full cursor-pointer bg-gradient-to-b from-[rgba(0,0,0,0.0001)] to-[rgba(0,0,0,0.75)]" />
              </div>
              <div className="flex p-0.5 items-center gap-2 opacity-75 text-xs">
                <p className="text-white">{series.release_date}</p>
                <FaCircle className="w-[3px] h-[3px]" />
                <TbMovie />
                <p>{series.type}</p>
              </div>
              <h1 className="text-sm font-semibold">{series.title}</h1>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Series;

