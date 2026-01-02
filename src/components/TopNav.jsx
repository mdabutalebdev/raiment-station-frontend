import Link from 'next/link'
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";


const TopNav = () => {
  return (
   <section className='py-2 bg-black'>

     <div className='container mx-auto px-20 flex items-center justify-between'> 
        <div className="flex items-center gap-10 text-white">
            <Link href="#" className='font-normal text-[14px]'>
            About Us
            </Link>
            <Link href="#" className='font-normal text-[14px]'>
            Contact Us
            </Link>
        </div>
        <div className="flex items-center gap-10 text-white">
            <Link href="#" className='flex items-center gap-1 font-normal text-[14px]'>
           <FiPhone />


            01979010669
            </Link>
            <Link href="#" className='flex items-center gap-1 font-normal text-[14px]'>
            <MdOutlineEmail className='h-5 w-4'/>
             contact@raimentstation.com
            </Link>
        </div>
    </div>
   </section>
  )
}

export default TopNav