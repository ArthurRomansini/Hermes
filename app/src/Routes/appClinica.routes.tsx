import React from 'react';
import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom';

import AgendamentosComponent from '../pages/AgendamentosComponent/AgendamentosComponent';
import PacientesComponent from '../pages/PacientesComponent/PacientesComponent';


export default function AppClinicaRoutes() {
    return (
        <BrowserRouter>
            <ReactRoutes>
                <Route path="/agendamentos" element={ <AgendamentosComponent />} />
                <Route path='/pacientes' element={<PacientesComponent />} />
            </ReactRoutes>
        </BrowserRouter>
    )
}