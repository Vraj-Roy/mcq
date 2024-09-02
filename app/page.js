import FAQ from "@/components/FAQ";
import Image from "next/image";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <div className="flex mx-4  md:mx-10 my-10 flex-wrap justify-between gap-y-4 md:gap-y-6  z-10">
        <div className="  border-2  w-[400px]  bg-white  shadow-md hover:scale-[1.01] rounded-md overflow-hidden  duration-200 transition-all hover:shadow-lg cursor-pointer p-3">
          <div className="bg-zinc-200 font-bold text-green-700 p-2 rounded">
            Engineering
          </div>
          <div className="flex p-2">
            <img
              className="w-14 h-14"
              src="https://mcqquestions.net/static/images/q-%26-a.webp"
            />
            <div className="flex flex-col px-2 gap-y-3">
              <div className="hover:underline ">Civil Engineering</div>
              <div className="hover:underline "> Electrical Engineering</div>
              <div className="hover:underline "> Mechanical Engineering</div>
              <div className="hover:underline ">
                {" "}
                Electronics and Comm. Engineering
              </div>
            </div>
          </div>
        </div>
        <div className="     w-[400px] border-2 bg-white  shadow-md hover:scale-[1.01] rounded-md overflow-hidden  duration-200 transition-all hover:shadow-lg cursor-pointer p-3">
          <div className="bg-zinc-200 font-bold text-green-700 p-2 rounded">
            General Aptitude
          </div>
          <div className="flex p-2">
            <img
              className="w-14 h-14"
              src="https://mcqquestions.net/static/images/q-%26-a.webp"
            />
            <div className="flex flex-col px-2 gap-y-3">
              <div className="hover:underline "> Aptitude</div>
              <div className="hover:underline "> Reasoning</div>
              <div className="hover:underline "> General Science</div>
              <div className="hover:underline ">English</div>
            </div>
          </div>
        </div>
        <div className="     w-[400px] border-2 bg-white  shadow-md hover:scale-[1.01] rounded-md overflow-hidden  duration-200 transition-all hover:shadow-lg cursor-pointer p-3">
          <div className="bg-zinc-200 font-bold text-green-700 p-2 rounded">
            Computer
          </div>
          <div className="flex p-2">
            <img
              className="w-14 h-14"
              src="https://mcqquestions.net/static/images/q-%26-a.webp"
            />
            <div className="flex flex-col px-2 gap-y-3">
              <div className="hover:underline "> Computer Fundamental</div>
              <div className="hover:underline "> Networking</div>
              <div className="hover:underline ">
                {" "}
                Database Management System
              </div>
              <div className="hover:underline "> C Program</div>
            </div>
          </div>
        </div>
        <div className="     w-[400px] border-2 bg-white  shadow-md hover:scale-[1.01] rounded-md overflow-hidden  duration-200 transition-all hover:shadow-lg cursor-pointer p-3">
          <div className="bg-zinc-200 font-bold text-green-700 p-2 rounded">
            GK
          </div>
          <div className="flex p-2">
            <img
              className="w-14 h-14"
              src="https://mcqquestions.net/static/images/q-%26-a.webp"
            />
            <div className="flex flex-col px-2 gap-y-3">
              <div className="hover:underline "> Static GK</div>
              <div className="hover:underline "> History</div>
              <div className="hover:underline "> Geography</div>
              <div className="hover:underline "> Polity</div>
              <div className="hover:underline "> Economics</div>
            </div>
          </div>
        </div>
        <div className="     w-[400px] border-2 bg-white  shadow-md hover:scale-[1.01] rounded-md overflow-hidden  duration-200 transition-all hover:shadow-lg cursor-pointer p-3">
          <div className="bg-zinc-200 font-bold text-green-700 p-2 rounded">
            ITI
          </div>
          <div className="flex p-2">
            <img
              className="w-14 h-14"
              src="https://mcqquestions.net/static/images/q-%26-a.webp"
            />
            <div className="flex flex-col px-2 gap-y-3">
              <div className="hover:underline "> NIMI Mock Test</div>
            </div>
          </div>
        </div>
        <div className="     w-[400px] border-2 bg-white  shadow-md hover:scale-[1.01] rounded-md overflow-hidden  duration-200 transition-all hover:shadow-lg cursor-pointer p-3">
          <div className="bg-zinc-200 font-bold text-green-700 p-2 rounded">
            Previous Exams
          </div>
          <div className="flex p-2">
            <img
              className="w-14 h-14"
              src="https://mcqquestions.net/static/images/q-%26-a.webp"
            />
            <div className="flex flex-col px-2 gap-y-3">
              <div className="hover:underline "> SSC</div>
            </div>
          </div>
        </div>
        <div className="     w-[400px] border-2 bg-white  shadow-md hover:scale-[1.01] rounded-md overflow-hidden  duration-200 transition-all hover:shadow-lg cursor-pointer p-3">
          <div className="bg-zinc-200 font-bold text-green-700 p-2 rounded">
            CBSE 12
          </div>
          <div className="flex p-2">
            <img
              className="w-14 h-14"
              src="https://mcqquestions.net/static/images/q-%26-a.webp"
            />
            <div className="flex flex-col px-2 gap-y-3">
              <div className="hover:underline "> Class 12th Physics</div>
            </div>
          </div>
        </div>
        <div className="     w-[400px] border-2 bg-white  shadow-md hover:scale-[1.01] rounded-md overflow-hidden  duration-200 transition-all hover:shadow-lg cursor-pointer p-3">
          <div className="bg-zinc-200 font-bold text-green-700 p-2 rounded">
            CBSE 9
          </div>
          <div className="flex p-2">
            <img
              className="w-14 h-14"
              src="https://mcqquestions.net/static/images/q-%26-a.webp"
            />
            <div className="flex flex-col px-2 gap-y-3">
              <div className="hover:underline "> Class 9 Science</div>
              <div className="hover:underline "> Class 9 Computer</div>
            </div>
          </div>
        </div>
        <div className="     w-[400px] border-2 bg-white  shadow-md hover:scale-[1.01] rounded-md overflow-hidden  duration-200 transition-all hover:shadow-lg cursor-pointer p-3">
          <div className="bg-zinc-200 font-bold text-green-700 p-2 rounded">
            CBSE 10
          </div>
          <div className="flex p-2">
            <img
              className="w-14 h-14"
              src="https://mcqquestions.net/static/images/q-%26-a.webp"
            />
            <div className="flex flex-col px-2 gap-y-3">
              <div className="hover:underline "> Class 10 Science</div>
              <div className="hover:underline "> Class 10th Computer</div>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
      <Footer />
    </>
  );
}
