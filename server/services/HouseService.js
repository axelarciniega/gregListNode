import { dbContext } from "../db/DbContext.js"

class HouseService{
    async createHouse(houseId) {
        const house = await dbContext.House.create(houseId)
        return house
    }
}



export const houseService = new HouseService()