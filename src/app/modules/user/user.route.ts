import express from "express";
import { createUser, getUsers } from "./user.controller";
const router = express.Router();

router.get('/',getUsers);
router.post('/create-user', createUser);

export default router;


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
//     "presentAddress":"Dhaka",
// }