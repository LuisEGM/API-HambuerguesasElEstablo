import { ConnectionPool } from "mssql";

const config = {
    server: "localhost",
    database: "DBHamburguesasElEstablo",
    user: "SA",
    password: "Mssql3002173734",
    port: 1433
};

export async function connect(){

    try {
        const conexion = await new ConnectionPool(config);
        return conexion.connect();
    } catch (error) {
        console.log(error);
    }
    
}

//Config LINUX
// const config = {
//     server: "localhost",
//     database: "DBHamburguesasElEstablo",
//     user: "SA",
//     password: "Mssql3002173734",
//     port: 1433
// };