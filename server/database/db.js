import mongoose from 'mongoose';


const Connection = async(username,password) => {
    const URL=`mongodb+srv://${username}:${password}@mernapp.0vxtsi3.mongodb.net/mernapp?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL);
        console.log("Database connected...");
    } catch (error) {
        console.log(`Error while connecting to database : ${error}`);        
    }
}

export default Connection;