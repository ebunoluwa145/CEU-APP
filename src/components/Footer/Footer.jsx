export default function Footer(){
    return (
        <footer className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-2">TACN CEU</h3>
            <p className="text-sm opacity-90">
              Helping children grow in faith through Bible stories, quizzes, and fun games.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#stories" className="hover:underline">Bible Stories</a></li>
              <li><a href="#games" className="hover:underline">Games</a></li>
              <li><a href="#quiz" className="hover:underline">Quiz</a></li>
              <li><a href="#schedule" className="hover:underline">Schedule</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p className="text-sm">📍 Church Address, City</p>
            <p className="text-sm">📞 +234 123 456 7890</p>
            <p className="text-sm">✉️ info@tacnceu.org</p>
          </div>
        </div>
  
        {/* Bottom */}
        <div className="border-t border-white/20 mt-6 pt-4 text-center text-xs opacity-80">
          © {new Date().getFullYear()} TACN CEU. All rights reserved.
        </div>
      </footer>
   
    )
}