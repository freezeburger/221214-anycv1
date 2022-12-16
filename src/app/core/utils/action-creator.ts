import { FCredentials } from "../interfaces/f-credentials";
import { ActionType, TAction } from "../interfaces/t-action";


export interface ActionResult<T>  extends TAction {
    payload: T
}

export const loginRequest = ( payload:FCredentials ): ActionResult<FCredentials> => {
    return { type:ActionType.LOGIN_REQUEST, payload }
} 

export const registerRequest = ( payload:FCredentials ): ActionResult<FCredentials> => {
    return { type:ActionType.REGISTER_REQUEST, payload }
} 