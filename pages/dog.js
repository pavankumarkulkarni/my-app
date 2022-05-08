import { useEffect, useState } from "react";
import Link from "next/link"
const Dog = () => {
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
  <img src={dog} alt="cute pet" style={{height:'200px',display:'block'}}/>
  <Link href="/"><a>Home</a></Link>
  </>)
};

export default Dog;