import { HttpStatusCode } from "@angular/common/http";

export interface TAuthToken {
    access_token?:string;
}

export interface TAuthError{
    status:HttpStatusCode;
    message:string;
}
