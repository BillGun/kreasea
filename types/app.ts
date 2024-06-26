export interface PostType {
  id: string;
  title: string | null;
  content: string;
  created_at: string;
  like_count: any;
  is_liked: any;
  username: string;
  name: string;
  avatar_url: string | null;
  image_url: string | null;
}
