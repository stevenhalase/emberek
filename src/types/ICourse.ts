import ICurriculumUnit from './ICurriculumUnit';

export default interface ICourse {
  name: string;
  description: string;
  curriculum: ICurriculumUnit[];
}