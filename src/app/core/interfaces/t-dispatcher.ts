import { Observable } from "rxjs";
import { TAction } from "./t-action";
import { TError } from "./t-error";


export interface TDispatcher<T> {

    state$:Observable<T>;
    action$:Observable<TAction[]>;

    dispatch(action:TAction): TError | null ;

}
