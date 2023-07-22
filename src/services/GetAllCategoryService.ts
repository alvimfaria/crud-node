import { myDataSource } from "../app-data-source";
import { Category } from "../entities/Category";

export class GetAllCategoryService {
  async execute(){
    const repo = myDataSource.getRepository(Category)

    const categories = await repo.find()

    return categories
  }
}