import { useLoaderData } from "react-router-dom"
export default function Book({book}){

  const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=book
  console.log(book)
    return(
        <div>
            <div className="flex-1  bg-[#F3F3F3] flex-grow gap-5 card  shadow-xl">
 <div>
 <figure><img  className="w-40 h-45" src={image} alt="cover pic" /></figure>
 </div>
  <div className="">
    
        <ul className="flex text-[16px] text-center bg-slate-400 text-[#23BE0A] gap-3 ">
            <button className="border rounded-4xl">Young Adult</button>
            <button  className="border rounded-2xl">Identity</button>
           
        </ul>
    
    <h2 className="card-title">{book.bookName}</h2>
    <p>{book.bookName}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    )
}