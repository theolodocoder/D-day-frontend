import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface UserData{
  email:string;
  password:string;
}

const Login: React.FC = () => {
  const [userData,setUserData] = useState<UserData>({email:"",password:""} )
  const navigate = useNavigate()
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!(userData.email && userData.password)){
      return
    }
    navigate("/")
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUserData(prev => ({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }

  return (
    <div className="grid place-items-center">
      <div className="shadow-md p-6 rounded-md w-[500px] bg-white">
        <h1 className="text-2xl pb-3 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
        <div id="input-group" className="flex flex-col mb-4">
          <label htmlFor="email" className="py-2">Email</label>
          <input type="email" name="email" id="email" required value={userData.email} onChange={handleChange} className="input-solid" />
        </div>
        <div id="input-group" className="flex flex-col mb-4">
          <label htmlFor="password" className="py-2">Password</label>
          <input type="text" name="password" id="password" required value={userData.password} onChange={handleChange} className="input-solid" />
        </div>
        <div className="mb-4">
        <Link to={"/forgot-password"} className="text-blue-500">Forgot password?</Link>
        </div>
        <button type="submit" className="btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
