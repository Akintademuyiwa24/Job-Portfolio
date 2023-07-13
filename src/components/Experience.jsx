import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <div id="experience" className="p-10 max-w-[1040px] m-auto md:pl-20">
      <h5 className="text-center text-xl font-bold mt-5 text-sky-800 dark:text-white ">
        Experience
      </h5>
      <div className="shadow-lg p-10  rounded-xl my-3 bg-gray-800 text-white hover:text-white  ">
        <h3 className="py-2 text-center font-bold mb-3">
          Frontend Development
        </h3>
        <div className=" text-sm sm:flex sm:text-md md:flex gap-20 justify-center md:text-md ml">
          <div>
            <div className="flex gap-3 mb-4">
              <BsPatchCheckFill className="mt-2 text-sm text-sky-500" />
              <div>
                <h4 className="font-bold">HTML</h4>
                <small>Experienced</small>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <BsPatchCheckFill className="mt-2 text-sm text-sky-500" />
              <div>
                <h4 className="font-bold">CSS</h4>
                <small>Experienced</small>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <BsPatchCheckFill className="mt-2 text-sm text-sky-500" />
              <div>
                <h4 className="font-bold">JavaScirpt</h4>
                <small>Experienced</small>
              </div>
            </div>
          </div>
          {/* second section */}
          <div>
            <div className="flex gap-3 mb-4">
              <BsPatchCheckFill className="mt-2 text-sm text-sky-500 " />
              <div>
                <h4 className="font-bold">Tailwind</h4>
                <small>Intermediate</small>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <BsPatchCheckFill className="mt-2 text-sm text-sky-500" />
              <div>
                <h4 className="font-bold">Bootstrap</h4>
                <small>Experienced</small>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <BsPatchCheckFill className="mt-2 text-sm text-sky-500" />
              <div>
                <h4 className="font-bold">ReactJs</h4>
                <small>Experienced</small>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </div>
  );
}

export default Experience;
