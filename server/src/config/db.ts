import { Sequelize } from "sequelize";


export const db = new Sequelize('postgresql://administrador_productos_pern_user:ImNg9Yz3VNtV4Sf2MUZ8Qfloe5dBwIVc@dpg-cqhph856l47c73fs98eg-a.oregon-postgres.render.com/administrador_productos_pern', {
  dialectOptions: {
    ssl: {
      require: false,
    }
  }
})
