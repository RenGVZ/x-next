type Props = {
  children: React.ReactNode
}

const RightLayout = ({ children }: Props) => {
  return <div className="w-[35%] py-1 px-8">{children}</div>
}

export default RightLayout
