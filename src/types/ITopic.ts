import ICourse from './ICourse';

export default interface ITopic {
  courses: ICourse[];
  description: string;
  image: string;
  name: string;
}