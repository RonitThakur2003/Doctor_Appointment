import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    patientID : {type:String , required:true},
    patientName: { type:String, required:true},
    phNumber: { type:Number, required:true},
    email: { type:String},
    date : { type:String, required:true},
    time: { type:String, required:true},
})

const patientModel = mongoose.models.appoitment || mongoose.model('addPatient',patientSchema)

export default patientModel