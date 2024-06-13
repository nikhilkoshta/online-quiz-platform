import { Router } from 'express';
import { createQuiz, getQuizzes, getQuizById, submitQuiz } from '../controllers/quizController';

const router = Router();

router.post('/quizzes', createQuiz);
router.get('/quizzes', getQuizzes);
router.get('/quizzes/:id', getQuizById);
router.post('/quizzes/submit', submitQuiz);

export default router;
