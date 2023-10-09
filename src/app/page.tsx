import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"
import UserCard from "./components/shared/UserCard"
import MiddleLayout from "./components/Layouts/MiddleLayout"
import RightLayout from "./components/Layouts/RightLayout"

export default async function Home() {
  return (
    <>
      <MiddleLayout>
        <div className="sticky top-0 h-28 border border-zinc-700 border-t-0 border-r-0 border-l-0">
          <h1 className="text-xl font-bold p-4">Home</h1>
          <div className="w-full absolute bottom-0 flex justify-around">
            <div className="flex flex-col border-4 border-blue-twitter border-t-0 border-l-0 border-r-0 pb-0">
              <h1 className="text-[15px] font-bold ">For you</h1>
            </div>
            <div className="text-[15px] font-bold text-zinc-700 pb-4">
              Following
            </div>
          </div>
        </div>
      </MiddleLayout>

     <RightLayout>
        <h1>Search</h1>
     </RightLayout>
    </>
  )
  // const session = await getServerSession(options)

  // return (
  //   <>
  //     {session ? (
  //       <UserCard user={session?.user} pagetype={"Home"} />
  //     ) : (
  //       <h1 className="text-5xl">You shall not pass!</h1>
  //     )}
  //   </>
  // )
}
