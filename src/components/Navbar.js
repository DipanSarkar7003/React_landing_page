import React from "react";
import logo from "../images/logo.svg"

function Navbar() {
    let list_items = ["Features", "Company", "Careers", "About"]
    return (
        <nav className="navbar w-[100vw] flex items-center justify-between p-8">

            {/* THIS IS NAV BAR LEFT PART  */}

            <div className="nav_left flex  items-center justify-between w-[45%] gap-10">


                <img src={logo} alt="i am a logo" className=" w-[5rem]  sm:w-[9vw] " />
                <ul className=" gap-10 hidden md:flex">
                    {list_items.map((item) => {
                        return (

                            <li className="text-md cursor-pointer list_item">{item}</li>
                        )
                    })}
                </ul>
            </div>

            {/* THIS IS NAVBAR RIGHT PART  */}

            <div className=" hidden md:flex nav_right items-center ">
            <ul className="flex gap-4 items-center cursor-pointer">
                <li className="list_item">
                    Login
                </li>
                <button className="rounded-md border-slate-50 bg-slate-100 px-4 py-2">
                    Register
                </button>
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;