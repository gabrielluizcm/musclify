import { useLocation, Link } from 'react-router-dom';

type NavMenuIconProps = {
  to: string;
  children: React.ReactNode
}

export default function NavMenuIcon(props: NavMenuIconProps) {
  const { pathname } = useLocation();
  return (
    <Link to={props.to} className={`text-2xl hover:text-salmon transition-all
      ${pathname === props.to ? 'text-salmon border-b-2 pb-1' : 'text-faux-black'}`}>
      {props.children}
    </Link>
  )
}