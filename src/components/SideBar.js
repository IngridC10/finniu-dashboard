import React from 'react';
import Sidebar from 'react-sidebar';
import LogoFinniu from '../images/LogoFinniu.png';


import { MdDashboard,MdHistory, MdEvent, MdExitToApp, MdMonetizationOn } from 'react-icons/md'; // Importa los íconos de Material Icons

const SideBar = () => {
  return (
    <div style={{display:'flex',height:'100%'}}> {/* Contenedor principal */}
      <Sidebar
        sidebar={
          <div className='sidebar-wrapper'>
            <div className="sidebar-content">
              <img style={{width:'90px',height:'45px',padding:'20px'}} src={LogoFinniu} alt="Imagen de sidebar" /> {/* La imagen dentro del sidebar */}
              <ul style={{listStyle:'none',padding:'10px',marginBottom:'50px'}}>
                <li ><MdDashboard /> Mi Dashboard</li>
                <li><MdMonetizationOn /> Mis Inversiones</li>
                <li><MdHistory /> Mi Historial</li>
                <li><MdEvent /> Mi Calendario</li>
                <li><MdExitToApp /> Cerrar Sesión</li>
              </ul>
            </div>
          </div>
        }
        open={true}
      />
    </div>
  );
};

export default SideBar;