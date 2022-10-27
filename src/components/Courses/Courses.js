import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
  return (
    <div className="md:grid grid-cols-7 px-6 py-12 gap-6">
        <div className="col-span-2 bg-violet-200 pt-4  pb-4">
          <h2 className="mx-3 text-center font-bold text-3xl underline text-violet-700 mb-4">Selected Courses</h2>
           {
            courses.map(course=><Link to={`/courses/${course.id}`}><ul className="text-2xl font-bold m-3 p-4 bg-violet-400 hover:bg-violet-300 rounded-md text-center">{course.title}</ul></Link>)
           }
        </div>
        <div className=" col-span-5 gap-5 md:grid grid-cols-3 ">
         
          {
            courses.map(course=><Course
                 course={course}
                 key={course.id}
            ></Course>)
          }
         
    </div> 
    </div>
  );
};

export default Courses;
