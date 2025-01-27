export interface IBook {
  _id?: string;
  title?: string;
  author?: string;
  price?: number;
  category?:
    | "Fiction"
    | "Science"
    | "Fiction"
    | "Poetry"
    | "Religious"
    | "SelfDevelopment";
  description?: string;
  quantity?: number;
  inStock?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
