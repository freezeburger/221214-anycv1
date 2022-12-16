import { NonNullableFormBuilder } from "@angular/forms";
import { FArcticle } from "./f-arcticle";
import { FMessage } from "./f-message";

export interface FState {
    connected:boolean;
    online:boolean;
    messages:Array<FMessage>;
    news:Array<FArcticle>;
    newsSearch:string | null;
}
