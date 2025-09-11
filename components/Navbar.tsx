import Link from 'next/link'

export default function Navbar() {
    return (
   
        <nav className="py-2 flex justify-between items-center border-b">
      
            <h1 />
            <div className="flex items-center">
                
                <Link href="https://www.linkedin.com/in/keeganpatton/" className="mr-5">
                    <img src="/linkedin-svgrepo-com.svg" alt="Keegan Patton Linkedin" width={55} height={55} />
                </Link>
                <Link href="https://github.com/dbo-keeganpatton">
                    <img src="/github-svgrepo-com.svg" alt="Keegan Patton Github" width={50} height={50} />
                </Link>


            </div>
            <h1 />
    
        </nav>
  
    )
}
