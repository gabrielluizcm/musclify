export default function StyledFormInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className="bg-light-silver text-onyx placeholder-[#888] rounded-full text-base w-full text-center" />
  )
}