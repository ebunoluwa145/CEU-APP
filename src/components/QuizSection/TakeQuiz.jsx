import todo from "../../assets/todo.jpg";

export default function TakeQuiz() {
  return (
    <div className="my-6 bg-purple-700 text-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-6 h-44 w-full max-w-lg mx-auto">
    {/* Image */}
    <img
      src={todo}
      alt="Take a Quiz"
      className="rounded-full w-20 h-20 object-cover shadow-md"
    />
  
    {/* Text */}
    <div className="flex flex-col justify-center">
      <h3 className="text-2xl font-bold">Take a Quiz</h3>
      <p className="text-lg">Challenge yourself with Bible quizzes</p>
    </div>
  </div>
  
  );
}

