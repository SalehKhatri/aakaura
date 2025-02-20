export interface Blog {
  id: string;
  title: string;
  content: string;
  coverImage: string;
  createdAt: string;
  updatedAt: string;
  isFeatured: boolean;
  seriesId?: string;
  series?: {
    id: string;
    title: string;
  };
}
