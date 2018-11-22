import { FormGroup } from "@angular/forms";
import { FilterBase } from "./filterBase";


export interface FilterItem<T extends FilterBase> {
    filter: T;
    group: FormGroup;
}