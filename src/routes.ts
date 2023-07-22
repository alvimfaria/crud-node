import { Router } from "express"
import { CreateCategoryController } from "./controllers/CreateCategoryController"
import { GetAllCategoryController } from "./controllers/GetAllCategoriesController"
import { DeleteCategoryConstroller } from "./controllers/DeleteCategoryController"
import { UpdateCategoryController } from "./controllers/UpdateCategoryController"
import { CreateVideoController } from "./controllers/CreateVideoController"
import { GetAllVideoController } from "./controllers/GetAllVideoController"
import { DeleteVideoConstroller } from "./controllers/DeleteVideoController"
import { UpdateVideoController } from "./controllers/UpdateVideoController"

const routes = Router()

routes.post("/categories", new CreateCategoryController().handle)
routes.get("/categories", new GetAllCategoryController().handle)
routes.delete("/categories/:id", new DeleteCategoryConstroller().handle)
routes.put("/categories/:id", new UpdateCategoryController().handle)

routes.post("/videos", new CreateVideoController().handle)
routes.get("/videos", new GetAllVideoController().handle)
routes.delete("/videos/:id", new DeleteVideoConstroller().handle)
routes.put("/videos/:id", new UpdateVideoController().handle)

export { routes }