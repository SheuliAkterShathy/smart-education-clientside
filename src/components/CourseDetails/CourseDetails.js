import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";


const ref = React.createRef();

const CourseDetails = () => {
  const course = useLoaderData();
  console.log(course);
  const { id, title, img, description,assignment,duration,price,rating } = course;
  return (
   
      <div className="py-5 bg-violet-300">
       <div ref={ref}  className="max-w-lg p-4 shadow-md bg-gray-800 text-gray-100 mx-auto ">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            
              Course No: {id}
            
          </div>
          <Pdf targetRef={ref} filename={title} x={40} y={.5}>
             {({ toPdf }) => <button className="hover:bg-violet-400 px-2 rounded-md" onClick={toPdf}>Generate Pdf</button>}
          </Pdf>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={img}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
          
          </div>
          <div className="space-y-2">
           
             <div className="flex justify-between text-violet-400 mb-3">
             <h3 className="text-2xl font-semibold ">{title}</h3>
             <p>Price: ${price}</p>
             </div>
          
            <p className="leading-snug text-gray-400">{description}</p>
          </div>
          <div className="flex justify-between text-violet-400">
            <div>Assignment:{assignment}</div>
             <div>Duration:{duration}</div>
            <div>Ratings:{rating?.rate}</div> 
          </div>
        </div>

        <Link to={`/checkouts/${id}`}>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-500 mt-6 mb-3"
          >
            Get premium access
          </button>
        </Link>
      </div> 
    
    </div>
  
  );
};

export default CourseDetails;
