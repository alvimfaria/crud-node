import { myDataSource } from "../app-data-source";
import { Video } from "../entities/Video";

export class GetAllVideoService {
  async execute(){
    const repo = myDataSource.getRepository(Video)

    const videos = await repo.find({
      relations: {
        category: true
      }
    })

    return videos
  }
}