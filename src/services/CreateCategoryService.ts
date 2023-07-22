import { myDataSource } from "../app-data-source"
import { Category } from "../entities/Category"

type CategoryRequest = {
  name: string
  description: string
}

export class CreateCategoryService {
  async execute({name, description}: CategoryRequest): Promise<Category | Error> {
    const repo = myDataSource.getRepository(Category)

    if(await repo.findOneBy({ name })) {
      return new Error("Category already exist")
    }

    const category = repo.create({
      name,
      description
    })

    await repo.save(category)

    return category
  }
}