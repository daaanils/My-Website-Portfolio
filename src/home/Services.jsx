import React from 'react';

function Services() {
    return (
        <div>

            <div className="w-full max-w-[634px] -z-10 h-[494px] bg-gradient-to-br absolute top-[741px] -translate-x-1/2 left-1/2  from-blue-500 to-fuchsia-500 rounded-full blur-[123px] opacity-[26%]"></div>
            <section id="services" className="max-w-[1160px] w-full mx-auto mt-24 flex flex-col gap-6 px-[24px] xl:px-0">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="text-white text-5xl lg:text-[56px] font-bold text-center leading-[1] ">What I Offer</h1>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <p className="w-full max-w-[793px] text-center text-white text-base font-normal mx-auto leading-[1.5]">
                    As a front-end developer, I excel in responsive web design, performance optimization, modern UI development, and accessibility integration for inclusive and seamless digital experiences.
                    </p>
                </div>
                <div className="grid md:grid-cols2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[19px]">
                    <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000"
                        className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                        <div className="flex items-center gap-3 ">
                            <div className="w-[52px] h-[52px] bg-[#46025e] flex justify-center items-center rounded-full">
                                <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.75 3.64662L22 8.53455L16.75 13.4225M6.25 13.4225L1 8.53455L6.25 3.64662M13.75 0.853516L9.25 16.2156" stroke="#FF17E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p className="text-white font-bold">Responsive <br />Web Design</p>
                        </div>
                        <p className="text-[#C1C1C1] w-full">
                              Delivering seamless and visually stunning user interfaces across devices through responsive web design. Ensuring an optimal viewing and interaction experience for users, whether on desktops, tablets, or smartphones.
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000"
                        className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                        <div className="flex items-center gap-3 ">
                            <div className="w-[52px] h-[52px] bg-[#46025e] flex justify-center items-center rounded-full">
                                <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.75 3.64662L22 8.53455L16.75 13.4225M6.25 13.4225L1 8.53455L6.25 3.64662M13.75 0.853516L9.25 16.2156" stroke="#FF17E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p className="text-white font-bold">Performance<br />Optimization</p>
                        </div>
                        <p className="text-[#C1C1C1] w-full">
                             Enhancing website speed and performance to provide users with a swift and efficient browsing experience. Implementing best practices such as code splitting, image optimization, and lazy loading to minimize load times and improve overall site performance.
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                        <div className="flex items-center gap-3 ">
                            <div className="w-[52px] h-[52px] bg-[#46025e] flex justify-center items-center rounded-full">
                                <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.75 3.64662L22 8.53455L16.75 13.4225M6.25 13.4225L1 8.53455L6.25 3.64662M13.75 0.853516L9.25 16.2156" stroke="#FF17E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p className="text-white font-bold">UI<br />Development</p>
                        </div>
                        <p className="text-[#C1C1C1] w-full">
                           Crafting intuitive and visually appealing user interfaces that align with the brand identity and engage users. Employing the latest front-end technologies, such as <span className="font-bold"> React </span>and<span className="font-bold"> Tailwind CSS</span> to create dynamic and interactive UI components that elevate the overall user experience.
                        </p>
                    </div>
               
                </div>
            </section>

        </div>
    );
}

export default Services;