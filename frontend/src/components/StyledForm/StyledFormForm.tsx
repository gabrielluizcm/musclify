type StyledFormFormProps = {
  children: React.ReactNode;
}

export default function StyledFormForm(props: StyledFormFormProps) {
  return (
    <form className="w-1/2 md:w-1/5 flex flex-col gap-1">
      {props.children}
    </form>
  )
}