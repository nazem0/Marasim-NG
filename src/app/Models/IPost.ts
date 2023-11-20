export interface IPost {
  id: number,
  vendorId: number,
  title: string,
  description: string,
  dateTime: string,
  postAttachments: IPostAttachment[],
  commentsCount: number,
  reactsCount:number,
  vendorName: string,
  vendorPicUrl: string,
  vendorUserId: string
}

export interface IReaction {
  id: number,
  userId: string,
  postId: number,
  dateTime: string,
  userName: string,
  userPicUrl: string
}

export interface IComment {
  id: number,
  userId: string,
  postId: number,
  text: string,
  dateTime: string,
  userName: string,
  userPicUrl: string
}

export interface IPostAttachment {
  id: number,
  postId: number,
  attachmentUrl: string,
}

// export interface PostList{
//   count: number;
//   data: IPost[];
//   lastPage: number;
//   pageIndex: number;
//   pageSize: number;
// }