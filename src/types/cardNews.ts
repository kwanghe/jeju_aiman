export interface CardNews {
  id: string;
  title: string;
  description: string;
  image: string;
  points: string[];
}

export interface CardNewsSet {
  title: string;
  subtitle: string;
  cards: CardNews[];
}