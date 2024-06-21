import { useLoaderData } from "react-router-dom"
import { CiStar } from "react-icons/ci";
export default function Book({book}){

  const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=book
  console.log(book)
    return(
        <div>
          <div className="max-w-xs p-6 border border-black rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
	<img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-[rgba(19,19,19,0.05)]" />
	<div className="mt-6 mb-5">
		<ul className="flex text-[#23BE0A] gap-3 text-xl font-semibold">
      <li>Young Adult</li>
      <li>Identity</li>
    </ul>
	</div>
  <h2 className="justify-start text-2xl  font-bold">{bookName}</h2>
	<p className="flex justify-start font-semibold dark:text-gray-800 mt-5">By : Awlad Hossain</p>
 <div>
  <ul className="font-semibold flex justify-between">
    <li> Fiction</li>
    <li className="flex gap-2"> {rating} <CiStar className="text-2xl"/></li>
  </ul>
 </div>
</div>
        </div>
    )
}