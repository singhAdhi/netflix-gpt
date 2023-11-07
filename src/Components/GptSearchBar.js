import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
  const inputAll = useRef();
  const [val, setVal] = useState([]);
  const [one, setOne] = useState("");
  const lange = useSelector((store) => store.config?.lang);
  useEffect(() => {
    // Set a new timer to make the API call after the specified delay
    let timer = setTimeout(() => {
      getData();
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, [one]);
  const getData = async () => {
    const response = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${one}`
    );
    const data = await response.json();

    setVal(data[1]);
  };

  return (
    <div className="-mt-4 flex flex-col justify-center bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg)] bg-cover bg-center h-[100vh] items-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className=" p-4 m-4 col-span-12"
          type="text"
          placeholder={lang[lange].gptSearchPlaceholder}
          value={one}
          onChange={(e) => setOne(e.target.value)}
        />
      </form>
      {inputAll && (
        <div className="bg-white rounded-md w-full md:w-1/2">
          {val.map((x, index) => {
            return (
              <p
                key={index}
                className="text-black font-semibold pb-2 px-4 pt-2 cursor-pointer"
              >
                {x}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
