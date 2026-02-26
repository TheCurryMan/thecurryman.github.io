"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import {
  experience,
  awards,
  education,
  skills,
  projects,
  contactInfo,
} from "../../constants/resume";

// Helper to bold text in parentheses
function formatBullet(text: string): React.ReactNode {
  const parts = text.split(/(\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("(") && part.endsWith(")")) {
      return (
        <strong key={i} className="font-semibold">
          {part}
        </strong>
      );
    }
    return part;
  });
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-gray-300 pb-0.5 mb-2">
      <h2 className="text-[#2196F3] font-bold text-xs uppercase tracking-wide">
        {children}
      </h2>
    </div>
  );
}

export default function ResumePage() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Avinash-Jain-Resume",
    fonts: [
      {
        family: "Lato",
        source: "https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjx4wXg.woff2",
        weight: "400",
      },
      {
        family: "Lato",
        source: "https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVSwiPGQ.woff2",
        weight: "700",
      },
    ],
  });

  return (
    <div className="min-h-screen bg-gray-100 py-8 print:bg-white print:py-0 print:min-h-0">
      {/* Export Button */}
      <div className="max-w-[850px] mx-auto px-4 mb-4 print:hidden">
        <button
          onClick={() => handlePrint()}
          className="bg-[#2196F3] text-white px-4 py-2 rounded-md hover:bg-[#1976D2] transition-colors flex items-center gap-2 text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Export as PDF
        </button>
      </div>

      {/* Resume Container */}
      <div
        ref={resumeRef}
        className="max-w-[850px] mx-auto bg-white shadow-lg print:shadow-none print:max-w-none print:m-0 font-lato"
        style={{ fontSize: "11px", fontFamily: "'Lato', sans-serif" }}
      >
        {/* Header */}
        <div className="px-6 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide text-black">
            AVINASH K. JAIN
          </h1>
          <div className="flex flex-wrap gap-4 text-xs text-black">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-1 hover:underline"
            >
              <span>✉</span> {contactInfo.email}
            </a>
            <a
              href={`https://${contactInfo.website}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <span>⊕</span> {contactInfo.website}
            </a>
            <a
              href={`https://${contactInfo.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <span className="font-bold">in</span> {contactInfo.linkedin}
            </a>
          </div>
        </div>

        {/* Main Content - Single Column */}
        <div className="px-6 pb-4">
          {/* Education Section */}
          <SectionHeader>EDUCATION</SectionHeader>
          <div className="mb-4">
            <div className="flex justify-between items-start">
              <div className="font-bold text-gray-900 text-xs">
                {education.school}
              </div>
              <div className="text-gray-600 text-[10px] whitespace-nowrap ml-2">
                {education.duration}
              </div>
            </div>
            <div className="text-gray-700 text-[10px]">
              {education.major} · {education.honors} · {education.gpa}
            </div>
          </div>

          {/* Experience Section */}
          <SectionHeader>EXPERIENCE</SectionHeader>
          <div className="space-y-2.5 mb-4">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-start">
                  <div className="font-bold text-gray-900 text-xs">
                    {exp.link ? (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                    <span className="font-normal text-[#2196F3] ml-1">
                      {exp.role}
                    </span>
                  </div>
                  <div className="text-gray-600 text-[10px] whitespace-nowrap ml-2">
                    {exp.duration}
                  </div>
                </div>
                <ul className="list-disc list-outside ml-3 text-gray-700 text-[10px] leading-tight mt-0.5 space-y-0.5">
                  {exp.bullets.map((bullet, bIndex) => (
                    <li key={bIndex}>{formatBullet(bullet)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects Section */}
          <SectionHeader>PROJECTS</SectionHeader>
          <div className="space-y-2 mb-4">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="flex justify-between items-start">
                  <div className="font-bold text-gray-900 text-xs">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        {project.name}
                      </a>
                    ) : (
                      project.name
                    )}
                    {project.award && (
                      <span className="font-normal text-[#2196F3] ml-1 text-[10px]">
                        — {project.award}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="list-disc list-outside ml-3 text-gray-700 text-[10px] leading-tight space-y-0.5">
                  {project.bullets.map((bullet, bIndex) => (
                    <li key={bIndex}>{formatBullet(bullet)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Awards Section */}
          <SectionHeader>AWARDS</SectionHeader>
          <div className="text-[10px] text-gray-700 mb-4">
            {awards.map((award, index) => (
              <span key={index}>
                <span className="font-semibold">{award.name}</span>
                <span className="text-gray-500"> ({award.organization})</span>
                {index < awards.length - 1 && " · "}
              </span>
            ))}
          </div>

          {/* Skills Section */}
          <SectionHeader>SKILLS / PACKAGES / PLATFORMS</SectionHeader>
          <div className="text-[10px] text-gray-700">
            {[...skills.softwareDevelopment, ...skills.platforms, ...skills.tools].join(" · ")}
          </div>
        </div>
      </div>
    </div>
  );
}
