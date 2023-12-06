import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

type AddButtonProps = {
  to: string;
  children: string;
}

export default function AddButton(props: AddButtonProps) {
  return (
    <Link
      className="w-full flex flex-col items-center justify-center bg-salmon
        text-faux-black font-montserrat rounded-md mt-3 py-2 gap-2"
      to={props.to}>
      <FaPlus />
      {props.children}
    </Link>
  )
}