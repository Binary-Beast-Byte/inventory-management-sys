import React, { useState, useContext } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./NavBarStyles.css";
import { RiDashboardLine } from "react-icons/ri";
import { BiBookContent } from "react-icons/bi";
import { SiPhpmyadmin, SiTextpattern } from "react-icons/si";
import { RiUserSettingsLine } from "react-icons/ri";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft, AiOutlineUserAdd } from "react-icons/ai";
import { menuContext } from "../Hooks/MenuContext";
import { MdOutlineInventory2 } from "react-icons/md";

const NavBar = () => {
  //hamBurger Button

  const { hamBurger, setHamBurger } = useContext(menuContext);

  const [dropDown, SetDropDown] = useState(false);
  const handleDropDown = () => {
    SetDropDown(!dropDown);
  };

  const navigate = useNavigate();

  //Route track using useLocation
  const localpath = useLocation();
  const paths = localpath.pathname.split("/");
  const length = paths.length;
  const currentPath = paths[length - 1];

  return (
    <>
      {/* TopNav */}
      <div
        className={`sticky top-0 flex justify-between items-center bg-gradient-to-l from-red-300 to-black py-3 px-5 transition-all z-10 ${
          hamBurger ? "ml-24" : "ml-72"
        }`}
      >
        <div className="flex">
          <button
            onClick={() => setHamBurger(!hamBurger)}
            className="text-white mr-3 text-xl p-2 rounded-md transition-all"
          >
            {hamBurger ? <AiOutlineDoubleRight  /> : <AiOutlineDoubleLeft />}
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent w-[100%] border-b-2 border-black text-gray-400 outline-none  hidden md:block py-2 px-3"
          />
        </div>
        <div>
        </div>
      </div>

      {/* BottomNav */}

      {/* SideNav */}
      <div
        className={`fixed top-0 bottom-0 left-0 bg-gradient-to-t from-red-300 to-black transition-all ${
          hamBurger ? "w-24" : "w-72"
        }`}
      >
        <div className="logo flex justify-center items-center my-4">
          <h1 className="text-2xl text-white font-bold">
            <Link to="/" className="flex justify-center items-center">
              {hamBurger ? (
                <span className="p-2"><MdOutlineInventory2 color='white' size={50} /></span>
              ) : (
                <span className="p-2"> <MdOutlineInventory2 color='white' size={70}/>
                </span>
              )}
            </Link>
          </h1>
        </div>
        <div className="mx-5">
          <ul>

          <li>
              <NavLink
                to="userpanel"
                className="flex items-center  text-white text-sm py-3 px-2 my-1 rounded-xl hover:bg-red-500"
              >
                <AiOutlineUserAdd className="mx-2 text-xl" />
                {hamBurger ? null : "user panel"}
              </NavLink>
            </li>
           
            <li>
              <NavLink
                to="coremodel"
                className="flex items-center text-white text-sm py-3 px-2 my-1 rounded-xl hover:bg-red-500"
              >
                <SiPhpmyadmin className="mx-2 text-2xl" />
                {hamBurger ? null : "core model"}
              </NavLink>
            </li>
          
            
            <li>
              <NavLink
                to="records"
                className="flex items-center  text-white text-sm py-3 px-2 my-1 rounded-xl hover:bg-red-500"
              >
                <BiBookContent className="mx-2 text-xl" />
                {hamBurger ? null : "records"}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${
          hamBurger ? "ml-[106px]" : "ml-[288px]"
        } transition-all  mt-[64px]`}
      >
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
