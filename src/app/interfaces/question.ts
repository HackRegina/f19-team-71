export interface QuestionOption{
  id: number;
  text: string;
}

export interface Question{
  id: number;
  eId: number;
  title: string;
  options: QuestionOption[];
  correctAnswers: number[];
  userAnswers?: number[];
}