import { ImLinkedin } from 'react-icons/im';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdWork } from 'react-icons/md';
import { IoMdNotifications } from 'react-icons/io';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { BiSolidMessage } from 'react-icons/bi';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { ImSearch } from 'react-icons/im';


function Navbar() {
    return <>
        <div className='bg-white w-full sm:max-w-full    h-16 flex items-center text-sm text-gray-600 justify-center    '>
            <div className='flex items-center '>
                <ImLinkedin className=' w-8 h-8 mr-2 sm:mr-2   ' color="#0966C2" />
                <form>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex   items-center pl-3 pointer-events-none">
<ImSearch className='w-6 h-4'/>
                        </div>
                        <input type="search" id="default-search" class="block w-60  sm:w-[280px] bg-slate-100 border-none pl-10 text-sm text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search " required />
                    </div>
                </form>
            </div>

            <div className='flex  space-x-1   sm:space-x-8  ml-0  sm:ml-16   '   >
                <div className='       flex-col items-center md:inline-flex lg:hidden'>
                    <AiOutlineSearch className='h-[26px] w-[26px]    hover:text-black  sm:block hidden  ' />
                    <h3 className='hidden md:inline-flex'>Search</h3>
                </div>

                <div className='flex flex-col items-center'>
                    <AiFillHome className='h-[26px] w-[26px]      sm:block hidden ' color="#000000" />
                    <h3 className='hidden md:inline-flex' color="#000000">Home</h3>
                </div>

                <div className='flex flex-col items-center hover:text-black'>
                    <BsFillPeopleFill className='h-[26px] w-[26px]     sm:block hidden ' />
                    <h3 className='hidden md:inline-flex'>Network</h3>
                </div>


                <div className='flex flex-col items-center hover:text-black'>
                    <MdWork className='h-[26px] w-[26px]    sm:block hidden ' />
                    <h3 className='hidden md:inline-flex'>Jobs</h3>
                </div>

                <div className='flex flex-col items-center hover:text-black'>
                    <BiSolidMessage className='h-[26px] w-[26px]' />
                    <h3 className='hidden md:inline-flex'>Message</h3>
                </div>

                <div className='flex flex-col items-center hover:text-black'>
                    <IoMdNotifications className='h-[26px] w-[26px]    sm:block hidden ' />
                    <h3 className='hidden md:inline-flex'>Notification</h3>
                </div>

                <div className='flex flex-col items-center hover:text-black'>
                    <img src={"fadii.jpg"} alt="" className='h-[26px]  w-[26px]  sm:block hidden    rounded-full ' />

                    <h3 className='hidden items-center  md:inline-flex '>ME
                        <AiOutlineArrowDown className=' sm:block hidden ' />
                    </h3>
                </div>

                <div className='flex flex-col items-center hover:text-black'>
                    <BsFillGrid3X3GapFill className='h-[26px] w-[26px]    sm:block hidden ' />
                    <h3 className='hidden items-center  md:inline-flex'>For Bussines
                        <AiOutlineArrowDown className='mt-1   sm:block hidden ' />

                    </h3>
                </div>


            </div>
        </div>
    </>

}

export default Navbar;
