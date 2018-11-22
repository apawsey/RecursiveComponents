import { FilterBase } from "./filters/filterBase";

export class Segment {
    public id: string;
    public name: string;
    public segmentType: string;
    public filters: FilterBase[];
    public segments: Segment[];
    public hidden: boolean;
}

