import React from 'react'
import { BiImage } from 'react-icons/bi';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs';
import { BsCalendarHeartFill } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { RiArticleLine } from 'react-icons/ri';
import { SiLinkedin } from 'react-icons/si';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsHandThumbsUpFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { PiHandsClappingBold } from 'react-icons/pi';
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import { MdReport } from 'react-icons/md';
import { BsSend } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { BiPlus } from 'react-icons/bi';


import { BsFillBoxFill } from 'react-icons/bs';
import { BsFillBookmarkFill } from 'react-icons/bs';
import Style from "./Header.module.css"
import { MdPeople } from 'react-icons/md';
import { ImUnderline } from 'react-icons/im';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { FaHashtag } from 'react-icons/fa';


function Header() {
  return <>
  <div className='flex    justify-center mt-4 gap-8 flex-wrap'>
                                          {/* section 1 */}
 
    <div>

   

    <div className='w-screen h-[345px] border rounded-2xl  sm:w-[240px]    p-1 bg-white'>
    <img class="w-18 h-18 rounded-full  m-auto mt-6  " src={"User Settings.png"} alt="Rounded avatar"/>
<h3 className='text-center font-semibold  mt-5'>Fadi Mirza</h3>
<p className='text-center   text-xs text-gray-500  mt-2'>Web Developer at Freelancer.com</p>
<hr className=' mt-4'/>
<div className='flex items-center   ml-6 justify-between  mt-3     '  >

<p className=' text-xs  text-gray-500 ' >
Connections
</p>
<p className=' text-blue-600 font-semibold mr-4' >9</p>
</div>
<p className=' text-xs font-semibold ml-6'>
Grow your network
</p>

<hr  className=' mt-4' />

<p  className=' text-xs font-semibold   mt-3 ml-5  sm:ml-6   text-gray-500'>Access exclusive tools & insights</p>
<div className='flex items-center  mt-2 ml-6'>
<BsFillBoxFill  color="#FF8C00" />
<u className=' text-xs ml-2 '>   Try Premium for free</u>
</div>

<hr className=' mt-2' />
<div className='flex items-center  mt-3 ml-6'>
<BsFillBookmarkFill  color="#808080" />
<h6 className='text-xs ml-1 font-semibold  text-gray-700'>My items</h6>
</div>

    </div>

<div className='w-screen  h-[545px]   border rounded-2xl  sm:w-[240px]  mt-4    p-1  bg-white'>
<h6 className='text-xs ml-4 mt-4'>Recent</h6>
<div className='flex text-xs items-center gap-2  mt-3'>
  <MdPeople className='ml-4'/>
  <h2 className='text-gray-500'>Artificial Intelligence, Machine Le...</h2>
</div>

<div className='flex text-xs items-center gap-2  mt-2'>
  <FaHashtag className='ml-4'/>
  <h2 className='text-gray-500'> freshgraduate</h2>
</div>
<div className='flex text-xs items-center  mt-2 gap-2'>
  <MdPeople className='ml-4'/>
  <h2 className='text-gray-500'> Google UX Design Professional...</h2>
</div>
<div className='flex text-xs items-center  mt-2 gap-2'>
  <FaHashtag className='ml-4'/>
  <h2 className='text-gray-500'> 10pearls</h2>
</div>
<div className='flex text-xs items-center mt-2  gap-2'>
  <FaHashtag className='ml-4'/>
  <h2 className='text-gray-500  '> softskills</h2>
</div>

<h6 className='text-xs ml-4 text-blue-500 font-medium   mt-6'>Groups</h6>

<div className='flex text-xs items-center gap-2   mt-3'>
  <MdPeople className='ml-4'/>
  <h2 className='text-gray-500'>Artificial Intelligence, Machine Le...</h2>
</div>
<div className='flex text-xs items-center gap-2  mt-2'>
  <MdPeople className='ml-4'/>
  <h2 className='text-gray-500'> Google UX Design Professional...</h2>
</div>

<div className='flex text-xs items-center gap-2  mt-2'>
  <MdPeople className='ml-4'/>
  <h2 className='text-gray-500'> Frontend Developer and Web...</h2>
</div>


<div className='flex text-xs items-center gap-1 ml-6 mt-2'>
  <h2 className='text-gray-500'> Show more</h2>
  <AiOutlineArrowDown className='mt-1'/>
</div>
<h6 className='text-xs ml-4 text-blue-500 font-medium   mt-8'>Events</h6>
<h6 className='text-xs ml-4 text-blue-500 font-medium mt-5 '> Followed Hashtags</h6>

<div className='flex text-xs items-center gap-2 ml-6 mt-1'>
  <FaHashtag className=''/>
  <h2 className='text-gray-500'> freshgraduate </h2>
</div>

<div className='flex text-xs  ml-2 mt-2 items-center gap-2'>
  <FaHashtag className='ml-4'/>
  <h2 className='text-gray-500'> 10pearls </h2>
</div>

<div className='flex text-xs  ml-2 mt-2 items-center gap-2'>
  <FaHashtag className='ml-4'/>
  <h2 className='text-gray-500'> softskills </h2>
</div>
<div className='flex text-xs items-center gap-1 ml-6 mt-2'>
  <h2 className='text-gray-500'> Show more</h2>
  <AiOutlineArrowDown className='mt-1'/>
</div>


<hr className='mt-8' />
<h5 className='text-center mt-2 text-sm text-gray-500'>Discover more</h5>
</div>

</div>
                                          {/* section 2 */}
                                             

 <div>





<div className='w-screen border rounded-lg sm:w-[550px]  h-32 bg-white m-auto'>
    <div className='flex justify-center gap-3 pt-4 items-center'>
    <img class="w-12 h-12 rounded-full" src={"fadii.jpg"} alt="Rounded avatar"/>


    <form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
           
        </div>
        <input type="search" id="default-search" class="block w-auto  sm:w-[450px] bg-transparent p-3 pl-10 text-sm text-gray-900  rounded-3xl focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Logos..." required/>
    </div>
</form>


</div>


<div className='flex justify-around  mt-5   text-gray-500'>
  <div className='flex items-center gap-3  '>
    <BiImage  className='h-[26px] w-[26px]'  color="#0966C2"/>
    Media
  </div>


  <div className='flex items-center gap-3'>
    <BsCalendarHeartFill  className='h-[26px] w-[26px]' color="#FF4500" />
    Event 
  </div>

  <div className='flex items-center gap-3'>
    <RiArticleLine  className='h-[26px] w-[26px]' color="#FF8C00" />
    Write Article
  </div>
</div>

  </div>


<div className='flex items-center gap-1  justify-center '>
<hr  className={Style.line} color="#0966C2" />
  <h1 className='flex  font-semibold text-xs gap-1  sm:text-sm'>
  Sort by:
Top
<AiOutlineArrowDown className='mt-1'/>
  </h1>


</div>




<div  className='w-screen border rounded-lg sm:w-[550px]  sm:h-[700px] p-1  h-auto bg-white '>

<div className='flex items-center justify-between'>


<div className='flex  gap-3 ml-2 mt-3 '>
   <img class="w-12 h-12  rounded-full  " src={"1656694594898.jpg"} alt="Rounded avatar"/>

    <div>
      <h1 className='font-semibold '>
      
CFA Institute</h1>
<h6 className='text-xs  text-gray-600'>
666,230 followers
</h6>

<h6 className='text-xs  text-gray-600'>
  Promoted
</h6>


    </div>
   </div>
<BiDotsHorizontalRounded className='mr-6 h-[30px] w-[30px]' />



   </div>
   <h1 className='text-sm text-center text-gray-600  mt-3'>
Data science is more than just learning how to organize data effectively. From data  visualization skills and machine learning to software and programming languages,
</h1>

<img className='border mt-4' src={"aaa.png"} alt="Screenshot 2023-08-29 135814.png" />
<div  className='flex mt-2  items-center justify-between gap-16 px-3'>
<div className='flex gap-3'>

<BsHandThumbsUpFill color="#6495ED	"/>
<AiFillHeart   color="#FD1C03"/>
<PiHandsClappingBold   color="#5FFB17"/>
</div>

<div className='flex gap-2 text-sm text-gray-500'>
  <h2>8</h2>
  <h2>comments</h2>
  <h2>2</h2>
  <h2>reports</h2>
</div>


</div>
<hr className='mt-2'/>


<div className='flex justify-around mt-2 '>

<div className='flex  gap-1 items-center'>
  <AiOutlineLike  className='   text-xl ' />
<h1>Like</h1>
</div>

<div className='flex  gap-1 items-center'>
  <FaRegCommentDots   className='   text-xl '/>
<h1>Comment</h1>
</div>

<div className='flex  gap-1 items-center'>
  <MdReport    className='   text-xl '  />
<h1>Report</h1>
</div>

<div className='flex gap-1 items-center'>
  <BsSend   className='   text-xl '/>
<h1>Send</h1>
</div>


</div>
</div>




<div  className='w-screen border rounded-lg sm:w-[550px]   mt-4   sm:h-[380px]  p-1  h-auto bg-white '>

<div className='flex  justify-between ml-2'>



<div className='flex items-center gap-1'>
<img class="w-6 h-6  rounded-full  " src={"1682953270202.jpg"} alt="Rounded avatar"/>
<h1 className='text-sm font-semibold'>Syed Ali</h1>
<h2  className='text-sm text-gray-600'>support this</h2>


</div>

<div className='flex ml-2 items-center'>
<BiDotsHorizontalRounded className='mr-6 h-[30px] w-[30px]' />
<ImCross className='mr-6 h-[14px] w-[14px]' />

</div>

</div>

<hr  className='mt-3'/>
<div className='flex items-center justify-between'>


<div className='flex  gap-3 ml-2 mt-3 '>
   <img class="w-12 h-12  rounded-full  " src={"1691318742852.jpg"} alt="Rounded avatar"/>

    <div>
      <h1 className='font-semibold '>
      
      Usman Raza</h1>
      <h6 className='text-xs  text-gray-600'>

     
Senior Front-End Developer | Helping Front-End Devs ... </h6>
<h6 className='text-xs  text-gray-600'>
1d.</h6>




    </div>
   </div>
   <div className='flex items-center'>
<BiPlus className='mr-1 h-[20px] w-[20px]' />
<h1 className='font-semibold text-blue-700   mr-2'>Follow</h1>
   </div> 



   </div>
   <div className='ml-6'>

   <h1 className='text-sm  text-gray-600  mt-4  sm:'>
   There is a React trick to achieve excellent performance.   </h1>

   <h1 className='text-sm  text-gray-600  mt-4'>
   It's about handling re-renders properly.   </h1>

   <h1 className='text-sm  text-gray-600  mt-4'>
   Here 3 things to know about that:   </h1>
   </div>

<div className='flex items-center justify-center mt-6 '>
<h1 className='text-base font-bold text-blue-700  cursor-pointer  '>Learn more</h1>
</div>
<hr className='mt-4' />

<div  className='flex mt-4 items-center  justify-between  px-3'>
<div className='flex gap-3 items-center text-gray-500  '>

<BsHandThumbsUpFill color="#6495ED	"/>
<AiFillHeart   color="#FD1C03"/>
<PiHandsClappingBold   color="#5FFB17"/>
<h2 className='text-xs'>
  3,104
</h2>
</div>

<div className='flex gap-1 text-sm text-gray-500'>
  <h2>38</h2>
  <h2>comments</h2>
  <h2>72</h2>
  <h2>reports</h2>
</div>


</div>
<hr className='mt-4'/>


<div className='flex justify-around mt-2 cursor-pointer'>

<div className='flex  gap-1 items-center'>
  <AiOutlineLike  className='   text-xl ' />
<h1>Like</h1>
</div>

<div className='flex  gap-1 items-center'>
  <FaRegCommentDots   className='   text-xl '/>
<h1>Comment</h1>
</div>

<div className='flex  gap-1 items-center'>
  <MdReport    className='   text-xl '  />
<h1>Report</h1>
</div>

<div className='flex gap-1 items-center'>
  <BsSend   className='   text-xl '/>
<h1>Send</h1>
</div>


</div>
</div>













<div  className='w-screen border rounded-lg sm:w-[550px]  mt-4 sm:h-[650px]  p-1  h-auto bg-white '>

<div className='flex items-center justify-between'>


<div className='flex  gap-3 ml-2 mt-3 '>
   <img class="w-12 h-12  rounded-full  " src={"1658262483121.jpg"} alt="Rounded avatar"/>

    <div>
      <h1 className='font-semibold '>
      
      LinkedIn Collective
</h1>
<h6 className='text-xs  text-gray-600'>
Promoted</h6>




    </div>
   </div>
<BiDotsHorizontalRounded className='mr-6 h-[30px] w-[30px]' />



   </div>
   <h1 className='text-sm text-center text-gray-600  mt-1'>
   Interest in generative AI is soaring with 75% of B2B marketing leaders planning to <br/> use it. See why these leaders  AI boosts efficiency, content creation...? see more</h1>

<img className='border mt-4 ' src={"frew.png"} alt="frew.png" />
<div  className='flex mt-3 items-center  justify-between  px-3'>
<div className='flex gap-3 items-center text-gray-500  '>

<BsHandThumbsUpFill color="#6495ED	"/>
<AiFillHeart   color="#FD1C03"/>
<PiHandsClappingBold   color="#5FFB17"/>
<h2 className='text-xs'>
  3,104
</h2>
</div>

<div className='flex gap-1 text-sm text-gray-500'>
  <h2>38</h2>
  <h2>comments</h2>
  <h2>72</h2>
  <h2>reports</h2>
</div>


</div>
<hr className='mt-4'/>


<div className='flex justify-around mt-1 cursor-pointer'>

<div className='flex  gap-1 items-center'>
  <AiOutlineLike  className='   text-xl ' />
<h1>Like</h1>
</div>

<div className='flex  gap-1 items-center'>
  <FaRegCommentDots   className='   text-xl '/>
<h1>Comment</h1>
</div>

<div className='flex  gap-1 items-center'>
  <MdReport    className='   text-xl '  />
<h1>Report</h1>
</div>

<div className='flex gap-1 items-center'>
  <BsSend   className='   text-xl '/>
<h1>Send</h1>
</div>


</div>
</div>




<div  className='w-screen border rounded-lg sm:w-[550px]    mt-4 sm:h-[490px] p-1  h-auto bg-white '>

<div className='flex items-center justify-between'>


<div className='flex  gap-3 ml-2 mt-3 '>
   <img class="w-12 h-12  rounded-full  " src={"1688756366233.jpg"} alt="Rounded avatar"/>

    <div>
      <h1 className='font-semibold '>
      


Frontend Developer and Web Developers
</h1>
<h6 className='text-xs  text-gray-600'>
Shehyar Khan . 3rd+</h6>

<h6 className='text-xs  text-gray-600'>
  48m. 
</h6>


    </div>
   </div>
<BiDotsHorizontalRounded className='mr-6 h-[30px] w-[30px]' />



   </div>
   <h1 className='text-sm text-start ml-4 text-gray-600  mt-3'>
🚀 𝐂𝐚𝐥𝐥𝐢𝐧𝐠 𝐚𝐥𝐥 𝐰𝐞𝐛 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬! 
</h1>
<hr className='mt-4'/>
<h1 className='text-base font-semibold text-center text-black mt-3'>
Favorite Programming Language for Web Development?

</h1>
<h1 className='text-sm text-center text-gray-600  mt-3'>
The author can see how you vote. <span className='text-blue-600'> Learn more</span>
</h1>
<div className='flex justify-center gap-4 flex-wrap'>


        
<button className='w-72 text-center  mt-3 border border-blue-500 text-lg font-bold text-blue-500 font-serif  hover:bg-blue-300 hover:border-2 sm:w-[450px]    rounded-3xl'>JavaScript</button> 
<button className='w-72 text-center  border border-blue-500 text-lg font-bold text-blue-500 font-serif  hover:bg-blue-300 hover:border-2 sm:w-[450px]    rounded-3xl'>C++</button> 
<button className='w-72 text-center  border border-blue-500 text-lg font-bold text-blue-500 font-serif  hover:bg-blue-300 hover:border-2 sm:w-[450px]    rounded-3xl'>Laravel</button> 
<button className='w-72 text-center  border border-blue-500 text-lg font-bold text-blue-500 font-serif  hover:bg-blue-300 hover:border-2 sm:w-[450px]    rounded-3xl'>PHP</button> 

</div>

<h1  className='mt-4 text-sm text-gray-600 ml-4'>26 votes • 2w left</h1>

<div  className='flex mt-1  items-center justify-between gap-16 px-3'>
<div className='flex gap-1 items-center'>

<BsHandThumbsUpFill color="#6495ED	"/>
<h1 className='text-gray-600 text-sm'>9</h1>
</div>

<div className='flex gap-2 text-sm text-gray-500'>
  <h2>8</h2>
  <h2>comments</h2>
  <h2>2</h2>
  <h2>reports</h2>
</div>


</div>
<hr className='mt-2'/>


<div className='flex justify-around mt-3 '>

<div className='flex  gap-1 items-center'>
  <AiOutlineLike  className='  h-[20px] w-[20px] ' />
<h1>Like</h1>
</div>

<div className='flex  gap-1 items-center'>
  <FaRegCommentDots   className='  h-[20px] w-[20px] '/>
<h1>Comment</h1>
</div>

<div className='flex  gap-1 items-center'>
  <MdReport    className='  h-[20px] w-[20px] '  />
<h1>Report</h1>
</div>

<div className='flex gap-1 items-center'>
  <BsSend   className='  h-[20px] w-[20px] '/>
<h1>Send</h1>
</div>


</div>
</div>




<div  className='w-screen border rounded-lg sm:w-[550px]   mt-4   sm:h-[660px]  p-1  h-[600px] bg-white '>

<div className='flex items-center justify-between'>


<div className='flex  gap-3 ml-2 mt-3 '>
   <img class="w-12 h-12  rounded-full  " src={"1654922879653.jpg"} alt="Rounded avatar"/>

    <div>
      <h1 className='font-semibold '>
      
      COBOD International</h1>
      <h6 className='text-xs  text-gray-600'>
666,230 followers
</h6>
<h6 className='text-xs  text-gray-600'>
Promoted</h6>




    </div>
   </div>
<BiDotsHorizontalRounded className='mr-6 h-[30px] w-[30px]' />



   </div>
   <h1 className='text-sm text-center text-gray-600  mt-1'>
   UNLEASH THE POTENTIAL OF 3D CONSTRUCTION PRINTING 
   </h1>
<img className='   w-[400px]  rounded-lg  sm:w-[550px]  sm:h-[400px] p-1  h-[320px]  ' src={"MicrosoftTeams-image161png.jpg"} alt="frew.png" />

<div className='bg-blue-200 rounded-xl text-left '>
  <h1 className=' text-sm text-gray-600 ml-4'>
  657 submissions
  </h1>
  <h1 className='text-sm font-semibold ml-4'>
  Unleash the potential of 3DCP!
  </h1>
</div>

<div className='flex items-center justify-center gap-2 mt-2 '>
<BsHandThumbsUpFill color="#6495ED	"/>
<h1 className='text-base font-semibold   '>Sign Up</h1>
</div>
<hr className='mt-2' />
<div  className='flex mt-4 items-center  justify-between  px-3'>
<div className='flex gap-3 items-center text-gray-500  '>

<BsHandThumbsUpFill color="#6495ED	"/>
<AiFillHeart   color="#FD1C03"/>
<PiHandsClappingBold   color="#5FFB17"/>
<h2 className='text-xs'>
  3,104
</h2>
</div>

<div className='flex gap-1 text-sm text-gray-500'>
  <h2>38</h2>
  <h2>comments</h2>
  <h2>72</h2>
  <h2>reports</h2>
</div>


</div>
<hr className='mt-4'/>


<div className='flex justify-around mt-1 cursor-pointer'>

<div className='flex  gap-1 items-center'>
  <AiOutlineLike  className='  text-xl  ' />
<h1>Like</h1>
</div>

<div className='flex  gap-1 items-center'>
  <FaRegCommentDots   className='  text-xl  '/>
<h1>Comment</h1>
</div>

<div className='flex  gap-1 items-center'>
  <MdReport    className='  text-xl  '  />
<h1>Report</h1>
</div>

<div className='flex gap-1 items-center'>
  <BsSend   className='  text-xl  '/>
<h1>Send</h1>
</div>


</div>
</div>

















 </div>

                                          {/* section 3 */}






<div>




<div className='w-screen h-[355px] border rounded-2xl  sm:w-[280px]  p-1 bg-white'>
   <div className='flex font-semibold  items-center justify-around gap-16'>
    <h1>Add to your feed</h1>
    <AiFillQuestionCircle/>
   </div>


   <div className='flex ml-8 sm:ml-2     gap-3 mt-4  '>
   <img class="w-14 h-14  rounded-full  " src={"logo (2).jpg"} alt="Rounded avatar"/>

    <div>
      <h1 className='font-semibold'>
Fresh Jobs In Pakistan</h1>
<h6 className='text-xs'>
Company • Human Resources
</h6>
<button className='border w-28 h-8 flex items-center justify-center mt-2 gap-2 rounded-full'>
 <BsPlusLg/> Follow
</button>
    </div>
   </div>


   <div className='flex  gap-3  ml-8 sm:ml-2 mt-3 '>
   <img class="w-14 h-14  rounded-full  " src={"logo (1).jpg"} alt="Rounded avatar"/>

    <div>
      <h1 className='font-semibold'>
      Job Finders</h1>
<h6 className='text-xs'>
Company • Human Resources
</h6>
<button className='border w-28 h-8 flex items-center justify-center mt-2 gap-2 rounded-full'>
 <BsPlusLg/> Follow
</button>
    </div>
   </div>

   <div className='flex   gap-3  ml-8 sm:ml-2 mt-3 '>
   <img class="w-14 h-14  rounded-full  " src={"logo (3).jpg"} alt="Rounded avatar"/>

    <div>
      <h1 className='font-semibold'>
      ibex. Pakistan</h1>
<h6 className='text-xs'>
Company • Outsourcing/Offshoring
</h6>
<button className='border w-28 h-8 flex items-center justify-center mt-2 gap-2 rounded-full'>
 <BsPlusLg/> Follow
</button>
    </div>
   </div>


<h1 className='flex items-center text-sm text-gray-600  ml-8 sm:ml-2 mt-4'>View all recommendations <AiOutlineArrowRight/> </h1>
</div>

  <img   className='  sm: h-[255px] border rounded-2xl m-auto sm:w-[280px]    mt-4    bg-white  '   src={"aa.png"} alt="" />



  <div className=' w-auto h-[255px]  flex-col font-semibold rounded-2xl text-sm text-gray-600 text-center  sm:w-[280px] '>

<h1 className='mt-4 '>&nbsp;&nbsp;&nbsp;
About &nbsp;&nbsp;&nbsp;
Accessibility&nbsp;&nbsp;&nbsp;&nbsp;
Help Center
</h1>

<h1  className='mt-2 '>
Privacy & Terms  &nbsp;&nbsp;&nbsp;
Ad Choices
</h1>
<h1  className='mt-2 '>
Advertising&nbsp;&nbsp;&nbsp;

Business Services &nbsp;&nbsp;

</h1>
<h1 className='mt-2 '>
Get the LinkedIn app&nbsp;&nbsp;&nbsp;
More
</h1>

<div className='flex gap-4 mt-3 justify-center'>
<div className='text-blue-600 ml-4 flex items-center'>
Linked&nbsp;
<SiLinkedin className=''/>
  
</div>
<div className='text-sm '>
LinkedIn Corporation © 2023
</div>

</div>

</div>

</div> 

</div>
  </>
}


export default Header



