import { IUser } from "./IUser"

export interface IPost {
  id: number,
  vendorId: number,
  title: string,
  description: string,
  dateTime: string,
  postAttachments: IPostAttachment[],
  comment: IComment[],
  react: IReaction[],
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