import { useState } from "react";
import { useNavigate } from "react-router";
import { useData } from "../Context";
import Button from "./Button";

export default function FeedBackForm() {
  const {
    feedBackName,
    setFeedBackName,
    review,
    setReview,
    rating,
    setRating,
    data,
    setData,
  } = useData();

  const navigate = useNavigate();

  const name = "vamshi";
  function handleSubmit(e) {
    e.preventDefault();
    navigate(-1);
    setFeedBackName("");
    setRating(0);
    setReview("");
    // {
    //     "name": "Rahul Nair",
    //     "rating": 5,
    //     "review": "Best gas station in the area! Polite staff, fast service, and reasonable fuel prices. Highly recommended!"
    //   }
    const newFeedBack = {
      name: feedBackName,
      rating: rating,
      review: review,
    };
    console.log(newFeedBack);

    setData([...data, newFeedBack]);
    if (rating > 4)
      alert(`Thank you soo much for the feedback ${feedBackName}`);
    else
      alert(
        `we are trying to become better every single day and Hoping to assist you further`
      );
  }

  function handleCancel() {
    navigate(-1);
  }
  return (
    <div className="place-items-center font-semibold text-xl">
      <span className="underline text-red-300">feedback form</span>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <span className="mr-5">Enter Name:</span>
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            id="name"
            type="text"
            default={name}
            value={feedBackName}
            onChange={(e) => setFeedBackName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <span className="mr-5">Enter the feedback</span>
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            id="review"
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Type Briefly"
          />
        </div>
        <div>
          <span className="mr-5">what the rating would be out of 5 </span>
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            id="rating"
            type="number"
            max="5"
            min="1"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>

        <div className="space-x-3 mt-4">
          <Button>Submit</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </div>
      </form>
    </div>
  );
}
