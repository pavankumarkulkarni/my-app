import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
export default function Dog() {
  const [dog, setDog] = useState(null);
  useEffect(() => {
    async function getDog() {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setDog(data.message);
    }
    getDog();
  }, []);

  return (<>
  <Image src={dog} alt="cute pet" style={{height:'200px',display:'block'}}/>
  <Link href="/"><a>Home</a></Link>
  </>)
};

