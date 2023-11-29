import NavMenu from "../../components/NavMenu";

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
    <div className="w-full md:w-1/3 ph-4 pv-2 flex items-center justify-center gap-3">
      {
        daysDic.map((day, index) => <DayCircle index={index} label={day} />)
      }
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Weekdays />
      <NavMenu />
    </>
  )
}