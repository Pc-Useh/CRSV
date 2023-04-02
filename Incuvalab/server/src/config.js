import { config } from 'dotenv'
config();
//Variable de Etorno
export default {
    port: (process.env.PORT || 5001),
    dbUser: (process.env.DB_USER || 'id=Pc-Useh_SQLLogin_1'),
    dbPort: (process.env.DB_PORT || 1433),
    dbPassword: (process.env.DB_PASS || 'ubvgphd479'),
    dbServer: (process.env.DB_SERVER || 'dbinqvalab.mssql.somee.com'),
    dbDatabase: (process.env.DB || 'dbinqvalab'),
}