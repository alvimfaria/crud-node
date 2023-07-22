import { myDataSource } from "../app-data-source";
import { Category } from "../entities/Category";

export class DeleteCategoryService {
  async execute(id: string) {
    const repo = myDataSource.getRepository(Category)

    const category = await repo.findOneBy({id})

    if (!category) {
      return new Error("Category does not exists!")
    }

    await repo.delete(id)
  }
}