import mongoose from "mongoose";

const addAppointment = new mongoose.Schema({
    patientName : {type:String , required: true},
    phNumber : {type:Number , required:true},
    email : {type:String, unique : true},
    date : { type:String, required:true},
    time: { type:String, required:true},
})

const addAppointmentModel = mongoose.models.addAppointment || mongoose.model('addAppointment',addAppointment)

export default addAppointmentModel