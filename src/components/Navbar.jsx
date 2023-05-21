import React from "react";
import { create, hamburger, mic, notify, search } from "../assets/icons";
import Logo from "../assets/logo.png";
import { user } from "../assets";

const Navbar = () => {
  return (
    <div className="bg-primary flex flex-row sticky top-0   p-4 px-3  justify-between">
      <div className="flex items-center gap-5 w-[169px]">
        <button className="px-3 py-[0.9rem] hover:bg-secondary rounded-[50%]">
          <img className="" src={hamburger} alt="hamburger" />
        </button>
        <div className="flex items-center gap-1 text-2xl font-bold  font-youtubeSans text-text ">
          <img className="w-8" src={Logo} alt="" />
          YouTube
        </div>
      </div>
      <div className="flex-row item-center w-[600.17px]">
        <form className="flex items-center">
          <input
            autoComplete="off"
            placeholder="Search"
            id="search"
            className="w-[100%] text-text rounded-s-max  outline-none p-1 px-5 bg-primary border-[1px] border-secondary"
            type="search"
          />
          <button className="bg-secondary py-[8px] px-4 rounded-e-max border-[3px] border-secondary ">
            <img src={search} alt="" />
          </button>
          <button className="hover:bg-secondary bg-[#212121] rounded-full px-4 py-[0.9rem] ms-2 flex">
            <img src={mic} alt="mic" />
          </button>
        </form>
      </div>
      <div className="flex items-center gap-2 justify-evenly w-[180px]">
        <button className="px-3 py-[0.9rem] hover:bg-secondary rounded-[50%]">
          <img src={create} alt="create" />
        </button>
        <button className="px-[0.9rem] py-[0.7rem] hover:bg-secondary rounded-[50%]">
          <img src={notify} alt="notifications" />
        </button>
        <button className="w-9 h-9 rounded-full flex items-center">
          <img className="rounded-full w-[100%] h-[100%]" src={user} alt="" />
        </button>
      </div>
      
    </div>
  );
};

export default Navbar;
