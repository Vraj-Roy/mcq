import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="md:px-10 px-4 pb-4 bg-zinc-50 shadow-md fixed w-full z-20">
        <div className="flex justify-between">
          <div className="md:text-3xl text-lg text-bold py-4  ">
            MCQ
            <div className="bg-blue-600 text-white inline">Questions.net</div>
          </div>
          <div className=" text-bold py-4 flex  gap-x-2 md:text text-sm font-bold ">
            <button className="bg-blue-600 text-white rounded md:rounded-md px-2 md:px-4 py-1 md:py-2">
              Login
            </button>
            <button className="bg-blue-600 text-white rounded md:rounded-md px-2 md:px-4 py-1 md:py-2">
              Sign up
            </button>
          </div>
        </div>
        <div className="w-full h-fit p-2 flex bg-blue-600 text-white font-bold gap-x-6 rounded flex-wrap md:flex-nowrap md:justify-between md:px-4">
          <div className="cursor-pointer">Engineering</div>
          <div className="cursor-pointer">General Aptitude</div>
          <div className="cursor-pointer">Computer</div>
          <div className="cursor-pointer">GK</div>
          <div className="cursor-pointer">ITI</div>
          <div className="cursor-pointer">Previous Exams</div>
          <div className="cursor-pointer">CBSE 12</div>
          <div className="cursor-pointer">CBSE 11</div>
          <div className="cursor-pointer">CBSE 10</div>
          <div className="cursor-pointer">CBSE 9</div>
        </div>
      </div>
      <div className="md:h-28 h-36"></div>
    </>
  );
};

export default NavBar;
