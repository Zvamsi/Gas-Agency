export default function Services({ title, details }) {
  return (
    <div className="flex flex-col ">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{details}</p>
    </div>
  );
}
