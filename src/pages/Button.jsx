export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 bg-gray-600 text-white font-medium rounded-lg shadow-md 
                    hover:bg-gray-700 hover:shadow-lg 
                    active:bg-gray-800 active:shadow-inner 
                    focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
    >
      {children}
    </button>
  );
}

<button>Click Me</button>;
