import { FaHome, FaCog, FaUser } from 'react-icons/fa';
import { CgGym } from 'react-icons/cg';

import NavMenuBar from "./NavMenuBar";
import NavMenuIcon from "./NavMenuIcon";

export default function NavMenu() {
  return (
    <NavMenuBar>
      <NavMenuIcon to='/'><FaHome /></NavMenuIcon>
      <NavMenuIcon to='/treinos'><CgGym /></NavMenuIcon>
      {/* <NavMenuIcon to='/evolucao'></NavMenuIcon> */}
      <NavMenuIcon to='/configuracao'><FaCog /></NavMenuIcon>
      <NavMenuIcon to='/perfil'><FaUser /></NavMenuIcon>
    </NavMenuBar>
  )

}