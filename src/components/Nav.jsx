import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

export default function Nav(){

    return (
        <div className="navbar bg-base-100 flex justify-between shadow-xl px-4 sm:px-8 fixed z-10">
        <div className="flex-1  ">
          <Link to="/" className="font-bold text-2xl gap-0 normal-case">Book Vibe</Link>
        </div>
        <div className="flex-1 gap-2">
          <ul className="menu menu-horizontal px-1 hidden sm:flex gap-5">
            <NavLink to="/" className={({isActive})=> isActive? 'text-green-700 border border-green-600 px-3 rounded font-bold' :'font-bold'}>Home</NavLink>
            
            <NavLink to="/listedbooks" className={({isActive})=> isActive? 'text-primary' :'font-bold'}>Listed Books</NavLink>

            <NavLink to="/pagestoread" className={({isActive})=> isActive? 'text-primary' :'font-bold'}>Pages to Read</NavLink>
            </ul>
           
            </div>
            <div className="flex-1 gap-4">
                <button className="px-5 rounded-lg bg-[#23BE0A] border py-4">Sign In</button>
                <button className="bg-[#59C6D2] px-5 rounded-lg border py-4">Sign Up</button>
            </div>
            </div>
    )
}