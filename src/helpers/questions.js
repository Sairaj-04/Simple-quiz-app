const geographyQuestions = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Paris", isCorrect: true },
        { text: "Berlin", isCorrect: false },
        { text: "London", isCorrect: false },
        { text: "Madrid", isCorrect: false },
      ],
    },
    {
      question: "Which river is the longest in the world?",
      answers: [
        { text: "Amazon", isCorrect: false },
        { text: "Mississippi", isCorrect: false },
        { text: "Nile", isCorrect: true },
        { text: "Yangtze", isCorrect: false },
      ],
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      answers: [
        { text: "China", isCorrect: false },
        { text: "Japan", isCorrect: true },
        { text: "South Korea", isCorrect: false },
        { text: "Thailand", isCorrect: false },
      ],
    },
    {
      question: "Which desert is the largest in the world?",
      answers: [
        { text: "Gobi", isCorrect: false },
        { text: "Sahara", isCorrect: true },
        { text: "Atacama", isCorrect: false },
        { text: "Kalahari", isCorrect: false },
      ],
    },
    {
      question: "What is the highest mountain in the world?",
      answers: [
        { text: "Mount Everest", isCorrect: true },
        { text: "K2", isCorrect: false },
        { text: "Mount McKinley", isCorrect: false },
        { text: "Mount Kilimanjaro", isCorrect: false },
      ],
    },
  ];

  const historyQuestions = [
    {
      question: "Who was the first Prime Minister of India?",
      answers: [
        { text: "Mahatma Gandhi", isCorrect: false },
        { text: "Sardar Vallabhbhai Patel", isCorrect: false },
        { text: "Jawaharlal Nehru", isCorrect: true },
        { text: "Subhas Chandra Bose", isCorrect: false },
      ],
    },
    {
      question: "In which year did India gain independence from British colonial rule?",
      answers: [
        { text: "1950", isCorrect: false },
        { text: "1930", isCorrect: false },
        { text: "1962", isCorrect: false },
        { text: "1947", isCorrect: true },
      ],
    },
    {
      question: "Who is known as the 'Father of the Indian Constitution'?",
      answers: [
        { text: "Dr. B.R. Ambedkar", isCorrect: true },
        { text: "Jawaharlal Nehru", isCorrect: false },
        { text: "Mahatma Gandhi", isCorrect: false },
        { text: "Sardar Patel", isCorrect: false },
      ],
    },
    {
      question: "Which Mughal emperor is known for building the Taj Mahal?",
      answers: [
        { text: "Akbar", isCorrect: false },
        { text: "Aurangzeb", isCorrect: false },
        { text: "Babur", isCorrect: false },
        { text: "Shah Jahan", isCorrect: true },
      ],
    },
    {
      question: "What was the name of the non-violent movement led by Mahatma Gandhi against British salt taxes in 1930?",
      answers: [
        { text: "Quit India Movement", isCorrect: false },
        { text: "Salt Satyagraha (Dandi March)", isCorrect: true },
        { text: "Non-Cooperation Movement", isCorrect: false },
        { text: "Jallianwala Bagh Massacre", isCorrect: false },
      ],
    },
  ];

  const scienceQuestions = [
    {
      question: "What is the chemical symbol for the element oxygen?",
      answers: [
        { text: "Ox", isCorrect: false },
        { text: "Oz", isCorrect: false },
        { text: "Oxn", isCorrect: false },
        { text: "O", isCorrect: true },
      ],
    },
    {
      question: "Which planet in our solar system is known as the 'Red Planet'?",
      answers: [
        { text: "Venus", isCorrect: false },
        { text: "Mars", isCorrect: true },
        { text: "Jupiter", isCorrect: false },
        { text: "Saturn", isCorrect: false },
      ],
    },
    {
      question: "What is the process by which plants make their own food using sunlight?",
      answers: [
        { text: "Photosynthesis", isCorrect: true },
        { text: "Respiration", isCorrect: false },
        { text: "Digestion", isCorrect: false },
        { text: "Fermentation", isCorrect: false },
      ],
    },
    {
      question: "What is the smallest unit of matter that retains the properties of an element?",
      answers: [
        { text: "Molecule", isCorrect: false },
        { text: "Cell", isCorrect: false },
        { text: "Particle", isCorrect: false },
        { text: "Atom", isCorrect: true },
      ],
    },
    {
      question: "Which scientist is famous for his theory of general relativity?",
      answers: [
        { text: "Albert Einstein", isCorrect: true },
        { text: "Isaac Newton", isCorrect: false },
        { text: "Stephen Hawking", isCorrect: false },
        { text: "Galileo Galilei", isCorrect: false },
      ],
    },
  ];

  const moviesAndTVQuestions = [
    {
      question: "Who is often referred to as the 'Bollywood King' and starred in movies like 'Dilwale Dulhania Le Jayenge' and 'Dil To Pagal Hai'?",
      answers: [
        { text: "Shah Rukh Khan", isCorrect: true },
        { text: "Salman Khan", isCorrect: false },
        { text: "Aamir Khan", isCorrect: false },
        { text: "Hrithik Roshan", isCorrect: false },
      ],
    },
    {
      question: "Which Indian filmmaker directed the acclaimed movie 'Lagaan,' which was nominated for an Academy Award for Best Foreign Language Film?",
      answers: [
        { text: "Karan Johar", isCorrect: false },
        { text: "Sanjay Leela Bhansali", isCorrect: false },
        { text: "Anurag Kashyap", isCorrect: false },
        { text: "Ashutosh Gowariker", isCorrect: true },
      ],
    },
    {
      question: "Who is known as the 'Shehenshah of Bollywood' and has acted in iconic films like 'Sholay' and 'Deewar'?",
      answers: [
        { text: "Amitabh Bachchan", isCorrect: true },
        { text: "Dharmendra", isCorrect: false },
        { text: "Rajesh Khanna", isCorrect: false },
        { text: "Rishi Kapoor", isCorrect: false },
      ],
    },
    {
      question: "In which city is the Indian film industry, commonly referred to as 'Bollywood,' located?",
      answers: [
        { text: "Kolkata", isCorrect: false },
        { text: "Mumbai (formerly Bombay)", isCorrect: true },
        { text: "Chennai", isCorrect: false },
        { text: "Delhi", isCorrect: false },
      ],
    },
    {
      question: "Who is the first Indian actor to appear in a Hollywood film 'Slumdog Millionaire' and won an Academy Award for Best Supporting Actor?",
      answers: [
        { text: "Irrfan Khan", isCorrect: false },
        { text: "Shah Rukh Khan", isCorrect: false },
        { text: "Anil Kapoor", isCorrect: true },
        { text: "Aamir Khan", isCorrect: false },
      ],
    },
  ];
  
  const sportsQuestions = [
    {
      question: "Who is the former Indian cricketer known as the 'Little Master' and holds numerous batting records in international cricket?",
      answers: [
        { text: "Sachin Tendulkar", isCorrect: true },
        { text: "Virat Kohli", isCorrect: false },
        { text: "Rahul Dravid", isCorrect: false },
        { text: "Sourav Ganguly", isCorrect: false },
      ],
    },
    {
      question: "In which sport did P.V. Sindhu win a silver medal at the 2016 Summer Olympics, becoming the first Indian woman to achieve this feat?",
      answers: [
        { text: "Table Tennis", isCorrect: false },
        { text: "Tennis", isCorrect: false },
        { text: "Badminton", isCorrect: true },
        { text: "Archery", isCorrect: false },
      ],
    },
    {
      question: "Who is the Indian boxer known for winning an Olympic bronze medal at the 2008 Beijing Olympics and is nicknamed 'The Vijender'?",
      answers: [
        { text: "Mary Kom", isCorrect: false },
        { text: "Sushil Kumar", isCorrect: false },
        { text: "Abhinav Bindra", isCorrect: false },
        { text: "Vijender Singh", isCorrect: true },
      ],
    },
    {
      question: "In which year did India host the Commonwealth Games for the first time?",
      answers: [
        { text: "2006", isCorrect: false },
        { text: "2002", isCorrect: false },
        { text: "2010", isCorrect: true },
        { text: "2014", isCorrect: false },
      ],
    },
    {
      question: "Which Indian cricketer is known for his record-breaking performances as a wicket-keeper-batsman and is often referred to as 'Captain Cool'?",
      answers: [
        { text: "Mahendra Singh Dhoni (MS Dhoni)", isCorrect: true },
        { text: "Rohit Sharma", isCorrect: false },
        { text: "Ajinkya Rahane", isCorrect: false },
        { text: "Shikhar Dhawan", isCorrect: false },
      ],
    },
  ];


  export const categories = [
    {
        category: 'Geography',
        questions: geographyQuestions,
    },
    {
        category: 'History',
        questions: historyQuestions,
    },
    {
        category: 'Science',
        questions: scienceQuestions,
    },
    {
        category: 'Movies',
        questions: moviesAndTVQuestions,
    },
    {
        category: 'Sports',
        questions: sportsQuestions,
    },
  ];
  
  
  
  
  
  
  
  
  
  
  
  
  
  