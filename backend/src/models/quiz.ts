import { Schema, model, Document } from 'mongoose';

interface IQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface IQuiz extends Document {
  title: string;
  questions: IQuestion[];
}

const QuestionSchema = new Schema<IQuestion>({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: String, required: true },
});

const QuizSchema = new Schema<IQuiz>({
  title: { type: String, required: true },
  questions: { type: [QuestionSchema], required: true },
});

const Quiz = model<IQuiz>('Quiz', QuizSchema);

export default Quiz;
