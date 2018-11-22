export abstract class FilterBase {
    public id: string;
    public abstract readonly filterType: string;
    public regionId: string;
    constructor(options: {
        id: string;
        regionId: string;
    }) {
        this.id = options.id;
        this.regionId = options.regionId;
    }
}
