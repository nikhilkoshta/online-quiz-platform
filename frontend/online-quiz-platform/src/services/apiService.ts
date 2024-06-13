const API_URL = import.meta.env.VITE_API_URL;

export const fetchQuizzes = async () => {
  const response = await fetch(`${API_URL}/quizzes`);
  return response.json();
};

export const fetchQuizById = async (id: string) => {
  const response = await fetch(`${API_URL}/quizzes/${id}`);
  return response.json();
};

export const submitQuiz = async (quizId: string, answers: string[]) => {
  const response = await fetch(`${API_URL}/quizzes/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quizId, answers }),
  });
  return response.json();
};
