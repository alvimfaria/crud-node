import { myDataSource } from "../app-data-source";
import { Category } from "../entities/Category";

type CategoryUpdateRequest = {
  id: string
  name: string
  description: string
}

export class UpdateCategoryService {
  async execute({id, name, description } : CategoryUpdateRequest) {
    const repo = myDataSource.getRepository(Category)

    const category = await repo.findOneBy({id})

    if (!category) {
      return new Error("Category does not exists!")
    }

    category.name = name ?? category.name
    category.description = description ?? category.description

    await repo.save(category)

    return category
  }
}