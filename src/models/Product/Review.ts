export interface Review {
  id: number;
  author: string;
  rating: number; // 1-5
  comment?: string;
  date: string;
}