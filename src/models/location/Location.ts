import LocationInfo from "../shared/LocationInfo";

interface Location extends LocationInfo {
    id: number;
    type: string;
    dimension: string;
    residents: string[];
    created: Date;
}

export default Location;
