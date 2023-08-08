import { Review } from './review.model';

export interface Book {
  id: number;
  name: string;
  image: string;
  authorName: string;
  authorSurname: string;
  year: Date;
  ISBN: number;
  category: string;
  description: string;
  deletedAt: Date;
  reviews: Review[];
}
