import express, { Application } from "express";
import morgan from "morgan";

//solucion a rrores de cors
import cors from "cors";

// IMPORTANDO RUTAS.
import welcome from "./routes/welcome.routes";
import views from "./routes/views.routes";
import storedProcedures from "./routes/storedProcedures.routes";
import recursionData from "./routes/recursionData.routes";

const corsOptions = {
    origin: '*'
}

export class App{

    private app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set("port",this.port || process.env.PORT || 3000);
    }

    routes(){
        this.app.use(welcome);
        this.app.use("/views",cors(corsOptions),views);
        this.app.use("/stored_Procedures",cors(corsOptions),storedProcedures);
        this.app.use("/recursion_Data",cors(corsOptions),recursionData);
    }

    middlewares(){
        this.app.use(morgan("dev"));
    }

    async listen(){
        await this.app.listen(this.app.get("port"));
        console.log("Server on port",this.app.get("port"));
    }

}