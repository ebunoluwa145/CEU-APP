import ceu from "../../assets/ceu.jpg";
export default function Hero() {
    return (
      <section className="bg-orange-50 pt-24 pb-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 leading-tight">
            Welcome to TACN CEU Kids Hub
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            Learn Bible stories, play games, and grow in faith—all in one fun app made just for you!
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition">
            Start Exploring
          </button>
        </div>
  
        {/* Right Side - Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img 
            src={ceu} 
            alt="Kids studying Bible" 
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
        </div>
      </section>
    );
  }
  