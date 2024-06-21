import { useLoaderData } from "react-router-dom"
import Book from "../Book/Book"
export default function Books({books}){
    
    // const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=books
    console.log(books)
    return (
        <div>
           <h1 className="text-center text-4xl font-bold"> Books</h1>
           
           <div className="grid grid-cols-3 mr-6 container mx-auto gap-6  ">
            {
                books.map(book=> <Book book={book}></Book>)
            }
           </div>
        </div>
    )
}