import { myDataSource } from "../app-data-source";
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";

type VideoUpdateRequest = {
  id: string
  name: string
  description: string
  category_id: string
  duration: number
}

export class UpdateVideoService {
  async execute({id, name, description, category_id, duration } : VideoUpdateRequest) {
    const repo = myDataSource.getRepository(Video)
    const repoCategory = myDataSource.getRepository(Category)

    const video = await repo.findOneBy({id})

    if (!video) {
      return new Error("Video does not exists!")
    }

    const category = await repoCategory.findOneBy({id: category_id})

    if (!category) {
      return new Error("Category does not exists!")
    }

    video.name = name ?? video.name
    video.description = description ?? video.description
    video.category_id = category_id ?? video.category_id
    video.duration = duration ?? video.duration

    await repo.save(video)

    return video
  }
}