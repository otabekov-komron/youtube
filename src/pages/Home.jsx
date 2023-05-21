import React from "react";
import SideBar from "../components/SideBar";
import { explore, home, library, sub } from "../assets/icons";
import VideoList from "../components/VideoList";

const Home = () => {
  return (
    <>
      <div className="text-text px-1 fixed  z-10 bg-primary h-screen">
        <div className="w-[8vh] flex flex-col items-center justify-start ">
          <button className="flex flex-col hover:bg-secondary rounded-lg pt-[16px] pb-[14px] w-[100%] items-center text-[10px] gap-2">
            <img className="w-[15px]" src={home} alt="" />
            <p>Home</p>
          </button>
          <button className="flex flex-col hover:bg-secondary rounded-lg pt-[16px] pb-[14px] w-[100%] items-center text-[10px] gap-2">
            <img className="w-[18px]" src={explore} alt="" />
            <p>Explore</p>
          </button>
          <button className="flex flex-col hover:bg-secondary rounded-lg pt-[16px] pb-[14px] w-[100%] items-center text-[10px] gap-2">
            <img className="w-[18px]" src={sub} alt="" />
            <p>Subscriptions</p>
          </button>
          <button className="flex flex-col hover:bg-secondary rounded-lg pt-[16px] pb-[14px] w-[100%] items-center text-[10px] gap-2">
            <img className="w-[18px]" src={library} alt="" />
            <p>Library</p>
          </button>
        </div>
      </div>
      <div className="px-9 ms-[62px]   bg-primary flex flex-col text-text py-2">
        <div className="pb-8 bg-primary hashtags flex justify-start gap-2 sticky top-[5.1rem]  z-50 ">
          <button className=" px-3 py-1.5 text-[14px] rounded-[8px] hover:bg-[#5b5b5b]  bg-[#ffffff1a]  ">
            #TAG
          </button><button className=" px-3 py-1.5 text-[14px] rounded-[8px] hover:bg-[#5b5b5b]  bg-[#ffffff1a]  ">
            #TAG
          </button>
          <button className=" px-3 py-1.5 text-[14px] rounded-[8px] hover:bg-[#5b5b5b]  bg-[#ffffff1a]  ">
            #TAG
          </button>
          <button className=" px-3 py-1.5 text-[14px] rounded-[8px] hover:bg-[#5b5b5b]  bg-[#ffffff1a]  ">
            #TAG
          </button>
          <button className=" px-3 py-1.5 text-[14px] rounded-[8px] hover:bg-[#5b5b5b]  bg-[#ffffff1a]  ">
            #TAG
          </button>
          <button className=" px-3 py-1.5 text-[14px] rounded-[8px] hover:bg-[#5b5b5b]  bg-[#ffffff1a]  ">
            #TAG
          </button>
          <button className=" px-3 py-1.5 text-[14px] rounded-[8px] hover:bg-[#5b5b5b]  bg-[#ffffff1a]  ">
            #TAG
          </button>
          <button className=" px-3 py-1.5 text-[14px] rounded-[8px] hover:bg-[#5b5b5b]  bg-[#ffffff1a]  ">
            #TAG
          </button>
          <button className=" px-3 py-1.5 text-[14px] rounded-[8px] hover:bg-[#5b5b5b]  bg-[#ffffff1a]  ">
            #TAG
          </button>
          <button className=" px-3 py-1.5 text-[14px] rounded-[8px] hover:bg-[#5b5b5b]  bg-[#ffffff1a]  ">
            #TAG
          </button>
          <button className=" px-3 py-1.5 text-[14px] rounded-[8px] hover:bg-[#5b5b5b]  bg-[#ffffff1a]  ">
            #TAG
          </button>
          <button className=" px-3 py-1.5 text-[14px] rounded-[8px] hover:bg-[#5b5b5b]  bg-[#ffffff1a]  ">
            #TAG
          </button>
          <button className=" px-3 py-1.5 text-[14px] rounded-[8px] hover:bg-[#5b5b5b]  bg-[#ffffff1a]  ">
            #TAG
          </button>
          <button className=" px-3 py-1.5 text-[14px] rounded-[8px] hover:bg-[#5b5b5b]  bg-[#ffffff1a]  ">
            #TAG
          </button>
          
        </div>
        <VideoList/>
      </div>
    </>
  );
};

export default Home;
