import { useEffect } from "react";
import { useUser } from "./context/UserContext";
import AppRoutes from "./routes/AppRoutes";
import { useNavigate } from "react-router-dom";

const App = () => {
  const {userEmail,userName} = useUser()
  const navigate = useNavigate()

  useEffect(()=>{
    if(!userEmail ||!userName){
      navigate('/user-details')
    }
  },[userEmail,userName])
  
  return <AppRoutes />;
};

export default App;
