export default function Feedback() {
  fetch("../data/feedBack.json")
    .then((res) => res.json())
    .then((data) => console.log(data));
  return (
    <div>
      feedback
      <h1>Customer Feedback</h1>
    </div>
  );
}
