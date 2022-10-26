import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";


const ref = React.createRef();

const CourseDetails = () => {
  const course = useLoaderData();
  console.log(course);
  const { id, title, img, description } = course;
  return (
   
      <div className="py-5 bg-violet-300">
      <div ref={ref}  className="max-w-lg p-4 shadow-md bg-gray-800 text-gray-100 mx-auto ">
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
          <Pdf targetRef={ref} filename={title}>
            {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
          </Pdf>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={img}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            {/* <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div> */}
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold text-violet-400">{title}</h3>
            </a>
            <p className="leading-snug text-gray-400">{description}</p>
          </div>
        </div>

        <Link to={`/checkouts/${id}`}>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-500 mt-6"
          >
            Get premium access
          </button>
        </Link>
      </div>
      {/* <div className="border m-2">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo debitis ratione expedita accusamus id culpa laboriosam, ut placeat earum velit quas numquam exercitationem provident modi necessitatibus iure! Temporibus dolorem repellat molestias officiis suscipit provident incidunt, nesciunt magnam. Rerum alias est beatae tenetur. Ratione laboriosam architecto obcaecati, libero voluptate excepturi adipisci dolorum! Ullam delectus voluptas, quibusdam perspiciatis libero assumenda inventore quae.</p>
      </div> */}
    </div>
   
  );
};

export default CourseDetails;
