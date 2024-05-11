import React from 'react';

function Navbar() {
    return (
        <nav className="top-0 z-24 w-full px-[24px] xl:px-0">
            <div className="flex flex-wrap items-center justify-between max-w-[1160px] w-full py-7 mx-auto">
                <div className="lg:text-[28px] text-2xl font-black text-neutral-300">Danilo Pelaso</div>
                <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                    <div className="flex justify-between items-center  gap-[13px] ">

                        <a href="https://www.tiktok.com/@danilopelaso" className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="48" viewBox="0 0 23 48">
                        <path fill="none" fill-rule="evenodd" d="M10.904,6h26.191C39.804,6,42,8.196,42,10.904v26.191 C42,39.804,39.804,42,37.096,42H10.904C8.196,42,6,39.804,6,37.096V10.904C6,8.196,8.196,6,10.904,6z" clip-rule="evenodd"></path><path fill="#ec407a" fill-rule="evenodd" d="M29.208,20.607c1.576,1.126,3.507,1.788,5.592,1.788v-4.011 c-0.395,0-0.788-0.041-1.174-0.123v3.157c-2.085,0-4.015-0.663-5.592-1.788v8.184c0,4.094-3.321,7.413-7.417,7.413 c-1.528,0-2.949-0.462-4.129-1.254c1.347,1.376,3.225,2.23,5.303,2.23c4.096,0,7.417-3.319,7.417-7.413L29.208,20.607L29.208,20.607 z M30.657,16.561c-0.805-0.879-1.334-2.016-1.449-3.273v-0.516h-1.113C28.375,14.369,29.331,15.734,30.657,16.561L30.657,16.561z M19.079,30.832c-0.45-0.59-0.693-1.311-0.692-2.053c0-1.873,1.519-3.391,3.393-3.391c0.349,0,0.696,0.053,1.029,0.159v-4.1 c-0.389-0.053-0.781-0.076-1.174-0.068v3.191c-0.333-0.106-0.68-0.159-1.03-0.159c-1.874,0-3.393,1.518-3.393,3.391 C17.213,29.127,17.972,30.274,19.079,30.832z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M28.034,19.63c1.576,1.126,3.507,1.788,5.592,1.788v-3.157 c-1.164-0.248-2.194-0.856-2.969-1.701c-1.326-0.827-2.281-2.191-2.561-3.788h-2.923v16.018c-0.007,1.867-1.523,3.379-3.393,3.379 c-1.102,0-2.081-0.525-2.701-1.338c-1.107-0.558-1.866-1.705-1.866-3.029c0-1.873,1.519-3.391,3.393-3.391 c0.359,0,0.705,0.056,1.03,0.159V21.38c-4.024,0.083-7.26,3.369-7.26,7.411c0,2.018,0.806,3.847,2.114,5.183 c1.18,0.792,2.601,1.254,4.129,1.254c4.096,0,7.417-3.319,7.417-7.413L28.034,19.63L28.034,19.63z" clip-rule="evenodd"></path><path fill="#81d4fa" fill-rule="evenodd" d="M33.626,18.262v-0.854c-1.05,0.002-2.078-0.292-2.969-0.848 C31.445,17.423,32.483,18.018,33.626,18.262z M28.095,12.772c-0.027-0.153-0.047-0.306-0.061-0.461v-0.516h-4.036v16.019 c-0.006,1.867-1.523,3.379-3.393,3.379c-0.549,0-1.067-0.13-1.526-0.362c0.62,0.813,1.599,1.338,2.701,1.338 c1.87,0,3.386-1.512,3.393-3.379V12.772H28.095z M21.635,21.38v-0.909c-0.337-0.046-0.677-0.069-1.018-0.069 c-4.097,0-7.417,3.319-7.417,7.413c0,2.567,1.305,4.829,3.288,6.159c-1.308-1.336-2.114-3.165-2.114-5.183 C14.374,24.749,17.611,21.463,21.635,21.38z" clip-rule="evenodd"></path>
</svg>
                        </a>

                        <a href="https://www.facebook.com/Danilo.https://www.facebook.com/profile.php?id=61559328655598/" className='cursor-pointer'>
                        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 0.0458984C4.02955 0.0458984 0 4.07544 0 9.0459C0 13.5582 3.32386 17.2838 7.65491 17.9346V11.4313H5.42823V9.06553H7.65491V7.49135C7.65491 4.88504 8.92473 3.74081 11.0909 3.74081C12.1283 3.74081 12.6769 3.81772 12.9367 3.8529V5.91799H11.459C10.5394 5.91799 10.2183 6.78976 10.2183 7.7724V9.06553H12.9134L12.5476 11.4313H10.2183V17.9539C14.6111 17.3578 18 13.6019 18 9.0459C18 4.07544 13.9705 0.0458984 9 0.0458984Z" fill="white" />
                        </svg>
                        </a>
                      
                      <a href="https://github.com/daaanils" className='cursor-pointer'>
                      <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 0C4.02975 0 0 4.09285 0 9.14092C0 13.4242 2.904 17.0082 6.819 18C6.777 17.8766 6.75 17.7334 6.75 17.5559V15.9936C6.38475 15.9936 5.77275 15.9936 5.619 15.9936C5.00325 15.9936 4.45575 15.7247 4.19025 15.225C3.8955 14.6697 3.8445 13.8203 3.114 13.3008C2.89725 13.1279 3.06225 12.9306 3.312 12.9573C3.77325 13.0898 4.15575 13.4113 4.51575 13.8881C4.87425 14.3657 5.043 14.4739 5.71275 14.4739C6.0375 14.4739 6.5235 14.4548 6.981 14.3817C7.227 13.7472 7.65225 13.1629 8.172 12.8872C5.175 12.5741 3.74475 11.0598 3.74475 9.00381C3.74475 8.11866 4.116 7.26246 4.74675 6.54109C4.53975 5.82505 4.2795 4.36479 4.82625 3.80872C6.17475 3.80872 6.99 4.69691 7.18575 4.93686C7.85775 4.703 8.59575 4.57046 9.37125 4.57046C10.1482 4.57046 10.8892 4.703 11.5627 4.93838C11.7562 4.69996 12.5723 3.80872 13.9237 3.80872C14.4728 4.36555 14.2095 5.83191 14.0002 6.54642C14.6272 7.26627 14.9963 8.12019 14.9963 9.00381C14.9963 11.0582 13.5682 12.5718 10.5758 12.8864C11.3993 13.3229 12 14.5493 12 15.4733V17.5559C12 17.6351 11.9827 17.6923 11.9738 17.7601C15.4808 16.5116 18 13.1294 18 9.14092C18 4.09285 13.9703 0 9 0Z" fill="white" />
                        </svg>

                      </a>

                      <a href="https://www.instagram.com/https://www.instagram.com/dannypelaso?fbclid=IwZXh0bgNhZW0CMTAAAR2nvevrEk16kBLcto7WCZzDkhfPt9KzwKIqQZ5YkDjnYZoX2krMO3EZ8TM_aem_AcpTv5xOL0QyFn8Lk3PkrOfKaDGGMWklwAeGJnlW_vJH_mvDt4u6gwUPpZPyaKRKOrXhtuuJthOVaK_T8WZPjT8H/?hl=en" className='cursor-pointer'>
                      <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.31818 0C2.385 0 0 2.385 0 5.31818V12.6818C0 15.615 2.385 18 5.31818 18H12.6818C15.615 18 18 15.615 18 12.6818V5.31818C18 2.385 15.615 0 12.6818 0H5.31818ZM13.9091 3.27273C14.3591 3.27273 14.7273 3.64091 14.7273 4.09091C14.7273 4.54091 14.3591 4.90909 13.9091 4.90909C13.4591 4.90909 13.0909 4.54091 13.0909 4.09091C13.0909 3.64091 13.4591 3.27273 13.9091 3.27273ZM9 4.5C11.4832 4.5 13.5 6.51682 13.5 9C13.5 11.4832 11.4832 13.5 9 13.5C6.51682 13.5 4.5 11.4832 4.5 9C4.5 6.51682 6.51682 4.5 9 4.5ZM9 5.31818C6.97091 5.31818 5.31818 6.97091 5.31818 9C5.31818 11.0291 6.97091 12.6818 9 12.6818C11.0291 12.6818 12.6818 11.0291 12.6818 9C12.6818 6.97091 11.0291 5.31818 9 5.31818Z" fill="white" />
                        </svg>


                      </a>
                       
                       <a href="https://twitter.com/daaanils" className='cursor-pointer'>
                            
                        <svg width="24" height="24" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 2.41764C17.3365 2.71224 16.6252 2.91004 15.8775 2.99983C16.6406 2.5425 17.227 1.81863 17.502 0.957274C16.7893 1.37953 15.9967 1.68676 15.1564 1.85229C14.483 1.13403 13.5235 0.686523 12.4615 0.686523C10.4218 0.686523 8.76783 2.33908 8.76783 4.37883C8.76783 4.66782 8.8015 4.94979 8.86462 5.22054C5.79518 5.06623 3.07505 3.59604 1.25275 1.3613C0.9343 1.90841 0.753332 2.5425 0.753332 3.21867C0.753332 4.49948 1.40426 5.63018 2.39607 6.29372C1.79004 6.27408 1.22048 6.10715 0.722469 5.83078C0.722469 5.84621 0.722469 5.86165 0.722469 5.87708C0.722469 7.66712 1.99626 9.15835 3.68389 9.49924C3.37526 9.58341 3.0484 9.6283 2.71171 9.6283C2.47323 9.6283 2.24176 9.60586 2.0159 9.56097C2.48726 11.0269 3.85083 12.0973 5.46551 12.1268C4.20295 13.1172 2.61071 13.7064 0.879588 13.7064C0.580781 13.7064 0.287585 13.6896 0 13.6545C1.63292 14.7038 3.57447 15.3141 5.66051 15.3141C12.4531 15.3141 16.1679 9.68722 16.1679 4.8081C16.1679 4.64818 16.1637 4.48685 16.1581 4.32973C16.8791 3.80927 17.5048 3.15835 18 2.41764Z" fill="white" />
                        </svg>

                       </a>
                        
                    </div>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full gap-16 md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="text-lg flex flex-col items-center w-full md:w-auto justify-center gap-4 md:gap-[30px] p-4 mt-4 font-medium md:relative md:flex-row md:mt-0 md:border-0">
                        <li className="text-center">
                            <a href="#home" className="block text-center text-white rounded md:bg-transparent">Home</a>
                        </li>
                        <li className="text-center">
                            <a href="#services" className="block text-center text-white rounded md:bg-transparent">Services</a>
                        </li>
                        <li className="text-center">
                            <a href="#portfolio" className="block text-center text-white rounded md:bg-transparent">Portfolio</a>
                        </li>
                        <li className="text-center">
                            <a href="#contact" className="block text-center text-white rounded md:bg-transparent">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;