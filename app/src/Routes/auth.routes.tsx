import React from 'react';
import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom';

import LoginApoloComponent from '../pages/LoginApoloComponent/LoginApoloComponent';
import LoginPacienteComponent from '../pages/LoginPacienteComponent/LoginPacienteComponent';


export default function AuthRoutes() {
    return (
        <BrowserRouter>
            <ReactRoutes>
                <Route path="/loginclinica" element={ <LoginApoloComponent />} />
                <Route path='*' element={ <LoginPacienteComponent/>}/>
            </ReactRoutes>
        </BrowserRouter>
    )
}