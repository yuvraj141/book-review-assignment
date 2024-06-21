import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";

export default function Home(){
    const books=useLoaderData()
    
    console.log(books)
    return(
        <div className="py-5">
            <Banner></Banner>
            <div className="py-8">
                <Books books={books}></Books>
            </div>
        </div>

)
}