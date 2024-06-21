import { useLoaderData } from "react-router-dom"
import Book from "../Book/Book"
export default function Books({books}){
    
    // const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=books
    console.log(books)
    return (
        <div>
           <h1 className="text-center"> Books</h1>
           <h1 className="text-center"> </h1>
           <h1 className="text-center"> Books</h1>
           <div className="grid grid-cols-3 gap-5 flex-1 flex-grow">
            {
                books.map(book=> <Book book={book}></Book>)
            }
           </div>
        </div>
    )
}