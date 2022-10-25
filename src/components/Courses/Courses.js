import React from "react";

const Courses = () => {
  return (
    <div className=" md:grid grid-cols-5 my-5">
      <div className="col-span-1">
        <ul>
          <li>
            <p>courses-1</p>
            <p>courses-1</p>
            <p>courses-1</p>
            <p>courses-1</p>
            <p>courses-1</p>
            <p>courses-1</p>
          </li>
        </ul>
      </div>

      <div className="col-span-4 gap-4 md:flex ">
        <div className=" mx-auto p-4 max-w-md rounded-md shadow-md bg-gray-900 text-gray-100">
          <img
            src="https://source.unsplash.com/random/300x300/?2"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-60 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-5 space-y-5">
            <div className="space-y-1">
              <h2 className="text-3xl font-semibold tracking-wide">
                Donec lectus leo
              </h2>
              <p className="text-gray-100">
                Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                eget.
              </p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-2 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900 mb-0"
            >
              Read more
            </button>
          </div>
        </div>

    </div>
    </div>
  );
};

export default Courses;
