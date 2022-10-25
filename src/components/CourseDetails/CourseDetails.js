import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  console.log(course);
  const {id,title,img,description}= course;
  return (
    <div className="py-5 bg-violet-300">
      <div className="max-w-lg p-4 shadow-md bg-gray-800 text-gray-100 mx-auto">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize text-gray-100"
            >
            Course No: {id}
            </a>
          </div>
          <a rel="noopener noreferrer" href="#">
            PDF
          </a>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={img}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold text-violet-400">
               {title}
              </h3>
            </a>
            <p className="leading-snug text-gray-400">
              {description}
            </p>
          </div>
        </div>

        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-500 mt-6">Go Premium</button>
      </div>
    </div>
  );
};

export default CourseDetails;
