import React from 'react';
import Sidebar from 'react-sidebar';
import LogoFinniu from '../images/LogoFinniu.png';
import styled from 'styled-components';
import { MdDashboard, MdHistory, MdEvent, MdExitToApp, MdMonetizationOn } from 'react-icons/md';

const AppContainer = styled.div`
  display: flex;
  height: 100vh; /* Ocupa el 100% del viewport height */
  background-color: rgba(245, 253, 255, 1);
  `;
const SidebarWrapper = styled.div`
  display: flex;
  height: 100%;

`;

const SidebarContent = styled.div`
  .sidebar-content {
    ul {
      list-style: none;
      padding: 10px;
      margin-top:-25px;
     


      li {
        display: flex;
        align-items: center;
        padding: 10px;
        

        svg {
          margin-right: 10px;
        }
      }
    }
  }
`;

const SidebarImage = styled.img`
  width: 100px;
  height: 50px;
  padding: 40px;
  margin-top: 10px;
`;

const SideBarComponent = () => {
  return (
<AppContainer>
    <SidebarWrapper>
      <Sidebar
        sidebar={
          <SidebarContent>
            <div className="sidebar-content">
              <SidebarImage src={LogoFinniu} alt="Imagen de sidebar" />
              <ul>
                <li><MdDashboard /> Mi Dashboard</li>
                <li><MdMonetizationOn /> Mis Inversiones</li>
                <li><MdHistory /> Mi Historial</li>
                <li><MdEvent /> Mi Calendario</li>
                <li><MdExitToApp /> Cerrar Sesión</li>
              </ul>
            </div>
          </SidebarContent>
        }
        open={true}
      />
    </SidebarWrapper>
</AppContainer>);
};

export default SideBarComponent;