import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

type AddButtonProps = {
  children: string;
} & (
    { as: 'link'; to: string; } |
    { as: 'button'; onClick: () => void; }
  )

export default function AddButton(props: AddButtonProps) {
  return (
    <>
      {props.as === 'link' ?
        <Link className="w-full flex flex-col items-center justify-center 
          bg-salmon text-faux-black font-montserrat rounded-md mt-3 py-2 gap-2 
          hover:bg-salmon/75 transition-all" to={props.to}>
          <FaPlus />
          {props.children}
        </Link> :
        <button className='w-full flex flex-col items-center justify-center bg-salmon
          text-faux-black font-montserrat rounded-md mt-3 py-2 gap-2 
          hover:bg-salmon/75 transition-all' onClick={props.onClick}>
          <FaPlus />
          {props.children}
        </button>
      }
    </>

  )
}