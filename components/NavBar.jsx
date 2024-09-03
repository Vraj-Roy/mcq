import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="md:px-10 px-4 pb-4 bg-zinc-50 shadow-md fixed w-full z-20">
        <div className="flex justify-around items-center">
          <div className="md:text-3xl text-lg text-bold py-4  ">
            MCQ
            <div className="bg-blue-600 text-white  inline">Questions.net</div>
          </div>
          <div className="w-full h-fit p-2 flex   font-bold gap-x-6 rounded flex-wrap md:flex-nowrap md:justify-center md:px-4 text-xs md:text-lg">
            <div className="cursor-pointer">About</div>
            <div className="cursor-pointer">Categories</div>
            <div className="cursor-pointer">Subject</div>
            <div className="cursor-pointer">Exam</div>
            <div className="cursor-pointer">Blog</div>
            <div className="cursor-pointer">Contact</div>
          </div>
          <div className=" text-bold py-4 flex  gap-x-2 md:text text-sm font-bold ">
            <button className="  rounded md:rounded-md px-2 md:px-4 py-1 md:py-2 w-fit bg-blue-600 text-white md:text-nowrap">
              Login
            </button>
            <button className="  rounded md:rounded-md px-2 md:px-4 py-1 md:py-2 w-fit bg-blue-600 text-white md:text-nowrap">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="md:h-20 h-28"></div>
    </>
  );
};

export default NavBar;
