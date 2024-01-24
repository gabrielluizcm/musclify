import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { FaChevronLeft } from 'react-icons/fa';

import { RoutineCard } from '../../components/RoutineCard';
import AddButton from '../../components/AddButton';
import NavMenu from '../../components/NavMenu';
import BorderlessInput from '../../components/BorderlessInput';

export default function RoutineDetailsPage() {
  const params = useParams();
  // mockup
  const exercises = [
    {
      id: '5584ab7e-c87d-401f-a198-a0f71bca65c2',
      name: 'Supino reto',
      series: 3,
      reps: 12,
      weight: 20,
    },
    {
      id: '7628e2dd-f3f5-40e1-be4a-e01a17e1d28a',
      name: 'Supino inclinado',
      series: 3,
      reps: 10,
      weight: 10,
    },
    {
      id: '5b7ce837-4553-4a3a-9892-20087f265581',
      name: 'Crucifixo',
      series: 3,
      reps: 12,
      weight: 10,
    },
    {
      id: 'a01bb0bf-578c-4b2b-9826-4ca90ec69418',
      name: 'Supino declinado',
      series: 4,
      reps: 12,
      weight: 12,
    },
    {
      id: 'd7807872-99f9-484f-932e-31882fbc46a8',
      name: 'Triceps polia',
      series: 3,
      reps: 12,
      weight: 30,
    },
    {
      id: 'c4e901ed-1db1-418d-99fb-6e890d373b65',
      name: 'Triceps francês',
      series: 3,
      reps: 10,
      weight: 25
    },
    {
      id: '6fcf98a6-d7fb-4923-83ab-8b528b5b6d15',
      name: 'Abdominal infra',
      series: 4,
      reps: 20
    },
    {
      id: '859ba382-f937-4058-ae76-aea89c76cebd',
      name: 'Prancha',
      series: 3,
      time: '1 min'
    }
  ];

  const [routineName, setRoutineName] = useState('');

  useEffect(() => {
    setRoutineName(params.id ? 'Nome do treino' : 'Novo treino');
  }, []);

  return (
    <>
      <main className="h-full w-full md:w-1/3 flex flex-col gap-3 py-5">
        <div className="flex items-center gap-3">
          <Link to='/treinos'
            className='text-2xl text-lavander-indigo hover:text-lavander-indigo/75 transition-all'>
            <FaChevronLeft />
          </Link>
          <BorderlessInput
            autoFocus={!params.id}
            value={routineName}
            onChange={val => setRoutineName(val)} />
        </div>
        <ul className="flex flex-col gap-2">
          {exercises.map(exercise =>
            <RoutineCard.Card as='li' active={true} key={exercise.id}>
              <RoutineCard.Main>
                <RoutineCard.Title>{exercise.name}</RoutineCard.Title>
              </RoutineCard.Main>
              <RoutineCard.Details>
                <RoutineCard.Detail>
                  {exercise.series.toString()}x{exercise.reps && exercise.reps.toString() + ' reps'}
                </RoutineCard.Detail>
                <RoutineCard.Detail>
                  {exercise.weight && exercise.weight.toString() + ' kg'} {exercise.time}
                </RoutineCard.Detail>
              </RoutineCard.Details>
              <RoutineCard.Actions>
                <RoutineCard.Action as='button' onClick={() => console.log(`exclui ${exercise.id}`)} type='delete' />
              </RoutineCard.Actions>
            </RoutineCard.Card>
          )}
        </ul>
        <AddButton as='button' onClick={() => console.log('abre modal exercicio')}>
          Novo exercício
        </AddButton>
      </main>
      <NavMenu />
    </>

  )
}