import NavMenu from "../../components/NavMenu";
import { RoutineCard } from "../../components/RoutineCard";

function Weekdays() {
  const daysDic = [
    'D', 'S', 'T', 'Q', 'Q', 'S', 'S'
  ];
  const weekday = (new Date()).getDay();

  function DayCircle({ index, label }: { index: number, label: string }) {
    return (
      <span className={`rounded-full h-8 w-8 text-sm md:h-12 md:w-12 md:text-xl text-light-silver flex items-center justify-center
        ${index === weekday ? 'bg-lavander-indigo' : 'bg-onyx'}`}>
        {label}
      </span>
    )
  }
  return (
    <div className="w-full px-4 py-2 flex items-center justify-center gap-3">
      {
        daysDic.map((day, index) => <DayCircle index={index} label={day} />)
      }
    </div>
  )
}

export default function Home() {
  //mockups
  const todaysRoutine = {
    title: 'Costas e bíceps',
    description: 'Puxada alta, remada curvada, e mais',
    exerciseCount: 7,
    estimatedMinutes: 94
  };
  const routinesHistory = [
    {
      title: 'Peito e tríceps',
      description: 'Supino reto, supino inclinado, e mais',
      date: '27/11',
      minutesElapsed: 115
    },
    {
      title: 'Legday',
      description: 'Cadeira flexora, leg 45, e mais',
      date: '26/11',
      minutesElapsed: 105
    },
    {
      title: 'Ombro e antebraço',
      description: 'Elevação lateral, elevação frontal, e mais',
      date: '25/11',
      minutesElapsed: 110
    },
    {
      title: 'Costas e bíceps',
      description: 'Puxada alta, remada curvada, e mais',
      date: '23/11',
      minutesElapsed: 117
    }
  ]
  return (
    <main className="h-full w-full md:w-1/3 flex flex-col gap-3 py-5">
      <Weekdays />
      <h2 className="font-montserrat text-xl text-light-silver">Treino do dia:</h2>
      <RoutineCard.Card as="div" active>
        <RoutineCard.Main>
          <RoutineCard.Title>{todaysRoutine.title}</RoutineCard.Title>
          <RoutineCard.Description>{todaysRoutine.description}</RoutineCard.Description>
        </RoutineCard.Main>
        <RoutineCard.Details>
          <RoutineCard.Detail>
            {todaysRoutine.exerciseCount > 1
              ? todaysRoutine.exerciseCount + ' exercícios'
              : todaysRoutine.exerciseCount + ' exercício'}
          </RoutineCard.Detail>
          <RoutineCard.Detail>{'Est.: ' + todaysRoutine.estimatedMinutes.toString() + ' min'}</RoutineCard.Detail>
        </RoutineCard.Details>
        <RoutineCard.Actions>
          <RoutineCard.Action type="start" to="#" />
        </RoutineCard.Actions>
      </RoutineCard.Card>
      <h2 className="font-montserrat text-xl text-light-silver">Histórico de treinos:</h2>
      <ul className="flex flex-col gap-2">
        {routinesHistory.map(routine =>
          <RoutineCard.Card as="li" active={false}>
            <RoutineCard.Main>
              <RoutineCard.Title>{routine.title}</RoutineCard.Title>
              <RoutineCard.Description>{routine.description}</RoutineCard.Description>
            </RoutineCard.Main>
            <RoutineCard.Details>
              <RoutineCard.Detail>{routine.date + ' - ' + routine.minutesElapsed + ' min'}</RoutineCard.Detail>
            </RoutineCard.Details>
          </RoutineCard.Card>
        )}
      </ul>
      <NavMenu />
    </main>
  )
}