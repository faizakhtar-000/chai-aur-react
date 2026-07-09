import React from "react";

function Card({
  title = "Card Title",
  description = "This is a simple card component built using React and Tailwind CSS.",
  image = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
  buttonText = "Read More",
}) {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
      <img src={image} alt={title} className="w-full h-56 object-cover" />

      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>

        <p className="text-gray-600 mb-5">{description}</p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Card;
