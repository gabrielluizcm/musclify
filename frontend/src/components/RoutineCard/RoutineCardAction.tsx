import { FaPlay, FaTrash } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';


type RoutineCardActionProps = {
  type: 'start' | 'edit' | 'delete';
} & (
    { as: 'link'; to: string; } |
    { as: 'button'; onClick: () => void; }
  )

export default function RoutineCardAction(props: RoutineCardActionProps) {
  let classes = '';
  let Icon = null;

  switch (props.type) {
    case 'start':
      classes = 'text-salmon hover:text-khaki';
      Icon = FaPlay;
      break;
    case 'edit':
      classes = 'bg-salmon text-faux-black hover:bg-salmon/75 hover:text-faux-black/75 p-2';
      Icon = MdEdit;
      break;
    case 'delete':
      classes = 'bg-light-silver text-lavander-indigo hover:bg-light-silver/75 hover:text-lavander-indigo/75 p-1';
      Icon = FaTrash;
  }

  return (
    <>
      {props.as === 'link' ?
        <Link className={`rounded-lg transition-all ${classes}`} to={props.to}>
          <Icon />
        </Link> :
        <button className={`rounded-lg transition-all ${classes}`} onClick={props.onClick}>
          <Icon />
        </button>
      }
    </>

  );
}