import Link from "next/link"
import TwitterIcon from "@/assets/icons/TwitterIcon"
import { SidebarMenu } from "@/config/sidebarMenu"

const Sidebar = () => {
  return (
    <div className="w-[25%] p-4 space-y-2">
      <div className="w-[40px] h-[40px] mx-2 flex justify-center items-center hover:bg-gray-800 hover:ease-in hover:transition hover:rounded-full hover:cursor-pointer">
        <TwitterIcon />
      </div>
      <ul className="flex flex-col justify-evenly text-2xl font-bold space-y-2">
        {SidebarMenu.map((item) => (
          <li
            key={item.title}
            className="w-fit flex space-x-4 items-center px-4 py-2 hover:bg-zinc-900 hover:rounded-full hover:ease-in hover:transition"
          >
            <item.icon />
            <Link href={item.link}>
              <h1 className="text-xl">{item.title}</h1>
            </Link>
          </li>
        ))}
        {/* <li>
          <Link href="/">
            Home
            <HomeIcon />
          </Link>
        </li>
        <li>
          <Link href="/api/auth/signin">Sign in</Link>
        </li>
        <li>
          <Link href="/api/auth/signout">Sign out</Link>
        </li>
        <li>
          <Link href="/server">Server</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
        <li>
          <Link href="/extra">Extra</Link>
        </li> */}
      </ul>
    </div>
  )
}

export default Sidebar
