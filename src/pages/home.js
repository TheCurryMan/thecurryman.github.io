import { allProjects } from "./projects";
import ShowMoreText from "react-show-more-text";


function Home() {
    return (
        <div>
            <div className="container w-3/4 mx-auto font-os ">
                <div className="w-1/3 ">
                    <div className="flex flex-col my-auto">
                        <p className="text-3xl my-3 font-bold">Avinash Jain</p>
                        <p className="text-xl my-2">Hi there! I'm Avi, a senior at Berkeley studying Electrical Engineering and Computer Science.</p>
                        <p className="text-xl my-2">I'm on a mission to make a generational impact through the products I build.</p>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="">
                    <div className="container w-3/4 mx-auto py-5">
                        <p className="text-3xl my-5 font-bold">Experiences</p>
                        <div className="grid grid-cols-1 gap-5">
                            <div>
                                <p className="text-2xl font-bold">TigerTalk</p>
                                <p className="text-xl">CTO & Co-Founder</p>
                            </div>
                            <div>
                                <p className="text-2xl">The Codex</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="">
                <div className=" bg-gradient-to-b from-gray-200 to-gray-100">
                    <div className="container w-4/5 md:w-3/4 lg:w-1/2 mx-auto py-5">
                        <p className="text-3xl my-5 font-bold">Teaching</p>
                        <p className="text-2xl mt-2 mb-5 font-normal text-gray-700">"Hey guys, Avi here. Welcome back to The Codex."</p>
                        <div className="grid grid-cols-1 gap-5">
                            <div>
                                <p className="text-2xl font-bold"><a className="underline hover:opacity-70" target='_blank' href='https://www.thecodex.me'>TheCodex</a></p>
                                <p className='text-lg leading-6 text-gray-700 my-1'>CEO & Co-Founder | <span className="text-sm">2017 - 2021</span></p>
                                <p className='text-md my-2 text-gray-700'>Taught students how to code through 15+ online courses and 20+ projects. Built a learning management system to fuel subscription based enrollments. Managed a team of 5 to scale MRR from $10 to $1,500.</p>
                                <p className="text-gray-700"><b>Stats:</b> 750K+ <a className='underline text-gray-800' target='_blank' href='https://www.udemy.com/user/avinashjain5/'>Udemy</a> students. 60K+ <a className='underline text-gray-800' target='_blank' href='https://www.youtube.com/c/thecodex'>YouTube</a> subscribers. 200+ hours of recorded content. 10K+ users.</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold"><a className="underline hover:opacity-70" target="_blank" href='https://cs170.org/'>CS 170</a></p>
                                <p className='text-lg leading-6 text-gray-700 my-1'>Undergraduate Student Instructor | <span className="text-sm">2020 - 2021</span></p>
                                <p className='text-md my-2 text-gray-700'>Taught CS 170 - efficient algorithms and intractable problems. Launched and led The Production Company, a 12-person TA team to create weekly 170 videos.</p>
                            </div>
                            <div>
                            <p className="text-2xl font-bold"><a className="underline hover:opacity-70" target="_blank" href='https://calhacks.io/cubstart'>Cubstart</a></p>
                                <p className='text-lg leading-6 text-gray-700 my-1'>Lead Instructor | <span className="text-sm">2019 - 2020</span></p>
                                <p className='text-md my-2 text-gray-700'>Wrote iOS curriculum for Cubstart, Cal Hacks' program for teaching beginners how to build. Led a 4-week iOS bootcamp and taught a semester-long decal.</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="">
                <div className=" bg-gradient-to-b from-gray-100 to-purple-50">
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
