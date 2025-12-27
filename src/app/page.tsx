"use client";

import GitHubCalendar from "react-github-contribution-calendar";
import { ExperienceMini } from "../components/experience";
import { allProjects } from "../constants/projects";
import { runningValues } from "../constants/running";
import { workoutValues } from "../constants/workout";

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
        <img
          alt="profile picture"
          src="/static/images/avi_cover.jpg"
          className="w-full h-[300px] mx-auto object-cover object-[50%_60%]"
        />
        <div className=" border-b sm:pt-16">
          <div className="max-w-2xl mx-auto p-4 ">
            <div className="">
              <h1 className="font-serif text-black font-normal text-3xl ">
                John
              </h1>
              <div className="prose mt-4">
                <p className=" text-gray-700">
                  Hey there! I&apos;m Avi. I live in SF and I&apos;m an early
                  engineer at{" "}
                  <a target="_blank" href="https://www.usequanta.com/">
                    <u>Quanta</u>
                  </a>
                  , a Series A startup backed by Accel. We&apos;re a team of
                  16, building the fastest accounting service for 70+ software
                  companies. We have a simple principle:{" "}
                </p>
                <div></div>
                <blockquote className="text-gray-700 not-italic font-normal mb-1">
                  To answer any financial question or insight about your
                  business, you need real-time, high quality data. Doing the
                  accounting is the only way to get that data.
                </blockquote>
                <p className="text-gray-700">
                  We&apos;re building the best source of financial data for your
                  company. And we&apos;re closing your books faster and more
                  accurately than any other tool or human. If you&apos;re
                  interested in joining us,{" "}
                  <a href="https://www.usequanta.com/careers" target="_blank">
                    we&apos;re hiring!
                  </a>
                </p>
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
                Last updated: Dec 1st, 2025
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
                <ExperienceMini
                  companyName="Amazon"
                  role="SWE · backend algos for the ads team"
                />
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
                      <a
                        href={project.links[0].link}
                        target="_blank"
                        rel="noreferer"
                      >
                        <img
                          alt={project.title}
                          className="w-20 h-20 mr-4 mb-0 rounded-md"
                          src={project.logo}
                        />
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
