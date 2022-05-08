import posts from "../posts.json"
import Link from "next/link"

export default function blog (){
    return(
        <>        
        <h2>Blog page</h2>
        <ul>
            {
                Object.keys(posts).map((id,index)=>{
                    return (
                        <li key={id}><Link href={`blog/${id}`} >{id}</Link></li>
                    )
                })
            }
        </ul>
        </>
    )
}