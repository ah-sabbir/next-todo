'use client'
import Searchbar from "@/components/searchbar/searchbar";
import Image from "next/image";
import { auth } from "@/auth"
import { useEffect } from "react";
import { useSession } from "next-auth/react";


const Navbar = ()=>{

    const { data: session } = useSession()
    
    // const session:any = await auth()

    // if (!session.user) return null

    useEffect(()=>{
        if(session) console.log(session);
    },[])

    return (
        <div className="w-full mx-auto py-5 bg-zinc-200 flex flex-row items-center px-20 gap-5">
            <Searchbar/>
            <div className="w-10 h-10">
                <Image src="https://lh3.googleusercontent.com/a/ACg8ocLmrCVxk2jcxskTY1eM_zhkzh8CX1YEVWJWH0hktyacMry0Qo92=s96-c-rg-br100" width={500} height={500} alt="..." className="w-full h-full"/>
            </div>
        </div>
    )
}


export default Navbar;