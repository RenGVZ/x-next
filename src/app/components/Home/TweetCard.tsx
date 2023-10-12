const TweetCard = () => {
  return (
    <div className="flex flex-row border border-zinc-700 border-t-0 border-r-0 border-l-0 p-4">
      <div className="min-w-fit">
        <div className="w-12 h-12 bg-zinc-700 rounded-full"></div>
      </div>
      <div className="flex flex-col w-full px-4">
        <div className="flex space-x-2">
          <p>TweeterName</p>
          <p className="text-zinc-600">@TweeterHandle</p>
          <p className="text-zinc-600"> • TimeStamp</p>
        </div>
        <div className="">
          <p>TweetContent</p>
        </div>
      </div>
    </div>
  )
}

export default TweetCard
