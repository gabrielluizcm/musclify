export default function RoutineCardActions({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-[50px] flex-col items-center justify-center gap-2">
      {children}
    </div>
  )
}