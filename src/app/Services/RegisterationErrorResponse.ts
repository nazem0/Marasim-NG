export interface RegisterationErrorResponse {
    error:{
        code:string,
        description:string
    }[]
    message:string
    status : number
}
