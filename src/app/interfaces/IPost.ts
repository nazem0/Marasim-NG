export interface IPost {
    id: number;
    title: string; 
    description: string;
    date: string;
    reactions: Reaction[];
    comments: Comment[];
    attachments: Attachment[];
  }
  
  interface Reaction {
    id: number;
    userId: number;
    postId: number;
    dateTime: string;
    value?: string; 
  }
  
  interface Comment {
    id: number;
    userId: number;  
    postId: number;
    text: string;
    dateTime: string;
  }
  
  interface Attachment {
    id: number;
    postId: number;
    attachmentUrl: string;
  }