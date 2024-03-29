interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: Reply[];
}

export interface Reply {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: User;
}

interface CurrentUser {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface CommentData {
  currentUser: CurrentUser;
  comments: Comment[];
}
