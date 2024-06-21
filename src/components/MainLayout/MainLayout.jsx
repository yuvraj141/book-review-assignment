import { Outlet } from "react-router-dom";
import Nav from "../Nav";

export default function MainLayout(){

    return(
     <div>
         <div className="h-20">
        <Nav></Nav>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
     </div>
    )
}