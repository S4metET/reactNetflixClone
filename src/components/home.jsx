import Recommended from "./recommended";
import Trending from "./trending";

export default function HomePage(){
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