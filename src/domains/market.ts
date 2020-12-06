import { SelectionType } from './selection';

export interface MarketType {
  id: string;
  name: string;
  selections: SelectionType[];
}
