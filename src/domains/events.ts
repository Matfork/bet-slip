import { MarketType } from './market';

export interface EventType {
  id: string;
  name: string;
  markets: MarketType[];
}
