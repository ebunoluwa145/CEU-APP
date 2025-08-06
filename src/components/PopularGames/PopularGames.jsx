import Ark from "../../assets/Noah.jpg"
import Bible from "../../assets/bible.jpg"
import UpcomingEvent from "../UpcomingEvents/UpcomingEvent"

export default function PopularGames(){
    return(

        <section className="py-12">

        <div className="bg-white shadow-md rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold">Popular Games</h2>
            <button className="text-[#ff7f26] hover:underline">See All</button>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#fdf6ec] p-4 rounded-lg items-center hover:shadow">
              <img
                src={Bible}
                alt="Bible Trivia"
                className="w-full h-50 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-center">Bible Trivia</h3>
                <p className="text-gray-600 text-sm text-center">Test your Bible knowledge with fun trivia.</p>
              </div>
            </div>
            <div className="bg-[#fdf6ec] p-4 rounded-lg items-center hover:shadow">
              <img
                src={Ark}
                alt="Noah's Ark Adventure"
                className="w-full h-50 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-center">Noah's Ark Adventure</h3>
                <p className="text-gray-600 text-sm text-center">Help Noah gather animals and build the ark.</p>
              </div>
            </div>
          </div>
        </div>
        <UpcomingEvent />
        </section>
    )
}