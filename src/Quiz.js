import React, { useState } from "react";

const Quiz = () => {
    //properties
    const [showFinalResults, setFinalResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState([
        {
            text: "What is not included in the AAA protocol?",
            options: [
              { id: 0, text: "Authentication", isCorrect: false },
              { id: 1, text: "Authorization", isCorrect: false },
              { id: 2, text: "Accounting", isCorrect: false },
              { id: 3, text: "Availability", isCorrect: true },
            ],
          },
        {
            text: "What is the Pegasus cyber attack?",
            options: [
              { id: 0, text: "Phishing attack", isCorrect: false },
              { id: 1, text: "Spyware attack", isCorrect: true },
              { id: 2, text: "Ransomware attack", isCorrect: false },
              { id: 3, text: "Distributed Denial of Service (DDoS) attack", isCorrect: false },
            ],
        },
        {
            text: "Which one is a NoSQL database?",
            options: [
              { id: 0, text: "MongoDB", isCorrect: true },
              { id: 1, text: "Postgres", isCorrect: false },
              { id: 2, text: "Oracle", isCorrect: false },
              { id: 3, text: "Microsoft SQL Server", isCorrect: false },
            ],
          },
        {
            text: "Which one of the following can be considered as semi-structured data?",
            options: [
              { id: 0, text: "File", isCorrect: false },
              { id: 1, text: "Graph", isCorrect: true },
              { id: 2, text: "Image", isCorrect: false },
              { id: 3, text: "Video", isCorrect: false },
            ],
        },
        {
            text: "What is not included in the 3-2-1 rule in data backup?",
            options: [
              { id: 0, text: "Keep 3 copies of data", isCorrect: false },
              { id: 1, text: "Store backup copies on 2 different types of storage", isCorrect: false },
              { id: 2, text: "Ensure 1 backup copy is stored at an off-site location", isCorrect: false },
              { id: 3, text: "Maintain 1 copy of data", isCorrect: true },
            ],
          },
        {
            text: "Where can unstructured data be stored?",
            options: [
              { id: 0, text: "Data lake", isCorrect: true },
              { id: 1, text: "Data warehouse", isCorrect: false },
              { id: 2, text: "Database", isCorrect: false },
              { id: 3, text: "Data mart", isCorrect: false },
            ],
        },
        {
            text: "SIEM is a type of software that serves as a tool for?",
            options: [
              { id: 0, text: "Access control", isCorrect: false },
              { id: 1, text: "Security monitoring", isCorrect: true },
              { id: 2, text: "Data loss prevention", isCorrect: false },
              { id: 3, text: "OS hardening", isCorrect: false },
            ],
        },
        {
            text: "Data-first modernization refers to the shift from?",
            options: [
              { id: 0, text: "Data-first to infrastructure-first", isCorrect: false },
              { id: 1, text: "Application-first to data-first", isCorrect: false },
              { id: 2, text: "Technology-first to data-first", isCorrect: false },
              { id: 3, text: "Infrastructure-first to data-first", isCorrect: true },
            ],
        },
        {
            text: "What is not a solution to data gravity?",
            options: [
              { id: 0, text: "Multi-cloud strategy", isCorrect: false },
              { id: 1, text: "Edge computing", isCorrect: false },
              { id: 2, text: "Data encryption", isCorrect: true },
              { id: 3, text: "Replication and Backup", isCorrect: false },
            ],
        },
        {
            text: "What is the difference between ETL and ELT pipelines?",
            options: [
              { id: 0, text: "Different order of processing steps", isCorrect: true },
              { id: 1, text: "Storing data in different places", isCorrect: false },
              { id: 2, text: "Using different programming languages", isCorrect: false },
              { id: 3, text: "Changing the data schema", isCorrect: false },
            ],
        },
        {
            text: "What does HPE offer for Data-first modernization?",
            options: [
              { id: 0, text: "Edge to core to cloud platform", isCorrect: false },
              { id: 1, text: "Cloud-like experience", isCorrect: false },
              { id: 2, text: "Pay-per-use model", isCorrect: false },
              { id: 3, text: "All of the above", isCorrect: true },
            ],
        },
        {
            text: "What is not a problem directly caused by data silos?",
            options: [
              { id: 0, text: "Reduced collaboration", isCorrect: false },
              { id: 1, text: "Hindered data analysis and decision-making", isCorrect: true },
              { id: 2, text: "Higher risk", isCorrect: false },
              { id: 3, text: "Wasted time and resources", isCorrect: false },
            ],
        },
        {
            text: "Who is responsible for establishing data governance policies or standards?",
            options: [
              { id: 0, text: "Governance council", isCorrect: true },
              { id: 1, text: "Data stewards", isCorrect: false },
              { id: 2, text: "Data users", isCorrect: false },
              { id: 3, text: "Data custodians", isCorrect: false },
            ],
        },
        {
            text: "Who is responsible for developing and implementing data governance?",
            options: [
              { id: 0, text: "Governance council", isCorrect: false },
              { id: 1, text: "Data stewards", isCorrect: true },
              { id: 2, text: "Data users", isCorrect: false },
              { id: 3, text: "Data custodians", isCorrect: false },
            ],
        },
        {
            text: "Which option best describes data validity in terms of data quality?",
            options: [
              { id: 0, text: "Conforms to the specific rules/logic of its respective domain", isCorrect: true },
              { id: 1, text: "Correctly represents the real world", isCorrect: false },
              { id: 2, text: "Synchronized or matched across all systems", isCorrect: false },
              { id: 3, text: "Available to access when needed", isCorrect: false },
            ],
        },
        {
            text: "Which data sub-domain involves 'authentication, access control, and encryption'?",
            options: [
              { id: 0, text: "Data architecture", isCorrect: false },
              { id: 1, text: "Data consumption and distribution", isCorrect: false },
              { id: 2, text: "Data lifecycle management", isCorrect: false },
              { id: 3, text: "Data security", isCorrect: true },
            ],
        },
        {
            text: "Which data sub-domain involves 'developing a data-driven culture'?",
            options: [
              { id: 0, text: "Data knowledge", isCorrect: false },
              { id: 1, text: "Data strategy and governance", isCorrect: true },
              { id: 2, text: "Data ingestion and processing", isCorrect: false },
              { id: 3, text: "Data lifecycle management", isCorrect: false },
            ],
        },
        {
            text: "Experts from Cybersecurity Ventures estimate that a ransomware attack will take place every how many seconds in 2021?",
            options: [
              { id: 0, text: "1 second", isCorrect: false },
              { id: 1, text: "11 seconds", isCorrect: true },
              { id: 2, text: "21 seconds", isCorrect: false },
              { id: 3, text: "31 seconds", isCorrect: false },
            ],
        },
        {
            text: "Why is a data breach worse than ransomware?",
            options: [
              { id: 0, text: "Encryption of sensitive data preventing unauthorized access", isCorrect: false },
              { id: 1, text: "Ransom demands and potential financial loss", isCorrect: false },
              { id: 2, text: "Unauthorized access to sensitive information", isCorrect: true },
              { id: 3, text: "Temporary disruption of computer systems and operations", isCorrect: false },
            ],
        },
        {
            text: "What is GPT, which is an AI model, short for?",
            options: [
              { id: 0, text: "Generative Pre-trained Transformer", isCorrect: true },
              { id: 1, text: "General Pre-trained Transformer", isCorrect: false },
              { id: 2, text: "Generate Pre-trained Transformer", isCorrect: false },
              { id: 3, text: "Grouped Pre-trained Transformer", isCorrect: false },
            ],
        },
      ]);

    //Helper Functions
    const optionClicked = (isCorrect) => {
        if( isCorrect) {
            setScore(score+1);
        }

        if (currentQuestion+1 <questions.length){
            setCurrentQuestion(currentQuestion+1);
        } else {
            setFinalResults(true);
        }
        
    } 

    function shuffleArray(array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    
    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setFinalResults(false);
        setQuestions(shuffleArray(questions));
    }


    return (  
        <div className="quiz">
            {/* header */}
            <h1>Data-first modernization Quiz</h1>
            {/* current score */}
            <h2>Current Score: <span style={{ color: '#00B287' }}>{score}</span></h2>

            {showFinalResults ? 

            /* if true-final results */
            <div className="final-results">
                <h1>Final Results</h1>
                <h2>
                    {score} out of {questions.length} correct - ({(score/questions.length) *100}%)
                </h2>
                <button onClick={() => restartGame()}>Restart</button>
            </div>
            
            :
             /* if false-question card-quesion+list of possible answer */
             <div className="question-card">
                <h3>Question {currentQuestion+1} of {questions.length}</h3>
                <h2 className="question-text">{questions[currentQuestion].text}</h2>
                <ul>
                    {questions[currentQuestion].options.map((option) => {
                        return (
                            <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                        );
                    })}
                </ul>
            </div>
            
            }
           
        </div>
    );
}
 
export default Quiz;