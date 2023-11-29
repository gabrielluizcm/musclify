type RoutineCardCardProps = {
  active: boolean;
  children: React.ReactNode
}

export default function RoutineCardCard({ active, children }: RoutineCardCardProps) {
  return (
    <div className={`w-full rounded-lg text-salmon p-1 flex align-center justify-center
      ${active ? 'bg-lavander-indigo' : 'bg-onyx'}`}>
      {children}
    </div>
  );
}