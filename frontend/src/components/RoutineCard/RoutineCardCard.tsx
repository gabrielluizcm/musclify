type RoutineCardCardProps = {
  active: boolean;
  as: 'div' | 'li';
  children: React.ReactNode
}

export default function RoutineCardCard({ active, children, as: As }: RoutineCardCardProps) {
  return (
    <As className={`w-full rounded-lg px-5 py-2 text-salmon flex align-center justify-around
     font-roboto ${active ? 'bg-lavander-indigo' : 'bg-onyx'}`}>
      {children}
    </As>
  );
}