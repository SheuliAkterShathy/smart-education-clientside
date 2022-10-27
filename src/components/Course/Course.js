import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Course = ({ course }) => {
  const navigate=useNavigate()
  const { title,id, img,description } = course;
  const handleNavigate = () =>{
       navigate(`/courses/${id}`)
  }
  return (
    
      <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer" onClick={handleNavigate}>
        <div className=" mx-auto p-3 max-w-md rounded-md shadow-md bg-gray-800 text-gray-100 mb-5">
          <img
            src={img}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-44 bg-gray-500"
          />
          <div className="flex flex-col justify-between py-4 space-y-4">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-violet-500">
                {title}
              </h2>
              <p className="text-gray-100">
               {description.slice(0,110)+'...'}
              </p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-2 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900 mb-0 "
            >
            Show Details
            </button>
          </div>
        </div>
      </div>

  );
};

export default Course;
