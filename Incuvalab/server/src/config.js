import { config } from 'dotenv'
config();
//Variable de Etorno
export default {
    port: process.env.PORT || 4000,
    dbUser: process.env.DB_USER || 'root',
    dbPort: process.env.DB_PORT || 3306,
    dbPassword: process.env.DB_PASS || '',
    dbServer: process.env.DB_SERVER || 'localhost',
    dbDatabase: process.env.DB || 'dbincuvalab',
}