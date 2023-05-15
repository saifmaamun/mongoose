import User from "./user.model";

// 4. Database 
export const userToDB = async()=>{
    const user = await new User({
        id:'56465416',
        role:"Student",
        password:'test',
        name:{
            firstName:'test name asa',
            middleName:'Rana',
            lastName:'maamun',
        },
        dateOfBirth:'4/5/23',
        gender: "male",
        email:'saif@gmail.com',
        contactNumber: '01245698745',
        emergencyContactNumber:'013547859634',
        presentAddress: 'Dhaka',
        permanentAddress: 'Noakhali',
      });
      await user.save();
    return user
} 