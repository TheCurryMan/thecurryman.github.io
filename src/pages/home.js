import { allProjects } from "./projects";
import ShowMoreText from "react-show-more-text";
import { useState } from "react";


function Home() {
    const [value, setValue] = useState(false);
    return (
        <div>
            <div className=" bg-gradient-to-r from-red-500 via-purple-500 to-blue-500  min-h-screen">
                <div className="container w-4/5 md:w-3/4 lg:w-3/4 xl:w-3/5 max-w-6xl mx-auto py-5  flex flex-col items-center justify-center h-screen">
                    <div className="bg-white rounded-lg  min-w-full px-12 py-10 lg:px-24 lg:py-20 flex ">
                        {!value ?
                            <div className="flex flex-col-reverse md:flex md:flex-row">
                                <div className="md:w-1/2 ">
                                    <div className="flex flex-col w-full">

                                        <div>
                                            <p className="text-3xl my-3 font-bold text-gray-900">Avinash Jain</p>
                                            <p className="text-xl my-2 text-gray-800">Hi there! I'm Avi, a senior at Berkeley studying Electrical Engineering and Computer Science.</p>
                                            <p className="text-xl my-2 text-gray-800">I'm on a mission to make a generational impact through the products I build.</p>
                                            <div className="grid grid-cols-4 w-1/2 mt-5">
                                                <a href='mailto:avinashj@berkeley.edu'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                    </svg>
                                                </a>
                                                <a href='https://twitter.com/avinashj_' target="_blank" rel="noopener noreferrer">
                                                    <img src='./static/images/twitter.png' className="w-5" />
                                                </a>
                                                <a href='https://github.com/TheCurryMan' target="_blank" rel="noopener noreferrer">
                                                    <img src='./static/images/github.svg' className="w-5" />
                                                </a>
                                            </div>
                                            <p onClick={() => setValue(!value)} className="text-xl mt-10 border-b-2 border-black pb-2 w-max cursor-pointer text-gray-800 hover:opacity-60">What I'm up to now.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/2 h-full">
                                    <img className='w-3/4 mx-auto my-auto ' src='./static/images/avinft2.png' />
                                </div>


                            </div>
                            : <div>
                                <p className="text-3xl my-3 font-bold text-gray-900">Now</p>
                                <ul className=" list-disc list-outside text-black">
                                    <li className="text-lg text-gray-700 my-2"> Recently got into Crypto through my manager at Blend. Exploring DeFi and NFTs on Ethereum and Solana and building <a className="text-gray-800 pb-1 border-b border-black hover:opacity-70" target='_blank' href=''>ZooKeeper</a> - an NFT portfolio manager. </li>
                                    <li className="text-lg text-gray-700 my-2"> Took up a part-time role at <a className="text-gray-800 pb-1 border-b border-black hover:opacity-70" href='https://www.pahdolabs.com/' target='_blank' >Pahdo Labs</a>, learning how to write smart contracts and integrate crypto into gaming. </li>                                    
                                    <li className="text-lg text-gray-700 my-2"> Spending a lot of time thinking about what an NFT could represent. Social investing + subscriptions as NFTs + adding utility to NFTs are top of mind.</li>
                                    <li className="text-lg text-gray-700 my-2"> Living up senior year in its truest fashion - work hard, play hard. Clueless in classes, driving golf carts for Cal Hacks.</li>
                                    <li className="text-lg text-gray-700 my-2"> Teaching CS 170 semester in-person, getting better at writing with chalk and not being absolutely clueless for the first hour at homework parties.</li>
                                </ul>
                                <p className="text-gray-500 mt-7">Last Updated: October 26th.</p>
                                <p onClick={() => setValue(!value)} className="text-xl mt-10 border-b-2 border-black pb-2 w-max cursor-pointer text-gray-800 hover:opacity-60">Home</p>
                            </div>
                        }
                    </div>
                    <div className="mt-12 mb-4 opacity-50 text-white text-3xl">
                        &darr;
                    </div>
                </div>
            </div>
            <div className="">
                <div className=" bg-gradient-to-b from-gray-100 to-gray-50 py-10">
                    <div className="container w-4/5 md:w-3/4 lg:w-1/2 mx-auto py-5">
                        <p className="text-3xl mt-5 font-bold text-gray-900">Experience</p>
                        <p className="text-2xl mt-2 mb-5 font-normal text-gray-700">Eat. Code. <s>Sleep.</s> Repeat.</p>
                        <div className="grid grid-cols-1 gap-5">
                            <div>
                                <p className="text-2xl font-bold text-gray-800">Blend</p>
                                <p className='text-lg leading-6 text-gray-700 my-1'>PM Intern | <span className="text-sm">2021</span></p>
                                <p className='text-md my-2 text-gray-700'>Mapped the customer journey in the homebuying process, led customer interviews and discovered opportunities for Blend to innovate in. Built frameworks to analyze these ideas and wrote specs on the most compelling ones.</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-000"><a className="underline hover:opacity-70" target="_blank" href='https://tigertalk.io/'>TigerTalk</a></p>
                                <p className='text-lg leading-6 text-gray-700 my-1'>CTO & Co-Founder | <span className="text-sm">2020 - 2021</span></p>
                                <p className='text-md my-2 text-gray-700'>Designed, developed and scaled an AI communication coaching startup combining human feedback with AI. Sold our platform to speech & debate teams, individual coaches and training firms. Analyzed both audio and video with coach-inputted timestamped feedback on serverless architecture. </p>
                                <p className="text-gray-700"><b>Stats:</b> $30K+ in beta revenue. 2,500+ speeches analyzed.  300+ user interviews. $1,500 MRR. </p>

                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-000"><a className="underline hover:opacity-70" target="_blank" href='https://calhacks.io/'>Cal Hacks</a></p>
                                <p className='text-lg leading-6 text-gray-700 my-1'>Executive Director, General Director | <span className="text-sm">2019 - 2021</span></p>
                                <p className='text-md my-2 text-gray-700'>Led Cal Hacks, the world's largest collegiate hackathon during the pandemic. Organized a 26-director team to launch two brand-new virtual initiatives, <a className="underline hover:opacity-70" target="_blank" href='https://hacknow.calhacks.io/'>hack:now</a> and <a className="underline hover:opacity-70" target="_blank" href='https://hackmonth.calhacks.io/'>Hack Month</a>. Formed a family, made lifelong friends.</p>
                                <p className="text-gray-700"><b>Stats:</b> [hack:now] 2,500 hackers. 90+ countries. 200+ submissions. In just 4 weeks. </p>

                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-000"><a className="underline hover:opacity-70" target="_blank" href='https://calhacks.io/cubstart'>Amazon</a></p>
                                <p className='text-lg leading-6 text-gray-700 my-1'>SDE Intern | <span className="text-sm">2020</span></p>
                                <p className='text-md my-2 text-gray-700'>Wrote back-end algorithms to automatically extrapolate insights from big data through data modelling and inference on the Amazon Ads team.</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold"><a className="underline hover:opacity-70" target="_blank" href='https://calhacks.io/cubstart'>Apple</a></p>
                                <p className='text-lg leading-6 text-gray-700 my-1'>SWE Intern | <span className="text-sm">2019</span></p>
                                <p className='text-md my-2 text-gray-700'>Contributed to the iOS team on Apple News, building features for publishers to more efficiently create content for the platform.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className=" bg-gradient-to-tr from-gray-900 to-gray-800 py-10">
                    <div className="container w-4/5 md:w-3/4 lg:w-1/2 mx-auto py-5">
                        <p className="text-3xl mt-5 font-bold text-gray-100">Teaching</p>
                        <p className="text-2xl mt-2 mb-5 font-normal text-gray-200">"Hey guys, Avi here. Welcome back to The Codex."</p>
                        <div className="grid grid-cols-1 gap-5">
                            <div>
                                <p className="text-2xl font-bold text-gray-100"><a className="underline hover:opacity-70" target='_blank' href='https://www.thecodex.me'>TheCodex</a></p>
                                <p className='text-lg leading-6 text-gray-200 my-1'>CEO & Co-Founder | <span className="text-sm">2017 - 2021</span></p>
                                <p className='text-md my-2 text-gray-200'>Taught students how to code through 15+ online courses and 20+ projects. Built a learning management system to fuel subscription based enrollments. Managed a team of 5 to scale MRR from $10 to $1,500.</p>
                                <p className="text-gray-200"><b>Stats:</b> 750K+ <a className='underline text-gray-100' target='_blank' href='https://www.udemy.com/user/avinashjain5/'>Udemy</a> students. 60K+ <a className='underline text-gray-100' target='_blank' href='https://www.youtube.com/c/thecodex'>YouTube</a> subscribers. 200+ hours of recorded content. 10K+ users.</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-100"><a className="underline hover:opacity-70" target="_blank" href='https://cs170.org/'>CS 170</a></p>
                                <p className='text-lg leading-6 text-gray-200 my-1'>Undergraduate Student Instructor | <span className="text-sm">2020 - 2021</span></p>
                                <p className='text-md my-2 text-gray-200'>Taught CS 170 - efficient algorithms and intractable problems. Launched and led The Production Company, a 12-person TA team to create weekly 170 videos.</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-100"><a className="underline hover:opacity-70" target="_blank" href='https://calhacks.io/cubstart'>Cubstart</a></p>
                                <p className='text-lg leading-6 text-gray-200 my-1'>Lead Instructor | <span className="text-sm">2019 - 2020</span></p>
                                <p className='text-md my-2 text-gray-200'>Wrote iOS curriculum for Cubstart, Cal Hacks' program for teaching beginners how to build. Led a 4-week iOS bootcamp and taught a semester-long decal.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className=" bg-gradient-to-b from-gray-100 to-purple-50 py-10">
                    <div className="container w-4/5 md:w-3/4 lg:w-1/2 mx-auto py-5">
                        <p className="text-3xl mt-5 font-bold text-gray-800">Personal Projects</p>
                        <p className="text-2xl mt-2 mb-5 font-normal text-gray-700">Code. Build. Hack. It's time to hack. </p>
                        <div className="grid grid-cols-1 gap-5 md:gap-5">
                            {allProjects.map((project) =>
                                <div className="bg-white shadow-md rounded-sm p-6">
                                    <div className="flex">
                                        <img className='w-20 h-20 mr-4 rounded-md' src={project.logo}></img>
                                        <div className="flex flex-col my-auto">
                                            <div className='flex justify-between mb-1'>
                                                <p className='text-2xl mr-2 font-semibold'>{project.title}</p>

                                            </div>
                                            <p className='text-lg leading-6 text-gray-700 my-auto'>{project.event} | <span className="text-sm">{project.year}</span></p>

                                        </div>

                                    </div>
                                    <p className='text-md my-2 text-gray-700'><i>{project.subtitle}</i></p>
                                    <div>
                                        <div className="">
                                            {project.links.map(link =>
                                                <span> <a className="text-sm inline-block pb-1 border-b border-black" href={link.link} target='_blank'>{link.title}</a> &nbsp;</span>
                                            )}
                                        </div>

                                    </div>
                                    {/* <hr className='bg-gray-800 mb-1 h-px ' /> */}


                                    {/* <div>
                                        {project.tools ? project.tools.map((tool) =>
                                            <div className="inline-block mr-2 bg-gray-200 py-0.5 px-2 mb-2 text-sm rounded-md"> {tool} </div>
                                        ) : null}
                                    </div> */}
                                    {project.awards.length > 0 ?
                                        <div>
                                            <br />
                                            <span className="rounded-md bg-green-200 px-2 py-1 mr-2 inline-block">WINNER</span>
                                            <div className="inline-block">
                                                <p className='my-1 text-gray-800 font-semibold inline-block'>
                                                    {project.awards.map((award, index) => <span>
                                                        {award}{index !== project.awards.length - 1 ? ", " : null}</span>
                                                    )}
                                                </p>
                                            </div>
                                        </div> : null}



                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
