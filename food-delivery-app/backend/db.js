const mongoose = require('mongoose');

const mongoURI="mongodb+srv://mv072004:2004@cluster0.xibgrxj.mongodb.net/foodclubmern?retryWrites=true&w=majority&appName=Cluster0"
const mongoDB=async()=>{
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Connected to MongoDB');
        const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray()
            console.log(fetched_data);
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
    

}
module.exports=mongoDB;
