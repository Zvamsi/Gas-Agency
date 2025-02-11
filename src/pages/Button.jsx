export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-amber-400 cursor-pointer border-none p-2 rounded-xl"
    >
      {children}
    </button>
  );
}
