import IStage from './IStage';

export default interface ILesson {
  complete: boolean;
  name: string;
  description: string;
  id: string;
  stages: IStage[];
}