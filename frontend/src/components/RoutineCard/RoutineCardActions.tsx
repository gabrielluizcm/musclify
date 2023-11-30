export default function RoutineCardActions({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex grow-[1] flex-col items-center justify-center gap-2">
      {children}
    </div>
  )
}