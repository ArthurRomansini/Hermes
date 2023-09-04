import { useContext } from "react";
import "./App.css";
import AppClinicaRoutes from "./Routes/appClinica.routes";
import AppPacienteRoutes from "./Routes/appPaciente.routes";
import AuthRoutes from "./Routes/auth.routes";
import { AuthContext } from "./Contexts/AuthContext";
import SchedulesProvider from "./Contexts/ScheculeContext";

function App() {
  const authValues = useContext(AuthContext);
  const auth = authValues.loggedUser;
  const authType = "paciente";
  return (
      <>
        {" "}
        <SchedulesProvider>
          <AppClinicaRoutes />{" "}
        </SchedulesProvider>
      </>
  );
}

export default App;


// return auth ? (
//   authType === "paciente" ? (
//     <>
//       {" "}
//       <AppPacienteRoutes />{" "}
//     </>
//   ) : (
//     <>
//       {" "}
//       <SchedulesProvider>
//         <AppClinicaRoutes />{" "}
//       </SchedulesProvider>
//     </>
//   )
// ) : (
//   <>
//     {" "}
//     <AuthRoutes />{" "}
//   </>
// );
// }

