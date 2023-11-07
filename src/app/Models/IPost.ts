import { IUser } from "./IUser"

export interface IPost {
  id: number,
  title: string,
  description: string,
  dateTime: string,
  postAttachments: IPostAttachment[],
  comment: IComment[],
  react: IReaction[],
  vendorName: string,
  vendorPicUrl: string,
  vendorUserID: string
}

export interface IPostPartial {
  id: number,
  vendorId: number,
  title: string,
  description: string,
  dateTime: string,
  postAttachments: IPostAttachment[],
  comment: IComment[],
  react: IReaction[]
}

export interface IReaction {
  id: number,
  userID: string,
  postID: number,
  dateTime: string,
  userName: string,
  userPicUrl: string
}

export interface IComment {
  id: number,
  userID: string,
  postID: number,
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