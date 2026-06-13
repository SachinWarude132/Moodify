import { useContext, useEffect } from "react"
import { context } from "../auth.context"
import { login, register,getme,logout } from "../services/auth.api"


export const useAuth = ()=>{

 
  const {
  user,
  setUser,
  loading,
  setLoading
} = useContext(context);


 const handlelogin= async({email,password})=>{
  try{
    setLoading(true)

    const data = await login(email,password)

    setUser(data.user)

    return data
  }catch(err){
    console.log(err.response?.data)
  }finally{
    setLoading(false)
  }
}
  const handleregister= async({username ,email,password})=>{

    setLoading(true)
    const data = await register(username,email,password)
    setUser(data.user)
    setLoading(false)
}
 const handlegetme = async () => {
  try {
    setLoading(true);

    const data = await getme();

    setUser(data.user);
  } catch (err) {
    console.log("getme failed", err.response?.data);

    setUser(null);
  } finally {
    setLoading(false);
  }
};

    const handlelogout =async()=>{
       setLoading(true)

       const data = await logout()
       setUser(data.user)
       setLoading(false)
    }

useEffect(()=>{
  handlegetme()
},[])
    
return{user,
    loading,
    handlelogin,
    handleregister,
    handlegetme,
    handlelogout
};
 }