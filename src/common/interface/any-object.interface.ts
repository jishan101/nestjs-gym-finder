export interface IAnyObject {
  [key: string]: any;
}

export interface IObject<T> {
  [key: string]: T;
}
