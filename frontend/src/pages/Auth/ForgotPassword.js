import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout'
import axios from 'axios'; 
import { useNavigate, useLocation } from 'react-router-dom';
import '../../styles/AuthStyles.css'
import { useAuth } from '../../context/auth';

import toast from 'react-hot-toast'

const ForgotPassword = () => {

    const[email, setEmail] = useState("")
    const[newpassword, setNewPassword] = useState("")
    const[answer, setAnswer] = useState("")

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`, {email, newpassword, answer});
            if(res && res.data.success){
                toast.success(res.data.message)
                navigate("/login");
            }
            else{
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
    } 

  return (
    <Layout title={'Forgot Password - Mauli Quartz'}>
        <div className="form-container">   
            <form onSubmit={handleSubmit}>
                <h4 className='title'>RESET PASSWORD</h4>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                    <input type="email" value={email} onChange={ (e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail" placeholder="Enter Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleSecretAnswer" className="form-label">Question</label>
                    <input type="text" value={answer} onChange={ (e) => setAnswer(e.target.value)} className="form-control" id="exampleSecretAnswer" placeholder="Enter Your pet's name" required />
                </div>                
                <div className="mb-3">
                    <label htmlFor="exampleInputNewPassword" className="form-label">Password</label>
                    <input type="password" value={newpassword} onChange={ (e) => setNewPassword(e.target.value)} className="form-control" id="exampleInputNewPassword" placeholder="Enter New Password" required/>
                </div>
                
                <button type="submit" className="btn btn-primary">RESET</button>
            </form>
             
        </div>
    </Layout >
  )
}

export default ForgotPassword