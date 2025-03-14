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

