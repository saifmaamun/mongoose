import express, { Application} from "express";
import cors from "cors"


const app:Application = express()


// application routes
import userRoutes from "./app/modules/user/user.route";

// using cors
app.use(cors())

// parse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))





// insert a data
    /*
    step1: interface done
    step2: Schema done
    step3: Model done
    step4: DataBase Query on Model done
    */
    /*
    create a folder named app
    interface ==> user.interface.ts
    model and schema ==> user.model.ts
    route, route function ==> user.controller.ts

    database query function ==> user.server.ts

    */
// app.get('/api/v1/user', userRoutes)
app.use('/api/v1/user', userRoutes)


export default app;







// {
//     "id":"56465416",
//     "role":"Student",
//     "password":"test",
//     "name":{
//        "firstName":"test name asa",
//        "middleName":"Rana",
//        "lastName":"maamun"
//     },
//     "dateOfBirth":"4/5/23",
//     "gender":"male",
//     "email":"saif@gmail.com",
//     "contactNumber":"01245698745",
//     "emergencyContactNumber":"013547859634",
//     "presentAddress":"Dhaka"
//     "permanentAddress":"vhola"
//  }