import Link from 'next/link'
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";


const TopNav = () => {
  return (
   <section className='py-2'>

     <div className='container mx-auto px-20 flex items-center justify-between'> 
        <div className="flex items-center gap-20">
            <Link href="#">
            About Us
            </Link>
            <Link href="#">
            Contact Us
            </Link>
        </div>
        <div className="flex items-center gap-20">
            <Link href="#" className='flex items-center gap-1'>
           <FiPhone />


            01979010669
            </Link>
            <Link href="#" className='flex items-center gap-1'>
            <MdOutlineEmail />
             contact@raimentstation.com
            </Link>
        </div>
    </div>
   </section>
  )
}

export default TopNav