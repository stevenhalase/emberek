import ICourse from "./ICourse";

export default interface ISubject {
  name: string;
  description: string;
  image: string;
  id: string;
  courses: ICourse[];
}