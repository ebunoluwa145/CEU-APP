import { Link } from "react-router-dom";

export default function StoryCards({ title, description, icon: Icon, link }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
      <div className="text-orange-500 mb-4">
        <Icon size={40} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center mb-4">{description}</p>
      <Link
        to={link}
        className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors duration-300"
      >
        Learn More
      </Link>
    </div>
  );
}
