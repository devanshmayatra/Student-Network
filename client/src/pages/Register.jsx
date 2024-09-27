import {useState} from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import { useNavigate , NavLink } from 'react-router-dom';

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = '/register';

export const Register = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    username: '',
    email: '',
    password:''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username , email , password} = user;
    try{
      const {data} = await axios.post('/register',{
        username ,  email , password
      })
      if(data.error){
        toast.error(data.error);
      }
      else{
        setUser({});
        toast.success('Registration Successfull');
        navigate('/login');
      }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" onChange={(e)=>setUser({...user, username: e.target.value})}/>
        <label htmlFor="email">Email:</label>
        <input id='email' type="email" onChange={(e)=>setUser({...user, email: e.target.value})}/>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={(e)=>setUser({...user, password: e.target.value})}/>
        <button type="submit" >Submit</button>
        <p>Already Have an Account ?
          <NavLink to="/login">Login Here </NavLink>  
        </p>
      </form>
    </>
  )
}
