import React, { useState } from "react";

const CreateQuiz = () => {
  const [quizTitle, setQuizTitle] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], correct: "" },
  ]);

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (qIndex, optIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options[optIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectAnswerChange = (qIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].correct = value;
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], correct: "" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quiz Created:", { quizTitle, questions });
  };

  return (
    <div className="min-h-screen bg-indigo-900 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-6">
          Create a New Quiz
        </h2>
        
        {/* Quiz Title */}
        <label className="block text-lg font-medium text-gray-700 mb-2">Quiz Title</label>
        <input
          type="text"
          placeholder="Enter quiz title..."
          value={quizTitle}
          onChange={(e) => setQuizTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-600 focus:outline-none mb-4"
        />

        {/* Questions */}
        {questions.map((q, qIndex) => (
          <div key={qIndex} className="mb-6 p-4 border-2 border-cyan-600 rounded-lg">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Question {qIndex + 1}
            </label>
            <input
              type="text"
              placeholder="Enter question..."
              value={q.question}
              onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-600 focus:outline-none mb-4"
            />

            {/* Options */}
            <label className="block text-md font-medium text-gray-700 mb-2">Options</label>
            {q.options.map((option, optIndex) => (
              <input
                key={optIndex}
                type="text"
                placeholder={`Option ${optIndex + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(qIndex, optIndex, e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-600 focus:outline-none mb-2"
              />
            ))}

            {/* Correct Answer */}
            <label className="block text-md font-medium text-gray-700 mb-2">Correct Answer</label>
            <input
              type="text"
              placeholder="Enter correct answer..."
              value={q.correct}
              onChange={(e) => handleCorrectAnswerChange(qIndex, e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-600 focus:outline-none mb-4"
            />
          </div>
        ))}

        {/* Add Question Button */}
        <button
          onClick={addQuestion}
          className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition duration-300 mb-4"
        >
          + Add Question
        </button>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-900 text-white py-2 rounded-lg hover:bg-indigo-800 transition duration-300"
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
};

export default CreateQuiz;
