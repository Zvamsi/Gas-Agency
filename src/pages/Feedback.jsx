import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import FeedBackForm from "./FeedBackForm";

export default function Feedback() {
  const [data, setData] = useState([]);

  useEffect(function () {
    fetch("../data/feedBack.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  //   fetch("../data/feedBack.json")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  //   console.log(data);

  return (
    <div className=" space-y-3 ">
      <h1 className="text-4xl font-extrabold text-green-500 drop-shadow-md tracking-wider place-content-center">
        Customer Feedback
      </h1>
      <div className="flex place-content-between">
        <h1 className="mt-19 ml-10">
          Happy customers Count :
          <span className="font-bold">{data.length}</span>
        </h1>
        <Link
          setData={setData}
          data={data}
          className="bg-amber-300 max-h-10"
          to="feedbackForm"
          element={<FeedBackForm />}
        >
          Rate us
        </Link>

        <div className="mr-3 mt-5">
          <p>
            {data?.filter((review) => review.rating === 5).length}-⭐⭐⭐⭐⭐
          </p>
          <p>{data.filter((data) => data.rating === 4).length}-⭐⭐⭐⭐</p>
          <p>{data.filter((data) => data.rating === 3).length}-⭐⭐⭐</p>
          <p>{data.filter((data) => data.rating === 2).length}-⭐⭐</p>
          <p>{data.filter((data) => data.rating === 1).length}-⭐</p>
        </div>
      </div>
      <Outlet />
      {data.map((data) => (
        <div className="border border-gray-300 shadow-md p-4 flex flex-col ml-10 mr-[80px] rounded-4xl">
          <span>Name: {data.name}</span>
          <p>{data.review}</p>
          <span>{"⭐".repeat(data.rating)}</span>
        </div>
      ))}
    </div>
  );
}
