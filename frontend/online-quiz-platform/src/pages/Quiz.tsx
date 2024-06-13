import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchQuizById, submitQuiz } from '../services/apiService';

/* eslint-disable @typescript-eslint/no-explicit-any */

const Quiz: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quiz, setQuiz] = useState<any>(null);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const getQuiz = async () => {
      const quizData = await fetchQuizById(id!);
      setQuiz(quizData);
    };

    getQuiz();
  }, [id]);

  const handleSubmit = async () => {
    const result = await submitQuiz(id!, Object.values(answers));
    setScore(result.score);
    setSubmitted(true);
  };

  if (!quiz) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{quiz.title}</h2>
      {quiz.questions.map((q: any, index: number) => (
        <div key={q.id} className="mb-4">
          <h3 className="text-xl">{q.question}</h3>
          {q.options.map((option: string) => (
            <label key={option} className="block">
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={answers[index] === option}
                onChange={() => setAnswers({ ...answers, [index]: option })}
                disabled={submitted}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit} className="bg-green-600 text-white py-2 px-4 rounded">
        Submit
      </button>
      {submitted && (
        <div className="mt-4">
          <h3 className="text-xl font-bold">Results</h3>
          <p>Your score: {score}/{quiz.questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
