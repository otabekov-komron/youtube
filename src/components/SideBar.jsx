import React from "react";
import {
  explore,
  feedback,
  gaming,
  history,
  home,
  library,
  like,
  live,
  premium,
  report,
  settings,
  showmore,
  sport,
  sub,
  support,
  watchlater,
  yourvideos,
} from "../assets/icons/index";
import { user } from "../assets/index";

const SideBar = () => {
  return (
    <div className="flex flex-col w-[260px] h-[100vh] overflow-y-scroll   bg-primary text-text sticky">
      <div className="p-2 ">
        <div className="py-2 pb-3 border-b-2 border-secondary">
          <button className="p-2 px-3  bg-primary w-[100%] flex hover:bg-secondary rounded-lg items-center justify-start">
            <img src={home} alt="" />
            <p className="ps-7">Home</p>
          </button>
          <button className="p-2 px-3  bg-primary w-[100%] flex hover:bg-secondary rounded-lg items-center justify-start">
            <img src={explore} alt="" />
            <p className="ps-6">Explore</p>
          </button>
          <button className="p-2 px-3  bg-primary w-[100%] flex hover:bg-secondary rounded-lg items-center justify-start">
            <img src={sub} alt="" />
            <p className="ps-6">Subscriptions</p>
          </button>
        </div>
      </div>
      <div className="p-2">
        <div className="py-2 pb-3 border-b-2 border-secondary">
          <button className="p-2 px-3  bg-primary w-[100%] flex hover:bg-secondary rounded-lg items-center justify-start">
            <img src={library} alt="" />
            <p className="ps-7">Library</p>
          </button>
          <button className="p-2 px-3  bg-primary w-[100%] flex hover:bg-secondary rounded-lg items-center justify-start">
            <img src={history} alt="" />
            <p className="ps-6">History</p>
          </button>
          <button className="p-2 px-3  bg-primary w-[100%] flex hover:bg-secondary rounded-lg items-center justify-start">
            <img src={yourvideos} alt="" />
            <p className="ps-7">Your videos</p>
          </button>
          <button className="p-2 px-3  bg-primary w-[100%] flex hover:bg-secondary rounded-lg items-center justify-start">
            <img src={watchlater} alt="" />
            <p className="ps-7">Watch later</p>
          </button>
          <button className="p-2 px-3  bg-primary w-[100%] flex hover:bg-secondary rounded-lg items-center justify-start">
            <img src={like} alt="" />
            <p className="ps-7">Liked videos</p>
          </button>
          <button className="p-2 px-3  bg-primary w-[100%] flex hover:bg-secondary rounded-lg items-center justify-start">
            <img src={showmore} alt="" />
            <p className="ps-8">Show more</p>
          </button>
        </div>
      </div>
      <div className="p-2">
        <div className="py-2 pb-3  border-b-2 border-secondary">
          <p className="px-3 pb-2 w-[100%] ">Subscriptions</p>
          <button className="p-2 px-3  bg-primary w-[100%] flex hover:bg-secondary rounded-lg items-center justify-start">
            <img className="w-5 rounded-full" src={user} alt="" />
            <p className="ps-6">Channel name</p>
          </button>
          <button className="p-2 px-3  bg-primary w-[100%] flex hover:bg-secondary rounded-lg items-center justify-start">
            <img className="w-5 rounded-full" src={user} alt="" />
            <p className="ps-6">Channel name</p>
          </button>
          <button className="p-2 px-3  bg-primary w-[100%] flex hover:bg-secondary rounded-lg items-center justify-start">
            <img src={showmore} alt="" />
            <p className="ps-8">Show 62 more</p>
          </button>
        </div>
      </div>
      <div className="p-2">
        <div className="py-2 pb-3  border-b-2 border-secondary">
          <p className="px-3 pb-2 w-[100%] ">More from YouTube</p>
          <button className="p-2 px-3  bg-primary w-[100%] flex hover:bg-secondary rounded-lg items-center justify-start">
            <img src={premium} alt="" />
            <p className="ps-6">YouTube Premium</p>
          </button>
          <button className="p-2 px-3  bg-primary w-[100%] flex hover:bg-secondary rounded-lg items-center justify-start">
            <img src={gaming} alt="" />
            <p className="ps-6">Gaming</p>
          </button>
          <button className="p-2 px-3  bg-primary w-[100%] flex hover:bg-secondary rounded-lg items-center justify-start">
            <img src={live} alt="" />
            <p className="ps-6">Live</p>
          </button>
          <button className="p-2 px-3  bg-primary w-[100%] flex hover:bg-secondary rounded-lg items-center justify-start">
            <img src={sport} alt="" />
            <p className="ps-7">Sports</p>
          </button>
        </div>
      </div>
      <div className="p-2">
        <div className="py-2 pb-3  border-b-2 border-secondary">
          <button className="p-2 px-3  bg-primary w-[100%] flex hover:bg-secondary rounded-lg items-center justify-start">
            <img src={settings} alt="" />
            <p className="ps-6">Settings</p>
          </button>
          <button className="p-2 px-3  bg-primary w-[100%] flex hover:bg-secondary rounded-lg items-center justify-start">
            <img src={report} alt="" />
            <p className="ps-6">Report history</p>
          </button>
          <button className="p-2 px-3  bg-primary w-[100%] flex hover:bg-secondary rounded-lg items-center justify-start">
            <img src={support} alt="" />
            <p className="ps-6">Help</p>
          </button>
          <button className="p-2 px-3  bg-primary w-[100%] flex hover:bg-secondary rounded-lg items-center justify-start">
            <img src={feedback} alt="" />
            <p className="ps-7">Send feedback</p>
          </button>
        </div>
      </div>
      <div className="p-2">
        <div className="font-semibold text-[#AAAAAA] font-montserrat    px-3 flex flex-wrap gap-2 text-[13px]  pe-14  pb-5">
          <a href="https://youtube.com">About</a>
          <a href="https://youtube.com">Press</a>
          <a href="https://youtube.com">Copyright</a>
          <a href="https://youtube.com">Contact us</a>
          <a href="https://youtube.com">Creators</a>
          <a href="https://youtube.com">Advertise</a>
          <a href="https://youtube.com">Developers</a>
        </div>

        <div className="font-semibold text-[#AAAAAA] font-montserrat    px-3 flex flex-wrap gap-2 text-[13px]  pe-7  mb-4">
          <a href="https://youtube.com">Terms</a>
          <a href="https://youtube.com">Privacy</a>
          <a href="https://youtube.com">Police & Safety</a>
          <a href="https://youtube.com">How YouTube works</a>
          <a href="https://youtube.com">Test new features</a>
        </div>
        <div className="px-3 text-[12px] py-2 text-[#717171]"><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2023 OK-WEB</div>
      </div>
    </div>
  );
};

export default SideBar;
