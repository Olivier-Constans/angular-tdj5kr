import { NumberId } from './numberId';

export interface Room extends NumberId {
  name: string;
  size: number;
}
