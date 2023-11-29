type StyledFormFormProps = {
  children: React.ReactNode;
  onSubmit: () => void;
}

export default function StyledFormForm(props: StyledFormFormProps) {
  return (
    <form onSubmit={props.onSubmit} className="w-full flex flex-col gap-1 font-roboto">
      {props.children}
    </form>
  )
}