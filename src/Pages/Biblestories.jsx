import StoryCards from "../components/BibleStoriesPreview/StoryCards"
import stories from "../data/stories"; // ✅ use default import if you exported default
import TakeQuiz from "../components/QuizSection/TakeQuiz";

export default function BibleStories() {
    return (
      
    <>
        <section className="py-14 px-10 bg-gray-100">
              <h2 className="py-6 text-3xl font-bold mb-6 text-center">Bible  Stories</h2>
              <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {stories.map((story, index) => (
                  <StoryCards key={index} {...story} />
                ))}
              </div>
            </section>

            
        

      </>
    );
  }
  