import React, {  useContext,useState } from 'react';
import { toast } from 'react-toastify'
import axios from 'axios'
import { DoctorContext } from '../../context/DoctorContext'


const AddApointment = () => {
    const {backendUrl , dToken} = useContext(DoctorContext);
    const [patientName , setPatientName] = useState("");
    const [email , setEmail] = useState("");
    const [time , setTime] = useState("");
    const [phNumber , setPHnumber] = useState("");
    const [date , setDate] = useState("");

    const appointmentData = {
        patientName,
        phNumber,
        date,
        time,
        email
    };

    const onSubmitHandler = async(event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post(
                `${backendUrl}/api/doctor/add-appointment`, appointmentData,
                { headers: { dToken } }
            );
    
            if (data.success) {
                toast.success(data.message);
                // Reset form,
                setPatientName('');
                setEmail('');
                setPHnumber('');
                setTime('');
                setDate('');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
            console.log(error);
        }
    }
    return (
        <form className='m-5 w-full'>
            <p className='mb-3 text-lg font-medium'>Add Appointment</p>
            <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
                <div className='flex items-center gap-4 mb-8 text-gray-500'>
                    <div className='flex-1 flex flex-col gap-1'>
                        <p>Patient Name</p>
                        <input onChange={(e) => setPatientName(e.target.value)} value={patientName} className='border rounded px-3 py-2' type="text" placeholder='Name' required />
                    </div>
                    <div className='flex-1 flex flex-col gap-1'>
                        <p>Phone Number</p>
                        <input onChange={(e) => setPHnumber(e.target.value)} value={phNumber} className='border rounded px-3 py-2' type="text" placeholder='Number' required />
                    </div>
                </div>
                <div className='flex items-center gap-4 mb-8 text-gray-500'>
                    <div className='flex-1 flex flex-col gap-1'>
                        <p>Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} className='border rounded px-3 py-2' type="text" placeholder='Email' />
                    </div>
                    <div className='flex-1 flex flex-col gap-1'>
                        <p>TIme</p>
                        <input onChange={(e) => setTime(e.target.value)} value={time} className='border rounded px-3 py-2' type="time" placeholder='Number' required />
                    </div>
                    <div className='flex-1 flex flex-col gap-1'>
                        <p>Date</p>
                        <input 
    onChange={(e) => setDate(e.target.value)} 
    value={date} 
    className='border rounded px-3 py-2' 
    type="date" 
    required 
/>
                    </div>
                </div>
                <button type='submit' className='bg-primary px-10 py-3 mt-4 text-white rounded-full' onClick={onSubmitHandler}>Add Patient</button>
            </div>
        </form>
    )
}

export default AddApointment
