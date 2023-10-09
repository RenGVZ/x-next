type Props = {
  children: React.ReactNode
}

const MiddleLayout = ({ children }: Props) => {
  return (
    <div className="w-[65%] border border-t-0 border-b-0 border-zinc-700 h-screen">
      {children}
    </div>
  )
}

export default MiddleLayout
