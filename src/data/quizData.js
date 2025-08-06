const quizData = {
    multipleChoice: [
      // EASY
      {
        question: "Who built the ark that saved his family and animals from the flood?",
        options: ["Moses", "Noah", "Abraham", "David"],
        answer: "Noah",
        difficulty: "easy"
      },
      {
        question: "Jesus was born in which town?",
        options: ["Jerusalem", "Nazareth", "Bethlehem", "Capernaum"],
        answer: "Bethlehem",
        difficulty: "easy"
      },
  
      // MEDIUM
      {
        question: "Who interpreted Pharaoh’s dream about seven years of plenty and seven years of famine?",
        options: ["Daniel", "Moses", "Joseph", "Aaron"],
        answer: "Joseph",
        difficulty: "medium"
      },
      {
        question: "What was Paul’s occupation before becoming an apostle?",
        options: ["Fisherman", "Tentmaker", "Tax collector", "Shepherd"],
        answer: "Tentmaker",
        difficulty: "medium"
      },
  
      // HARD
      {
        question: "In Revelation, which church is described as 'lukewarm'?",
        options: ["Ephesus", "Laodicea", "Philadelphia", "Smyrna"],
        answer: "Laodicea",
        difficulty: "hard"
      },
      {
        question: "Which prophet had a vision of a valley full of dry bones?",
        options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
        answer: "Ezekiel",
        difficulty: "hard"
      }
    ],
    trueFalse: [
      {
        question: "The Ten Commandments were given to Moses on Mount Sinai.",
        answer: true,
        difficulty: "easy"
      },
      {
        question: "Jonah was swallowed by a whale and stayed there for 7 days.",
        answer: false,
        difficulty: "medium"
      }
    ],
    fillInTheBlank: [
      {
        question: "Jesus turned water into _____ at the wedding in Cana.",
        answer: "wine",
        difficulty: "easy"
      },
      {
        question: "The walls of Jericho fell after the Israelites marched around the city for _____ days.",
        answer: "seven",
        difficulty: "medium"
      }
    ]
  };
  
  export default quizData;
  