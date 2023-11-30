import { RoutineCard } from "../../components/RoutineCard";
import NavMenu from "../../components/NavMenu";

export default function RoutinesPage() {
  //mockup
  const myRoutines = [
    {
      id: '5584ab7e-c87d-401f-a198-a0f71bca65c2',
      title: 'Peito e tríceps',
      description: 'Supino reto, supino inclinado, e mais',
      exerciseCount: 7,
      estimatedMinutes: 90
    },
    {
      id: '7628e2dd-f3f5-40e1-be4a-e01a17e1d28a',
      title: 'Costas e bíceps',
      description: 'Puxada alta, remada curvada, e mais',
      exerciseCount: 7,
      estimatedMinutes: 90
    },
    {
      id: '5b7ce837-4553-4a3a-9892-20087f265581',
      title: 'Ombro e antebraço',
      description: 'Elevação lateral, elevação frontal, e mais',
      exerciseCount: 7,
      estimatedMinutes: 90
    },
    {
      id: 'a01bb0bf-578c-4b2b-9826-4ca90ec69418',
      title: 'Legday',
      description: 'Cadeira flexora, leg 45, e mais',
      exerciseCount: 7,
      estimatedMinutes: 90
    }
  ]

  return (
    <>
      <main className="h-full w-full md:w-1/3 flex flex-col gap-3 py-5">
        <h1 className="font-montserrat text-2xl text-light-silver">Meus treinos</h1>
        <ul className="flex flex-col gap-2">
          {myRoutines.map(routine =>
            <RoutineCard.Card as="li" active={true}>
              <RoutineCard.Main>
                <RoutineCard.Title>{routine.title}</RoutineCard.Title>
                <RoutineCard.Description>{routine.description}</RoutineCard.Description>
              </RoutineCard.Main>
              <RoutineCard.Details>
                <RoutineCard.Detail>
                  {routine.exerciseCount} {routine.exerciseCount > 1 ? 'exercícios' : 'exercício'}
                </RoutineCard.Detail>
                <RoutineCard.Detail>
                  Est.: {routine.estimatedMinutes} min
                </RoutineCard.Detail>
              </RoutineCard.Details>
              <RoutineCard.Actions>
                <RoutineCard.Action to={`/treinos/${routine.id}/editar`} type="edit" />
                <RoutineCard.Action to={`/treinos/${routine.id}/apagar`} type="delete" />
              </RoutineCard.Actions>
            </RoutineCard.Card>
          )}
        </ul>
      </main>

      <NavMenu />
    </>
  )
}