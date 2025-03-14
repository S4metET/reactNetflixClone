import { useState, useEffect } from "react";
import Recommended from "./recommended";
import Trending from "./trending";
import Loading from "./Loading";
import { useState } from "react";



export default function HomePage(){
 const [isLoading, setIsLoading] = useState(true);
    
    setTimeout(() => {
        setIsLoading(false);
      },1000)
    if(isLoading){
        return (
          <Loading />
        )
      }
    return(
        <main>
            <div>
                <Trending/>
                <div>
                <Recommended/>
                </div>
            </div>
        </main>
    )
}

export default function HomePage() {
  const [recommendedData, setRecommendedData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRecommendedData = async () => {
      try {
        const response = await fetch("https://clonejson.vercel.app/api/movies?limit=10");
        if (!response.ok) {
          throw new Error("Error fetching recommended data");
        }
        const data = await response.json();
        setRecommendedData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecommendedData();
  }, []);

  const filteredRecommended = recommendedData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <main>
      <div>
        <Trending />
        <div>
          <input
            type="text"
            placeholder="Arama yapın..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <div>
          <Recommended filteredRecommended={filteredRecommended} />
        </div>
      </div>
    </main>
  );
