import { useState } from "react";
import { useNavigate } from "react-router";

export default function FeedBackForm() {
  const [feedBackName, setFeedBackName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const navigate = useNavigate();

  const name = "vamshi";
  function handleSubmit(e) {
    e.preventDefault();
    navigate(-1);
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

    // setData = [...data, newFeedBack];
    if (rating > 4)
      alert(`Thank you soo much for the feedback ${feedBackName}`);
    else
      alert(
        `we are trying to become better every single day and Hoping to assist you further`
      );
  }
  return (
    <div className="place-items-center">
      feedback form
      <form onSubmit={handleSubmit}>
        <div>
          Enter Name:
          <input
            id="name"
            type="text"
            default={name}
            value={feedBackName}
            onChange={(e) => setFeedBackName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div>
          Enter the feedback
          <input
            id="review"
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Type Briefly"
          />
        </div>
        <div>
          what the rating would be out of 5{" "}
          <input
            id="rating"
            type="number"
            max="5"
            min="1"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
