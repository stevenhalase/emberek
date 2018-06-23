export default interface IStep {
  active: boolean;
  complete: boolean;
  description: string;
  id: string;
  name: string;
  validator: () => boolean;
}