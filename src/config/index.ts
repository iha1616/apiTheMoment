import { registerAs } from "@nestjs/config";


export default registerAs('config', () => {
   return {
      database: {
         port: process.env.DB_PORT,
         host: process.env.DB_HOST,
         name: process.env.DB_NAME,
         user: process.env.DB_USER,
         password: process.env.DB_PASSWORD,
      }
   }
})