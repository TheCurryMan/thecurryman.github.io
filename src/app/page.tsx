"use client";

import Link from 'next/link';
import { ExperienceMini } from "../components/experience";
import { allProjects } from '../constants/projects';

export default function Home() {
  var until = "2024-08-03";
  var weekNames = ["", "M", "", "W", "", "F", ""];
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
  var panelColors = [
    "#DDD",
    "#9be9a8",
    "#30c463",
    "#30a14e",
    "#216e39",
    "#d4af37",
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto antialiased">
        <div className="max-w-2xl mx-auto p-4 pt-16">
          <img
            alt="profile picture"
            src="/static/images/avi_cover_2.png"
            className="w-full object-cover object-[50%_60%] rounded-lg"
          />
        </div>
        <div className=" border-b">
          <div className="max-w-2xl mx-auto p-4 ">
            <div className="">
              <h1 className="font-serif text-black font-normal text-3xl ">Avinash Jain</h1>
              <div className="prose mt-4">
                <p className=" text-gray-700">
                  Hey there! I&apos;m Avi. I live in SF and I&apos;m currently exploring what&apos;s
                  next.
                </p>
                <p className=" text-gray-700">
                  I previously was a founding eng at Quanta, an AI-enabled accounting firm. I helped
                  build the foundational infrastructure to process hundreds of thousands of monthly
                  transactions. I joke that I could get my junior CPA license.
                </p>
                <p className=" text-gray-700">
                  I also love to teach. I&apos;ve taught over a million students on Udemy how to
                  code through various programming courses. I&apos;ve spun up my own YouTube channel
                  and built my own project-based platform. You can find me teaching in Chinese,
                  Portuguese, Korean and Hindi to rave reviews ;)
                </p>
              </div>

              <div className="flex gap-4 leading-6 mt-8">
                <Link href="/projects" className="text-gray-700 underline">
                  Projects
                </Link>
                <Link href="/photos" className="text-gray-700 underline">
                  Photos
                </Link>
                <Link href="/writings" className="text-gray-700 underline">
                  Writings
                </Link>
              </div>

              <div className="text-md mt-8">
                <div className="flex">
                  <span className="text-gray-500">Twitter</span>
                  <hr className="w-full mt-3 mx-4 border-gray-300" />
                  <a
                    href="https://twitter.com/avinashj_"
                    target="_blank"
                    rel="noreferer"
                    className="text-gray-700 underline"
                  >
                    @avinashj1
                  </a>
                </div>
                <div className="flex">
                  <span className="text-gray-500">GitHub</span>
                  <hr className="w-full mt-3 mx-4 border-gray-300" />
                  <a
                    href="https://github.com/TheCurryMan"
                    target="_blank"
                    rel="noreferer"
                    className="text-gray-700 underline"
                  >
                    @TheCurryMan
                  </a>
                </div>
                <div className="flex">
                  <span className="text-gray-500">Email</span>
                  <hr className="w-full mt-3 mx-4 border-gray-300" />
                  <a
                    href="mailto:avinashj@berkeley.edu"
                    target="_blank"
                    rel="noreferer"
                    className="text-gray-700 underline"
                  >
                    avinashj@berkeley.edu
                  </a>
                </div>
              </div>
              <h4 className="my-4 font-normal text-xs text-gray-500">
                Last updated: Feb 26th, 2026
              </h4>
            </div>
          </div>
          <div className="max-w-2xl mx-auto p-4 mb-10">
            <article className="prose prose-pre:bg-gray-100 prose-pre:text-gray-700 prose-h1:text-2xl prose-h1:font-normal prose-h1:font-serif prose-h2:text-xl prose-h2:font-normal prose-h2:font-serif prose-h3:font-normal prose-h3:font-serif prose-h3:text-lg">
              <h1 className="mb-1">Past Experience</h1>
              <div className="text-sm text-gray-500 mb-6">
                Eat. Code. <s>Sleep.</s> Repeat.
              </div>
              <div className="flex flex-col gap-4 leading-6">
                <ExperienceMini
                  companyName="Quanta"
                  role="founding engineer · AI-enabled accounting platform"
                  stats="built the company 0 -> 1, processed $1B+ in volume"
                  link="https://www.usequanta.com/"
                />
                <ExperienceMini
                  companyName="Cardinal"
                  role="co-founder · NFT infrastucture on Solana"
                  stats="6m+ transactions, 40k mau"
                  link="https://www.cardinal.so/"
                />
                <ExperienceMini
                  companyName="Blend"
                  role="PM · innovation research in homebuying journey"
                />
                <ExperienceMini
                  companyName="TigerTalk"
                  role="co-founder · AI communication coaching platform"
                  stats="30k beta revenue, 2.5k speeches analyzed"
                  link="https://www.tigertalk.io/"
                />
                <ExperienceMini
                  companyName="Cal Hacks"
                  role="executive director · led world's largest collegiate hackathon"
                  link="https://www.calhacks.io/"
                />
                <ExperienceMini companyName="Amazon" role="SWE · backend algos for the ads team" />
                <ExperienceMini
                  companyName="Apple"
                  role="SWE · iOS features for Apple News"
                  stats="champion of the ping pong table"
                />
              </div>
              <hr className="my-6" />
              <h1 className="mb-1">Projects</h1>
              <div className="text-sm text-gray-500 mb-2">
                Code. Build. Hack. It&apos;s time to hack.
              </div>
              <div>
                {allProjects.map((project) => (
                  <div key={project.title} className="inline-block">
                    <div className="flex flex-col">
                      <a href={project.links[0].link} target="_blank" rel="noreferer">
                        {project.logo ? (
                          <img
                            alt={project.title}
                            className="w-20 h-20 mr-4 mb-0 rounded-md"
                            src={project.logo}
                          />
                        ) : (
                          <div className="w-20 h-20 mr-4 mb-0 rounded-md bg-gray-200" />
                        )}
                      </a>
                      <p className="text-sm mt-2 mb-0">{project.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="my-6" />
              <h1 className="mb-1">Teaching</h1>
              <div className="text-sm text-gray-500 mb-6">
                &quot;Hey guys, Avinash here. Welcome back!&quot;
              </div>
              <div className="flex flex-col gap-4 leading-6">
                <ExperienceMini
                  companyName="The Codex"
                  role="founder · programming courses and videos"
                  stats="1m+ students, 70k subscribers, 300 hours of videos"
                  link="https://www.udemy.com/user/avinashjain5/"
                />
                <ExperienceMini
                  companyName="CS 170"
                  role="ugsi · taught algorithms, led discussions, made videos"
                />
                <ExperienceMini
                  companyName="Cubstart"
                  role="instructor · iOS and web curriculum for beginners"
                />
              </div>
              {/* <hr className="my-6" />
              <div>
                <h1 className="mb-1">Readings</h1>
                <div className="text-sm text-gray-500 mb-6">
                  Blue: highly recommend
                </div>
                <div className="flex flex-col-reverse">
                  <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                    Three Body Problem
                  </ul>
                  <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                    Exhalations
                  </ul>
                  <ul className="list-item list-inside m-0">Ticket Masters</ul>
                  <ul className="list-item list-inside m-0">Range</ul>
                  <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                    Shoe Dog
                  </ul>
                  <ul className="list-item list-inside m-0">1984</ul>
                  <ul className="list-item list-inside m-0">
                    The Secret History of Food
                  </ul>
                  <ul className="list-item list-inside m-0">The Alchemist</ul>
                  <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                    Born a Crime
                  </ul>
                  <ul className="list-item list-inside m-0">
                    Old Man and the Sea
                  </ul>
                  <ul className="list-item list-inside m-0">
                    The Two Cultures
                  </ul>
                  <ul className="list-item list-inside m-0">
                    The Sun Also Rises
                  </ul>
                  <ul className="list-item list-inside m-0">
                    Hitchhiker&apos;s Guide to the Galaxy
                  </ul>
                  <ul className="list-item list-inside m-0">
                    California Burning
                  </ul>
                  <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                    Eat a Peach
                  </ul>
                  <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                    Myth of Sisyphus
                  </ul>
                  <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                    The End of the World is Just the Beginning
                  </ul>
                  <ul className="list-item list-inside m-0">The Stranger</ul>
                  <ul className="list-item list-inside m-0">
                    The Dream Machine
                  </ul>
                  <ul className="list-item list-inside m-0 ">Tao of Pooh</ul>
                  <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                    Brave New World
                  </ul>
                  <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                    The Biggest Bluff
                  </ul>
                  <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                    Crime and Punishment
                  </ul>
                  <ul className="list-item list-inside m-0">
                    The Utopia of Rules
                  </ul>
                  <ul className="list-item list-inside m-0">
                    The Death of Ivan Ilyich
                  </ul>
                  <ul className="list-item list-inside m-0">
                    The Tale of Two Cities
                  </ul>
                  <ul className="list-item list-inside m-0">
                    Debt: The First 5,000 years
                  </ul>
                  <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                    When Breath Becomes Air
                  </ul>
                  <ul className="list-item list-inside m-0">
                    Someone Who Will Love You in All Your Damaged Glory
                  </ul>
                  <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                    The Dark Forest
                  </ul>
                  <ul className="list-item list-inside m-0">
                    Death&apos;s End
                  </ul>
                  <ul className="list-item list-inside m-0 text-blue-500 font-semibold">
                    Zen and the Art of Motorcycle Maintenance
                  </ul>
                  <ul className="list-item list-inside m-0">Stay True*</ul>
                </div>
              </div>

              <hr className="my-6" />
              <h1 className="mb-1">Running</h1>
              <div className="text-sm text-gray-500 mb-6">
                2024 mileage: 452 mi ·{" "}
                <span className="text-[#d4af37] font-semibold">
                  half marathon
                </span>{" "}
                pr: 1:37:35
              </div>
              <div className="bg-gray-100 p-4 rounded-xl flex flex-col gap-2">
                <GitHubCalendar
                  values={runningValues}
                  until={until}
                  weekNames={weekNames}
                  monthNames={monthNames}
                  weekLabelAttributes={undefined}
                  monthLabelAttributes={undefined}
                  panelAttributes={undefined}
                  panelColors={panelColors}
                />
              </div>
              <hr className="my-6" />
              <h1 className="mb-1">Lifting</h1>
              <div className="text-sm text-gray-500 mb-6">
                75 hard completed · 1000 lb club progress: 62%
              </div>
              <div className="bg-gray-100 p-4 rounded-xl flex flex-col gap-2">
                <GitHubCalendar
                  values={workoutValues}
                  until={until}
                  weekNames={weekNames}
                  monthNames={monthNames}
                  weekLabelAttributes={undefined}
                  monthLabelAttributes={undefined}
                  panelAttributes={undefined}
                  panelColors={panelColors}
                />
              </div>
              <hr className="my-6" /> */}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
