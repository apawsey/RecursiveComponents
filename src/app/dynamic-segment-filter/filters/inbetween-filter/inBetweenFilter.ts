import { FilterBase } from "../filterBase";
export class InBetweenFilter extends FilterBase {
    public filterType: string = "IN_BETWEEN";
    public from: string;
    public to: string;
    constructor(options: {
        id: string;
        regionId: string;
        from: string;
        to: string;
    }) {
        super(options);
    }
}
