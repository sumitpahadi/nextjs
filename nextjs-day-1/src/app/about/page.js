"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
function about() {
    const router=useRouter()
    const nav=(name)=>{
        router.push(name)

    }
  return (
    <div>
        <h1>this is about page</h1>
        <button onClick={()=>nav("/")}>go to home</button>
        <br />
        <br />
        <Link href={"/contact"}>go to contact page</Link>
        <br />
        <Link href={"/about/aboutdetail"}>go to about detail</Link>
      
    </div>
  )
}

export default about
