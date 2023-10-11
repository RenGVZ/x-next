"use client"
import { useState } from "react"
import ImageIcon from "@/assets/icons/home/ImageIcon"
import { tweetBoxMenu } from "@/config/tweetBoxMenu"

const TweetBox = () => {
  const [newTweet, setNewTweet] = useState<string>("")
  return (
    <div className="h-32 flex flex-row border border-zinc-700 border-t-0 border-r-0 border-l-0 p-4">
      <div className="min-w-fit">
        <div className="w-12 h-12 bg-zinc-700 rounded-full"></div>
      </div>
      <div className="flex flex-col w-full px-4">
        <div className="py-3">
          <input
            className="bg-transparent outline-none text-zinc-600 placeholder:text-zinc-600"
            placeholder="What is happening?!"
            value={newTweet}
            onChange={(e) => setNewTweet(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center py-3">
          <div className="flex space-x-4">
            {tweetBoxMenu.map((item) => (
              <div
                key={item.title}
                className="w-5 h-5 flex justify-center items-center rounded-full hover:cursor-pointer"
              >
                <item.icon />
              </div>
            ))}
          </div>

          <button
            className={`bg-blue-twitter rounded-full ${
              newTweet === "" ? " opacity-50" : " opacity-100"
            } text-white font-bold px-4 py-2 text-sm`}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default TweetBox
