import { FaPlay, FaTrash } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

type RoutineCardActionProps = {
  type: 'start' | 'edit' | 'delete';
  to: string;
}

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
    <a className={`rounded-lg ${classes}`} href={props.to}>
      <Icon />
    </a>
  );
}