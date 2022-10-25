import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
  return (
    <div className="md:grid grid-cols-7 p-6 gap-4 bg-violet-200">
        <div className="col-span-2 bg-violet-300 pt-8">
           {
            courses.map(course=><Link to={`/courses/${course.id}`}><ul className="text-2xl font-bold m-3 p-4 hover:bg-violet-400 rounded-md">{course.title}</ul></Link>)
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
