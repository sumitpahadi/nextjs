"use client";


import { useRouter } from "next/navigation";
import Link from "next/link";

function contact() {
    const router=useRouter()
    const nav=(name)=>{
        router.push(name)
    }
  return (
    <div>
      <h1>this is contact page</h1>
      <button onClick={()=>nav("/about")}>got to about page</button>
      
    
      <Link href={"/about"}>go to about page</Link>
      <br />
      <Link href={"/about/aboutdetail"}>go to about detail</Link>
    </div>
  );
}

export default contact;
