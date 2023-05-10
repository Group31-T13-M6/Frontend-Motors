interface IComment {
  id: string;
  content: string;
  announcement: {
    id: string;
    description: string;
  };
  announcementId: string;
  user: {
    id: string;
    name: string;
    description: string;
  };
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IUpdateAndRegisterComment {
  content: string;
}

export type { IComment, IUpdateAndRegisterComment };
