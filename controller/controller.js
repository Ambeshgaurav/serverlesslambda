const async = require("async")
const mongoose = require("mongoose");

const UserModel = require("../model/user");

mongoose.connect('mongodb+srv://ambesh123:ambesh123@test.0bjgc.mongodb.net/test', {useNewUrlParser: true});





async function createMongodb(req, res) {
    var data = req.body;
    const user = new UserModel(req.body);
        await user.save();
        res.status(200).send(user);

}
async function readMongodb(req, res) {
    var data = req.body;
    const result = await UserModel.findOne({email:data.email})
    console.log("Read data", result);
    res.status(200).send(result);
}
async function readAllMongodb(req, res) {
   
    const result= await UserModel.find()
    console.log("Read ALL data", result);
    res.status(200).send(result);
}
// async function updateMongodb(req, res) {
//     var data = req.body;
//     var updateData = {}
//     updateData.email = data.email
//     if (data.name) {
//         updateData.name = data.name;

//     }
//     if (data.age) {
//         updateData.age = data.age;
//     }
//     var result = await mongoService.updateData(updateData)
//     console.log("Data Successful updated ", result);
//     res.status(200).send("Data Successful updated");

// }
// async function deleteMongodb(req, res) {
//     var data = req.body;
//     var delete_data = {}
//     if (!data.email) {
//         return res.send("email not found")
//     }
//     if (data.name) {
//         delete_data.name = data.name;

//     }
//     if (data.age) {
//         delete_data.age = data.age;
//     }
//     var delete_data = await mongoService.deleteData(data)
//     console.log("data Successfully deleted");
//     res.status(200).send("Data Successfully deleted");

// }
module.exports = {
 
    createMongodb: createMongodb,
    readMongodb: readMongodb,
    readAllMongodb:readAllMongodb
    // updateMongodb: updateMongodb,
    // deleteMongodb: deleteMongodb
  
}