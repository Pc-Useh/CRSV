import { config } from 'dotenv'
config();
//Variable de Etorno
export default {
    port: (process.env.PORT || 4000),
    dbUser: (process.env.DB_USER || 'sa'),
    dbPort: (process.env.DB_PORT || 4022),
    dbPassword: (process.env.DB_PASS || '12345678'),
    dbServer: (process.env.DB_SERVER || 'localhost'),
    dbDatabase: (process.env.DB || 'DbIncuvalab'),
}