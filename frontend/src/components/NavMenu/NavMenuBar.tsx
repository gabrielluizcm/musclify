export default function NavMenuBar(props: { children: React.ReactNode }) {
  return (
    <nav className="w-full h-12 bg-onyx flex items-center justify-center absolute
       bottom-0 left-0">
      <div className="w-1/2 md:w-1/6 flex items-center justify-between">
        {props.children}
      </div>
    </nav>
  )
}