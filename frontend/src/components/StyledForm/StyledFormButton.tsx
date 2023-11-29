export default function StyledFormButton(props: React.InputHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      disabled={props.disabled}
      className="w-full rounded-full bg-lavander-indigo text-light-silver text-lg">
      {props.children}
    </button>
  )
}