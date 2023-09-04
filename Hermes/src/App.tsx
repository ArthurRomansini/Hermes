import './App.css'
import AppClinicaRoutes from './Routes/appClinica.routes'
import AppPacienteRoutes from './Routes/appPaciente.routes'
import AuthRoutes from './Routes/auth.routes'

function App() {

  const auth = false;
  const authType = 'paciente';
  return (
    
    auth ?authType === 'paciente' ?
    <> <AppPacienteRoutes /> </> :
     <> <AppClinicaRoutes /> </>:
     <> <AuthRoutes /> </> 
     

  )
}

export default App
