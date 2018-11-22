import { FilterBase } from "../filterBase";
export class UntilFilter extends FilterBase {
    public filterType: string = "UNTIL";
    public until: string;
    constructor(options: {
        id: string;
        regionId: string;
        until: string;
    }) {
        super(options);
    }
}
