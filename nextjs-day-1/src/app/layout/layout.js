import Link from "next/link"

export default function layout({childern}) {
  return (
    <div>


        <ul>
            <li><Link href={"/about"}>About</Link></li>
            <li>
                <Link href={"/contact"}>Contact</Link>
            </li>
            <li>
                <Link href={"/info"}>info</Link>
            </li>
        </ul>
      
      {
        childern
      }
    </div>
  )
}


