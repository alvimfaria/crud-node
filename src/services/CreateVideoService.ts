import { myDataSource } from "../app-data-source"
import { Category } from "../entities/Category"
import { Video } from "../entities/Video"

type VideoRequest = {
  name: string
  category_id: string
  description: string
  duration: number
}

export class CreateVideoService {
  async execute({name, description, category_id, duration}: VideoRequest): Promise<Video | Error> {
    const repo = myDataSource.getRepository(Video)
    const repoCategory = myDataSource.getRepository(Category)

    const category = await repoCategory.findOneBy({id: category_id})

    if(!category) {
      return new Error("Category does not exists")
    }

    if(await repo.findOneBy({ name })) {
      return new Error("Video already exist")
    }

    const video = repo.create({
      name,
      description,
      category_id,
      duration
    })

    await repo.save(video)

    return video
  }
}