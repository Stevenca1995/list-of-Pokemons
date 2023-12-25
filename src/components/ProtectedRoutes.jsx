import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const trainerName = useSelector((store) => store.trainerName.name);

  if (trainerName !== "") {
    //? Le permitimos ver el componente correspondiente
    return <Outlet />
  } else {
    //? Lo vamos adireccionar al home
    <Navigate to={"/"} />  
  }
};
export default ProtectedRoutes;
