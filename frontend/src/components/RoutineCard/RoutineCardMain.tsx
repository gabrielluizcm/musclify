export default function RoutineCardMain({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start justify-center gap-1 w-2/3 min-h-[40px]">
      {children}
    </div>
  )
}