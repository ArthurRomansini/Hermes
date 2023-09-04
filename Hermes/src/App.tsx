import './App.css'
import AppClinicaRoutes from './routes/appClinica.routes'
import AppPacienteRoutes from './routes/appPaciente.routes'
import AuthRoutes from './routes/auth.routes'

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
