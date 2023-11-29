export default function StyledFormButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      className="w-full rounded-full bg-lavander-indigo text-light-silver text-lg">
      {props.children}
    </button>
  )
}