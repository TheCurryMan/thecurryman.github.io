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
                        <p className="text-3xl my-5 font-bold">Startups</p>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5">
                            <div>
                                <p className="text-3xl">TigerTalk</p>
                            </div>
                            <div>
                            <p className="text-3xl">The Codex</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="">
                <div className="bg-gradient-to-r from-blue-500 to-blue-800 w-100 ">
                    <div className="container w-3/4 mx-auto py-5">
                        <p className="text-3xl my-5 font-bold text-white">Personal Projects</p>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 md:gap-5">
                            {allProjects.map((project) =>
                                <div className="bg-white shadow-md rounded-sm p-6">
                                    <div className="flex mb-3">
                                        <img className='w-20 h-20 mr-4 rounded-md' src={project.logo}></img>
                                        <div className="flex flex-col my-auto">
                                            <div className='flex justify-between mb-1'>
                                                <p className='text-2xl mr-2 font-semibold'>{project.title}</p>
                                    
                                            </div>
                                            <p className='text-lg leading-6 text-gray-700 my-auto'>{project.event}</p>
                                            <div>
                                            {project.links.map(link => 
                                            <span> <a className="text-sm inline-block pb-1 border-b border-black" href={link.link} target='_blank'>{link.title}</a> &nbsp;</span>
                                                
                                                )}
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <p className='text-md my-1 text-gray-700'><i>{project.subtitle}</i></p>
                                    {project.tools ? project.tools.map((tool) =>
                                        <div className="inline-block mr-2 bg-gray-200 py-0.5 px-2 mb-2 text-sm rounded-md"> {tool} </div>
                                    ) : null}
                                    <hr className='bg-gray-300 my-2 h-0.5 ' />

                                    <ShowMoreText more='&darr;' less='Hide' lines={1} className="text-gray-700" anchorClass="text-gray-900 float-right" truncatedEndingComponent={"... "}>
                                        <p className='font-normal text-gray-700'>{project.description}</p>
                                        {project.awards.map((award) =>
                                            <div>
                                                <p className='my-3 text-gray-800 font-semibold'><span className="rounded-md bg-green-200 px-2 py-1 mr-2">WINNER</span>{award}</p>
                                            </div>
                                        )}
                                    </ShowMoreText>

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
