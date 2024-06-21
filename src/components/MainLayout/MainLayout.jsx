import { Outlet } from "react-router-dom";
import Nav from "../Nav";

export default function MainLayout(){

    return(
     <div>
         <div className="container mx-auto">
         <div className="h-20">
        <Nav></Nav>
      </div>
      <div className="min-h-[calc(100vh-80px)]">
        <Outlet></Outlet>
      </div>
         </div>
     </div>
    )
}