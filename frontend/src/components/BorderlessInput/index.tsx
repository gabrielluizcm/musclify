type BorderlessInputProps = {
  autoFocus: boolean;
  value: string;
  onChange: (val: string) => void;
}

export default function BorderlessInput(props: BorderlessInputProps) {
  return (
    <input
      type="text"
      className="font-montserrat text-2xl text-light-silver border-none bg-transparent outline-none"
      autoFocus={props.autoFocus}
      value={props.value}
      onChange={evt => props.onChange(evt.currentTarget.value)} />
  )
}