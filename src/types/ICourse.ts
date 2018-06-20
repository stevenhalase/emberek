import ILesson from './ILesson';

export default interface ICourse {
  name: string;
  description: string;
  id: string;
  image: string;
  lessons: ILesson[];
}