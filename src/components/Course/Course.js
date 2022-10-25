import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  console.log(course);
  const { title,id, img,description } = course;
  return (
    
      <div className="">
        <div className=" mx-auto p-3 max-w-md rounded-md shadow-md bg-gray-900 text-gray-100 mb-5">
          <img
            src={img}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-44 bg-gray-500"
          />
          <div className="flex flex-col justify-between py-4 space-y-4">
            <div>
              <h2 className="text-xl font-semibold tracking-wide">
                {title}
              </h2>
              <p className="text-gray-100">
               {description}
              </p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-2 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900 mb-0"
            >
           <Link to={`/courses/${id}`}> Read more</Link>
            </button>
          </div>
        </div>
      </div>

  );
};

export default Course;
