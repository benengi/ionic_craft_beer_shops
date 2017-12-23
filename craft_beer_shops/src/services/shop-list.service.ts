import data from '../data/shop-list.data';
import { City } from "../models/city.model";

export class ShopListService {
    private cities: City[];
    constructor() {
        this.cities = data;
    }
    get() {
        return this.cities.slice();
    }
}