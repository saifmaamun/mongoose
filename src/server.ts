import mongoose from "mongoose";
import app from "./app"


const port:number = 5000;





// database connect to local server
async function main() {
    try {

        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose');
        console.log(`connected to ${port}`)

        // listen when app is started
        app.listen(port, () => {
          console.log(`server is listening on port ${port}`)
        })
    }
    catch (err) {
        console.log(`error detected: ${err}`)
    }

  }

//call the function below 
main()

