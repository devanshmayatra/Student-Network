import {useState} from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import { useNavigate , NavLink } from 'react-router-dom';

 
export const Login = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    email: '',
    password:''
  })

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const {email, password} = user;
    try{
      const {data} = await axios.post("/login",{
        email,password
      });
      if(data.error){
        toast.error(data.error);
      }
      else{
        localStorage.setItem("loggedIn",true)
        setUser({});
        toast.success("Login Success");
        navigate("/");
        
      }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input id='email' type="email" onChange={(e)=>setUser({...user,email: e.target.value})} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={(e)=>setUser({...user,password: e.target.value})} />
        <button type="submit">Submit</button>
        <p>Do not have an account ?
          <NavLink to="/register">Register here </NavLink>  
        </p>
      </form>
    </>
  )
}
