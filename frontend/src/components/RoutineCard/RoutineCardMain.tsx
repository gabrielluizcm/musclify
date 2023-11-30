export default function RoutineCardMain({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start justify-center gap-2 w-2/3">
      {children}
    </div>
  )
}