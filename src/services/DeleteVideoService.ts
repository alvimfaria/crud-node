import { myDataSource } from "../app-data-source";
import { Video } from "../entities/Video";

export class DeleteVideoService {
  async execute(id: string) {
    const repo = myDataSource.getRepository(Video)

    const video = await repo.findOneBy({id})

    if (!video) {
      return new Error("Category does not exists!")
    }

    await repo.delete(id)
  }
}