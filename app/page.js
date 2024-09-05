import FAQ from "@/components/FAQ";
import Image from "next/image";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <div className=" h-[90vh] w-full relative ">
        <img
          src="exam.png"
          className="w-full h-[90vh] object-cover opacity-30"
        />
        <div className="absolute top-0 bottom-0 right-0 left-0 m-auto w-fit h-fit  ">
          <div className="text-6xl text-green-500 font-bold my-8">
            THE MOST POPULAR ONLINE EXAM SITE
          </div>
          <div className="text-3xl  bg-green-500 w-fit m-auto my-8">
            We Will Open The World Of Knowledge For You !
          </div>
          <div className="flex gap-x-5 m-auto w-fit my-8">
            <button className="bg-green-500  px-4 py-2 rounded">
              Get Started
            </button>
            <button className="bg-white text-green-500 px-4 py-2 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* <div className="flex mx-4  md:mx-10 my-10 flex-wrap justify-between gap-y-4 md:gap-y-6  z-10">
        <div className="  border-2  w-[400px]  bg-white  shadow-md hover:scale-[1.01] rounded-md overflow-hidden  duration-200 transition-all hover:shadow-lg cursor-pointer p-3">
          <div className="bg-zinc-200 font-bold text-blue-600 p-2 rounded">
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
          <div className="bg-zinc-200 font-bold text-blue-600 p-2 rounded">
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
          <div className="bg-zinc-200 font-bold text-blue-600 p-2 rounded">
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
          <div className="bg-zinc-200 font-bold text-blue-600 p-2 rounded">
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
          <div className="bg-zinc-200 font-bold text-blue-600 p-2 rounded">
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
          <div className="bg-zinc-200 font-bold text-blue-600 p-2 rounded">
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
          <div className="bg-zinc-200 font-bold text-blue-600 p-2 rounded">
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
          <div className="bg-zinc-200 font-bold text-blue-600 p-2 rounded">
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
          <div className="bg-zinc-200 font-bold text-blue-600 p-2 rounded">
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
      </div> */}
      <div className="flex w-fit m-auto mt-5  ">
        <div className="w-96   border-2  p-4 rounded-md shadow">
          <div className=" text-2xl">Get Support</div>
          <div className="text-green-600 text-lg font-bold my-2">
            Support And Services
          </div>
          <div className=" text-sm">
            Our Support team are at your service. If need anything, request or
            support! We are available for You!
          </div>
        </div>
        <div className="w-96   border-2  p-4 rounded-md">
          <div className=" text-2xl">Get Support</div>
          <div className="text-green-600 text-lg font-bold my-2">
            Support And Services
          </div>
          <div className=" text-sm">
            Our Support team are at your service. If need anything, request or
            support! We are available for You!
          </div>
        </div>
        <div className="w-96   border-2  p-4 rounded-md">
          <div className=" text-2xl">Get Support</div>
          <div className="text-green-600 text-lg font-bold my-2">
            Support And Services
          </div>
          <div className=" text-sm">
            Our Support team are at your service. If need anything, request or
            support! We are available for You!
          </div>
        </div>
      </div>
      <div className="popular-subjects">
        <div className="text-4xl font-bold w-fit m-auto text-green-600 mt-5">
          Out Most Popular subjects
        </div>
        <div className="flex w-fit m-auto mt-5">
          <div className="w-96   border-2  p-4 rounded-md">
            <div className=" text-2xl">Get Support</div>
            <div className="text-green-600 text-lg font-bold my-2">
              Support And Services
            </div>
            <div className=" text-sm">
              Our Support team are at your service. If need anything, request or
              support! We are available for You!
            </div>
          </div>
          <div className="w-96   border-2  p-4 rounded-md">
            <div className=" text-2xl">Get Support</div>
            <div className="text-green-600 text-lg font-bold my-2">
              Support And Services
            </div>
            <div className=" text-sm">
              Our Support team are at your service. If need anything, request or
              support! We are available for You!
            </div>
          </div>
          <div className="w-96   border-2  p-4 rounded-md">
            <div className=" text-2xl">Get Support</div>
            <div className="text-green-600 text-lg font-bold my-2">
              Support And Services
            </div>
            <div className=" text-sm">
              Our Support team are at your service. If need anything, request or
              support! We are available for You!
            </div>
          </div>
        </div>
      </div>
      <div className="achievements"></div>
      <div className="clients"></div>
      <div className="FAQ"></div>
      <div className="Footer"></div>
      <FAQ />
      <Footer />
    </>
  );
}
