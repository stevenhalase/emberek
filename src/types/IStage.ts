import IStep from "./IStep";

export default interface IStage {
  active: boolean;
  complete: boolean;
  description: string;
  id: string;
  name: string;
  steps: IStep[];
}