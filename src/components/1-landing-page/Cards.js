import Card from "./Card.js";

const cards = [
  {
    id: 1,
    title: "Basic Programming",
    description: "Contains basic questions about programming",
    color: "#94FFD8",
    quizDescription: `Start your coding journey with our Basic Coding Challenge! Perfect
      for beginners, this quiz will test your understanding of fundamental
      programming concepts. With straightforward questions on syntax,
      basic problem-solving, and simple coding exercises, this quiz is
      designed to build your confidence and solidify your foundational
      knowledge. Whether you're new to coding or refreshing your skills,
      this quiz is an excellent way to begin.`,
    quiz: [
      {
        quizID: "E1",
        question: "What is a variable in programming?",
        option: [
          "A constant",
          "A command",
          "A named storage location",
          "A function",
        ],
        correctAnswer: 2,
        answered: false,
      },
      {
        quizID: "E2",
        question:
          "Which programming language is most commonly used for web development?",
        option: ["Phyton", "Javascript", "C++", "Java"],
        correctAnswer: 1,
        answered: false,
      },
      {
        quizID: "E3",
        question: `What does the "print()" command do in Python?`,
        option: [
          "Calculate a value",
          "Print a document",
          "Display output to the screen",
          "Create a new variable",
        ],
        correctAnswer: 2,
        answered: false,
      },
      {
        quizID: "E4",
        question:
          "Which control structure is used to perform iteration in programming?",
        option: ["If statement", "Switch Statement", "Loop", "Function"],
        correctAnswer: 2,
        answered: false,
      },
      {
        quizID: "E5",
        question: `What is the function of the "if" statement in programming?`,
        option: [
          "Execute code repeatedly",
          "Check a condition and execute code based on that condition",
          "Declare a variable",
          "Store data",
        ],
        correctAnswer: 1,
        answered: false,
      },
      {
        quizID: "E6",
        question:
          "Which data type is used to store text in many programming languages?",
        option: ["Integer", "Boolean", "String", "Float"],
        correctAnswer: 2,
        answered: false,
      },
      {
        quizID: "E7",
        question: "What is the result of 7 % 3 in many programming languages?",
        option: ["1", "2", "3", "4"],
        correctAnswer: 0,
        answered: false,
      },
      {
        quizID: "E8",
        question: "What does 'boolean' mean in programming?",
        option: [
          "A data type that stores decimal numbers",
          "A data type that stores text",
          "A data type that can only be true or false",
          "A data type that stores objects",
        ],
        correctAnswer: 2,
        answered: false,
      },
      {
        quizID: "E9",
        question: "In the context of OOP, what is an object?",
        option: [
          "A function",
          "A data structure with attributes and methods",
          "A primitive data type",
          "A command to print values",
        ],
        correctAnswer: 1,
        answered: false,
      },
      {
        quizID: "E10",
        question: `What is the function of the " == " operator in programming?`,
        option: [
          "Assign a value to a variable",
          "Delete a variable",
          "Compare two values for equality",
          "Add two values",
        ],
        correctAnswer: 2,
        answered: false,
      },
    ],
  },
  {
    id: 2,
    title: "Intermediate Programming",
    description: "Contains intermediate questions about programming",
    color: "#A3D8FF",
    quizDescription: `Are you ready to take your coding skills to the next level? Our Intermediate Coding Challenge is designed for those with a solid grasp of fundamental concepts. This quiz will test your ability to apply your knowledge in more complex scenarios. Expect a mix of multiple-choice, true/false, and coding exercises that require a deeper understanding of algorithms, data structures, and problem-solving techniques. Perfect for those looking to bridge the gap between beginner and advanced coding skills.`,
    quiz: [
      {
        quizID: "M1",
        question: `Which of the following best describes polymorphism in object-oriented programming?`,
        option: [
          "The ability of a function to take on multiple forms",
          "The process of creating new objects",
          "Encapsulation of data",
          "Inheritance of properties",
        ],
        correctAnswer: 0,
        answered: false,
      },
      {
        quizID: "M2",
        question: `In the context of databases, what is normalization?`,
        option: [
          "The process of removing all records from a table",
          "The process of reducing redundancy and dependency by organizing fields and table of a database",
          "The process of creating new tables",
          "The process of backing up the database",
        ],
        correctAnswer: 1,
        answered: false,
      },
      {
        quizID: "M3",
        question: `Which of the following is NOT a common sorting algorithm?`,
        option: ["Bubble Sort", "Quick Sort", "Random Sort", "Merge Sort"],
        correctAnswer: 2,
        answered: false,
      },
      {
        quizID: "M4",
        question: `What does the acronym API stand for?`,
        option: [
          "Application Programming Interface",
          "Applied Program Interface",
          "Advanced Programming Integration",
          "Application Program Internet",
        ],
        correctAnswer: 0,
        answered: false,
      },
      {
        quizID: "M5",
        question: `Which principle of object-oriented design is being violated if a class has more than one reason to change?`,
        option: [
          "Open/Closed Principle",
          "Liskov Substitution Principle",
          "Interface Segregation Principle",
          "Single Responsibility Principle",
        ],
        correctAnswer: 3,
        answered: false,
      },
      {
        quizID: "M6",
        question: `In a RESTful API, which HTTP method is typically used to update an existing resource?`,
        option: ["GET", "POST", "PUT", "DELETE"],
        correctAnswer: 2,
        answered: false,
      },
      {
        quizID: "M7",
        question: `What is the main purpose of a constructor in a class?`,
        option: [
          "To clean up after an object is destroyed",
          "To initialize objects of a class",
          "To define methods of the class",
          "To provide access to private members",
        ],
        correctAnswer: 1,
        answered: false,
      },
      {
        quizID: "M8",
        question: `Which of the following is a key characteristic of the Agile software development methodology?`,
        option: [
          "Comprehensive documentation",
          "Rigid adherence to initial requirements",
          "Incremental and iterative development",
          "Long development cycles",
        ],
        correctAnswer: 2,
        answered: false,
      },
      {
        quizID: "M9",
        question: `What does the term "refactoring" mean in software development?`,
        option: [
          "Adding new features to the codebase",
          "Optimizing the performance of an application",
          "Restructuring existing code without changing its external behavior",
          "Fixing bugs in the code",
        ],
        correctAnswer: 2,
        answered: false,
      },
      {
        quizID: "M10",
        question: `In the context of version control systems, what does "branching" refer to?`,
        option: [
          "Merging two separate codebases",
          "Creating a new line of development from an existing codebase",
          "Deleting outdated code",
          "Committing changes to the repository",
        ],
        correctAnswer: 1,
        answered: false,
      },
    ],
  },
  {
    id: 3,
    title: "Advanced Programming",
    description: "Contains advanced questions about programming",
    color: "#FF76CE",
    quizDescription: `Step up to the ultimate test with our Advanced Coding Challenge! This quiz is crafted for experienced coders and those with an in-depth understanding of programming. Prepare for complex questions that require critical thinking, detailed analysis, and advanced coding skills. Featuring a variety of question types including multiple-choice, coding exercises, and algorithmic challenges, this quiz will push your expertise to the limit and provide a true measure of your advanced proficiency.`,
    quiz: [
      {
        quizID: "A1",
        question: `Which of the following algorithms is used to find the shortest path in a weighted graph?`,
        option: [
          "Kruskal's Algorithm",
          "Prim's Algorithm",
          "Dijkstra's Algorithm",
          "Floyd-Warshall Algorithm",
        ],
        correctAnswer: 2,
        answered: false,
      },
      {
        quizID: "A2",
        question: `In computer networks, what does the term "CIDR" stand for?`,
        option: [
          "Classless Inter-Domain Routing",
          "Common Internet Domain Routing",
          "Comprehensive Internet Data Routing",
          "Classful Internet Domain Routing",
        ],
        correctAnswer: 0,
        answered: false,
      },
      {
        quizID: "A3",
        question: `What is the primary purpose of the ACID properties in a database?`,
        option: [
          "To ensure high availability",
          "To guarantee data integrity and consistency",
          "To enhance database performance",
          "To support multi-user environments",
        ],
        correctAnswer: 1,
        answered: false,
      },
      {
        quizID: "A4",
        question: `Which of the following is a characteristic of a NoSQL database?`,
        option: [
          "Fixed schema",
          "Supports ACID transactions",
          "Horizontal scalability",
          "Primarily relational data model",
        ],
        correctAnswer: 2,
        answered: false,
      },
      {
        quizID: "A5",
        question: `What does "Big O" notation specifically describe?`,
        option: [
          "The best-case scenario of an algorithm",
          "The average-case scenario of an algorithm",
          "The worst-case scenario of an algorithm",
          "The space complexity of an algorithm",
        ],
        correctAnswer: 2,
        answered: false,
      },
      {
        quizID: "A6",
        question: `In machine learning, what is the difference between supervised and unsupervised learning?`,
        option: [
          "Supervised learning uses labeled data, while unsupervised learning uses unlabeled data",
          "Supervised learning is used for classification, and unsupervised learning is used for regression",
          "Supervised learning requires large datasets, while unsupervised learning does not",
          "Supervised learning is used for clustering, and unsupervised learning is used for prediction",
        ],
        correctAnswer: 0,
        answered: false,
      },
      {
        quizID: "A7",
        question: `Which of the following is a property of a B-tree in data structures?`,
        option: [
          "All leaf nodes are at different levels",
          "It is a self-balancing binary search tree",
          "All leaf nodes are at the same level",
          "It cannot store duplicate values",
        ],
        correctAnswer: 2,
        answered: false,
      },
      {
        quizID: "A8",
        question: `What is the primary function of a microservice architecture in software development?`,
        option: [
          "To improve monolithic application performance",
          "To divide a large application into small, independent services",
          "To enhance security by isolating services",
          "To reduce the need for database normalization",
        ],
        correctAnswer: 1,
        answered: false,
      },
      {
        quizID: "A9",
        question: `In the context of distributed systems, what does the term "consensus algorithm" refer to?`,
        option: [
          "An algorithm to manage resource allocation",
          "An algorithm to ensure all nodes agree on a common value",
          "An algorithm to detect and recover from failures",
          "An algorithm to balance load across nodes",
        ],
        correctAnswer: 1,
        answered: false,
      },
      {
        quizID: "A10",
        question: `In the context of DevOps, what is the purpose of Continuous Integration (CI)?`,
        option: [
          "To deploy code changes to production continuously",
          "To integrate and test code changes frequently",
          "To manage and monitor production systems",
          "To write automated tests for code",
        ],
        correctAnswer: 1,
        answered: false,
      },
    ],
  },
];

function Cards() {
  return (
    <div className="cards">
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
}

export default Cards;
