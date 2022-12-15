import { Observable } from "rxjs";
import { AnyMenu } from "./any-menu";


export interface AnyMenuProvider {
    menu$: Observable<AnyMenu>;
}
