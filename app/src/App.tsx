import { useContext } from "react";
import "./App.css";
import AppClinicaRoutes from "./Routes/appClinica.routes";
import AppPacienteRoutes from "./Routes/appPaciente.routes";
import AuthRoutes from "./Routes/auth.routes";
import { AuthContext } from "./Contexts/AuthContext";

function App() {
  const authValues = useContext(AuthContext);
  const auth = authValues.loggedUser;
  const authType = "paciente";
  return auth ? (
    authType === "paciente" ? (
      <>
        {" "}
        <AppPacienteRoutes />{" "}
      </>
    ) : (
      <>
        {" "}
        <AppClinicaRoutes />{" "}
      </>
    )
  ) : (
    <>
      {" "}
      <AuthRoutes />{" "}
    </>
  );
}

export default App;
