export interface EventType {
  id: string;
  name: string;
  markets: MarketType[];
}

interface MarketType {
  id: string;
  name: string;
  markets: SelectionType[];
}

interface SelectionType {
  id: string;
  name: string;
  price: number;
}
