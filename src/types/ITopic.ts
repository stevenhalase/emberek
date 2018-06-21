import ISubject from './ISubject';

export default interface ITopic {
  subjects: ISubject[];
  description: string;
  image: string;
  name: string;
}