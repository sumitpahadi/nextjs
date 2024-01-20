"use client"
import Link from "next/link";
function Contactdetail() {
  return (
    <div>
      <h1>my name is sumit rawat</h1>
      <h1> and i am mern stack developer</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
        provident vitae nihil quam inventore dolorem at neque similique ea quasi
        magni quo, labore, pariatur dolore, facilis incidunt esse saepe
        molestiae.
      </p>
      <br />
      <Link href={"/"}> go to home page</Link>
    </div>
  );
}

export default Contactdetail;
