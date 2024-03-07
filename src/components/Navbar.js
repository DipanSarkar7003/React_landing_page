import React from "react";
import logo from "../images/logo.svg"

function Navbar(){
    let list_items = ["Features" , "Company" , "Careers" ,"About"]
    return(
<nav className="navbar flex items-center justify-between p-8">

{/* THIS IS NAV BAR LEFT PART  */}

<div className="nav_left flex gap-16 items-center justify-between w-[30%]">


<img src= {logo} alt="i am a logo" />
<ul className="flex gap-10">
{list_items.map((item) =>{
    return(

        <li className="text-md cursor-pointer list_item">{item}</li>
        )
    } )}
</ul>
</div>

{/* THIS IS NAVBAR RIGHT PART  */}

<div className="nav_right items-center"></div>
<ul className="flex gap-4 items-center cursor-pointer">
    <li className="list_item">
        Login
    </li>
    <button className="rounded-md border-slate-50 bg-slate-100 px-4 py-2">
        Register
    </button>
</ul>
</nav>
    );
}

export default Navbar ;