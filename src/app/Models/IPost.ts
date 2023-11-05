export interface IPost {
    id: number,
    title: string, 
    description: string,
    dateTime: string,
    postAttachments: IAttachment[],
    comment: IComment[],
    react: IReaction[],
    vendorName: string,
    vendorPicUrl: string,
    vendorUserID: string
  }
  
  export interface IReaction {
    id: number,
    userId: number,
    postId: number,
    dateTime: string,
    value?: string, 
  }
  
  export interface IComment {
    id: number,
    userId: string,  
    postId: number,
    text: string,
    dateTime: string,
  }
  
  export interface IAttachment {
    id: number,
    postId: number,
    attachmentUrl: string,
  }