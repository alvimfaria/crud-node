import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 8889,
    username: "root",
    password: "root",
    database: "node-crud",
    migrations: ["src/database/migrations/*.ts"],
    entities:["src/entities/*.ts"]
})