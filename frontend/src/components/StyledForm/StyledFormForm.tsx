type StyledFormFormProps = {
  children: React.ReactNode;
}

export default function StyledFormForm(props: StyledFormFormProps) {
  return (
    <form className="w-full flex flex-col gap-1 font-roboto">
      {props.children}
    </form>
  )
}