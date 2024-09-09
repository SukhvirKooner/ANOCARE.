import React from 'react';
import img from '../images/web.svg'; 
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';

const Services = () => {

    return (
        <div id="campaigns" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Campaigns</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900"></h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-center text-sm">
                                <img alt="card img" className="rounded-t" src="https://t4.ftcdn.net/jpg/08/87/19/35/360_F_887193591_H13F6BBot3cm8CzUneNW2GUVPnBxtN5c.jpg" />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Doctors Without Borders</h2>
                                    <p className="text-md font-medium">
                                    Greenpeace is a global environmental organization advocating for climate action, ocean conservation, and protection of natural habitats. They use peaceful protests and campaigns to promote sustainable solutions and environmental justice.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-center text-sm">
                                <img alt="card img" className="rounded-t " src="https://img.freepik.com/free-vector/people-shape-logo-design_1025-884.jpg?semt=ais_hybrid" />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Greenpeace</h2>
                                    <p className="text-md font-medium">
                                        We develop high-quality, custom cross-platform mobile applications that are robust and optimized for performance, scalability, and accessibility.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-center text-sm">
                                    <img alt="card img" className="rounded-t " src="https://www.nicepng.com/png/detail/251-2513189_adarsh-shiksha-samiti-ngo.png" />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Oxfam</h2>
                                    <p className="text-md font-medium">
                                    Oxfam is an international NGO working to alleviate global poverty and inequality. They provide emergency relief, support sustainable development, and advocate for social justice, focusing on empowering marginalized communities worldwide.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-center text-sm">
                                <img alt="card img" className="rounded-t " src="https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/259718311_403541064795851_3883425674427729978_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=8IECGyjbpFAQ7kNvgHzRTCL&_nc_ht=scontent.fdel29-1.fna&_nc_gid=Ah2-PeJRtClasWDfSn6_96V&oh=00_AYB_itNKmlqO7RKYQehIAU9RjonomWJSTFlh6Z3SDr4dhA&oe=66E33D64https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/259718311_403541064795851_3883425674427729978_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=8IECGyjbpFAQ7kNvgHzRTCL&_nc_ht=scontent.fdel29-1.fna&_nc_gid=Ah2-PeJRtClasWDfSn6_96V&oh=00_AYB_itNKmlqO7RKYQehIAU9RjonomWJSTFlh6Z3SDr4dhA&oe=66E33D64" />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">CARE</h2>
                                    <p className="text-md font-medium">
                                    CARE is a global humanitarian organization fighting poverty and providing disaster relief. They focus on empowering women and children, promoting education, healthcare, and economic development to create lasting positive change.
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <img src="https://banner2.cleanpng.com/20180703/thy/aaxuh2hq7.webp" width="72" height="72" viewBox="0 0 24 24" className='fill-current'/>
                            </div>
                            <h3 className="text-3xl  text-blue-900 
                            font-bold"> Funds Raised <span className='font-black'>13.1K</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                Your generous contributions have made a significant impact. Here's a look at the total funds raised to support our cause.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
                            </div>
                            <h3 className="text-3xl  text-blue-900 font-bold">People Helped<span className='font-black'> 3.5K</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>Thanks to your support, we’ve been able to make a difference in the lives of many. Discover the number of people whose lives we’ve touched.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;