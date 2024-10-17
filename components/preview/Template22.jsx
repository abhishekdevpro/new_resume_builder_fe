// import React from "react";
import { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import { HighlightMenu } from "react-highlight-menu";
import ContactInfo from "./ContactInfo";
import { CgWebsite } from "react-icons/cg";
import DateRange from "../utility/DateRange";
import Language from "./Language";
import Skills from "./Skills";
import Certification from "./Certification";
// import Image from "next/image";
import Link from "next/link";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaYoutube, FaBold, FaItalic, FaPlus, FaMinus, FaAlignLeft, FaAlignCenter, FaAlignRight, FaLink,
    FaUnderline,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import dynamic from "next/dynamic";
// Importing draggable components dynamically
const DragDropContext = dynamic(() => import("react-beautiful-dnd").then((mod) => mod.DragDropContext), { ssr: false });
const Droppable = dynamic(() => import("react-beautiful-dnd").then((mod) => mod.Droppable), { ssr: false });
const Draggable = dynamic(() => import("react-beautiful-dnd").then((mod) => mod.Draggable), { ssr: false })
const Template22 = () => {
    const { resumeData, setResumeData, headerColor } = useContext(ResumeContext);
    const icons = [
        { name: "github", icon: <FaGithub /> },
        { name: "linkedin", icon: <FaLinkedin /> },
        { name: "twitter", icon: <FaTwitter /> },
        { name: "facebook", icon: <FaFacebook /> },
        { name: "instagram", icon: <FaInstagram /> },
        { name: "youtube", icon: <FaYoutube /> },
        { name: "website", icon: <CgWebsite /> },
    ];

    return (
        <div className="max-w-3xl mx-auto px-5 bg-white-500 shadow-md">
          <div class=""> 
            <div class="flex mb-5">
                <div class="ml-5 px-5">
                  <img src="img/profile_one.png"></img>
                </div>
                <div class="px-5">
                    <h1 className="text-4xl font-bold mb-2 text-blue-900" style={{ color: headerColor }}>{resumeData.name}</h1>
                    <h2 className="text-2xl font-semibold mb-2 text-black" style={{ color: headerColor }}>{resumeData.position}</h2>	

                    <div class="text-left text-black">
                        <div className="mb-8">
                          {/* <h2 className="text-xl font-bold mb-4" style={{ color: headerColor }}>CONTACT</h2> */}
                          <ContactInfo
                                mainclass=" grid   gap-4 mb-1 text-black mb-5 contact"
                                linkclass="inline-flex text-l items-center gap-2"
                                teldata={resumeData.contactInformation}
                                emaildata={resumeData.email}
                                addressdata={resumeData.address}
                                telicon={<MdPhone />}
                                emailicon={<MdEmail />}
                                addressicon={<MdLocationOn />}
                              />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-5">
              <div class="flex">
                  <h2 className="text-xl  text-blue-900	 font-bold mb-2" style={{ color: headerColor }}>ABOUT ME</h2>
                  
              </div>
              <div class="border-solid border-b-2 border-blue-900 mb-2 mt-2"></div>
              <p class="text-sm text-black	 tracking-wide	">
              {resumeData.summary}
              </p>
            </div>
            <div className="px-5">
                  <h2 className="text-xl text-blue-900 font-bold mb-4" style={{ color: headerColor }}>EXPERIENCE</h2>
                  
                  <div>
                    <h3 className="text-xl text-blue-900 font-semibold border-b-2 border-blue-900 pb-2 mb-4" style={{ color: headerColor }}>Projects</h3>
                    {resumeData.workExperience.length > 0 && (
                            <Droppable droppableId="work-experience" type="WORK_EXPERIENCE">
                              {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                
                                  {resumeData.workExperience.map((item, index) => (
                                    <Draggable
                                      key={`${item.company}-${index}`}
                                      draggableId={`WORK_EXPERIENCE-${index}`}
                                      index={index}
                                    >
                                      {(provided, snapshot) => (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          className={`mb-5 hover:scale-105 transition-transform duration-300 mb-1 ${snapshot.isDragging &&
                                            "outline-dashed outline-2 outline-blue-900 bg-white"
                                            }`}
                                        >
                                          <div className="justify-between space-y-1 flex text-black">
                                            <p className="content i-bold text-2xl text-black" style={{ fontSize: '1.3rem' }}>{item.company}</p>
                                            <DateRange
                                              startYear={item.startYear}
                                              endYear={item.endYear}
                                              id={`work-experience-start-end-date`}
                                            />
                                          </div>
                                          <p className="content text-black">{item.position}</p>
                                          <p className="content hyphens-auto text-black">
                                            {item.description}
                                          </p>
                                          <Droppable
                                            droppableId={`WORK_EXPERIENCE_KEY_ACHIEVEMENT-${index}`}
                                            type="WORK_EXPERIENCE_KEY_ACHIEVEMENT"
                                          >
                                            {(provided) => (
                                              <ul
                                                className="list-disc ul-padding content text-black"
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                              >
                                                {typeof item.keyAchievements === "string" &&
                                                  item.keyAchievements
                                                    .split("\n")
                                                    .map((achievement, subIndex) => (
                                                      <Draggable
                                                        key={`${item.company}-${index}-${subIndex}`}
                                                        draggableId={`WORK_EXPERIENCE_KEY_ACHIEVEMENT-${index}-${subIndex}`}
                                                        index={subIndex}
                                                      >
                                                        {(provided, snapshot) => (
                                                          <li
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className={`
                                                    hover:scale-105 transition-transform duration-300 hover:outline-dashed hover:outline-2 hover:outline-gray-400
                                                    ${snapshot.isDragging &&
                                                              "outline-dashed outline-2 outline-gray-400 bg-white text-black"
                                                              }`}
                                                          >
                                                            <div
                                                              dangerouslySetInnerHTML={{
                                                                __html: achievement,
                                                              }}
                                                              contentEditable
                                                            />
                                                          </li>
                                                        )}
                                                      </Draggable>
                                                    ))}
                                                {provided.placeholder}
                                              </ul>
                                            )}
                                          </Droppable>
                                        </div>
                                      )}
                                    </Draggable>
                                  ))}
                                  {provided.placeholder}
                                </div>
                              )}
                            </Droppable>
                          )}
                          {resumeData.projects.length > 0 && (
                            <Droppable droppableId="projects" type="PROJECTS">
                              {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                  <h2
                                    className="section-title mb-1 border-b-2 border-gray-300 editable text-cyan-800"
                                    contentEditable
                                    suppressContentEditableWarning
                                    style={{ color: headerColor }} >
                                    Projects
                                  </h2>
                                  {resumeData.projects.map((item, index) => (
                                    <Draggable
                                      key={`${item.name}-${index}`}
                                      draggableId={`PROJECTS-${index}`}
                                      index={index}
                                    >
                                      {(provided, snapshot) => (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          className={`hover:scale-105 transition-transform duration-300 mb-1 ${snapshot.isDragging &&
                                            "outline-dashed outline-2 outline-gray-400 bg-white text-cyan-800"
                                            }`}
                                        >
                                          <div className="flex flex-row justify-between space-y-1">
                                            <p className="content i-bold">{item.name}</p>
                                            <DateRange
                                              startYear={item.startYear}
                                              endYear={item.endYear}
                                              id={`work-experience-start-end-date`}
                                            />
                                          </div>
                                          <Link
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="content"
                                          >
                                            {item.link}
                                          </Link>
                                          <p className="content text-cyan-800">{item.description}</p>
                                          <Droppable
                                            droppableId={`PROJECTS_KEY_ACHIEVEMENT-${index}`}
                                            type="PROJECTS_KEY_ACHIEVEMENT"
                                          >
                                            {(provided) => (
                                              <ul
                                                className="list-disc ul-padding content text-cyan-800"
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                              >
                                                {typeof item.keyAchievements === "string" &&
                                                  item.keyAchievements
                                                    .split("\n")
                                                    .map((achievement, subIndex) => (
                                                      <Draggable
                                                        key={`${item.name}-${index}-${subIndex}`}
                                                        draggableId={`PROJECTS_KEY_ACHIEVEMENT-${index}-${subIndex}`}
                                                        index={subIndex}
                                                      >
                                                        {(provided, snapshot) => (
                                                          <li
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className={`
                                                    hover:scale-105 transition-transform duration-300 hover:outline-dashed hover:outline-2 hover:outline-gray-400
                                                    ${snapshot.isDragging &&
                                                              "outline-dashed outline-2 outline-gray-400 bg-white text-cyan-800"
                                                              }`}
                                                          >
                                                            <div
                                                              dangerouslySetInnerHTML={{
                                                                __html: achievement,
                                                              }}
                                                              contentEditable
                                                            />
                                                          </li>
                                                        )}
                                                      </Draggable>
                                                    ))}
                                                {provided.placeholder}
                                              </ul>
                                            )}
                                          </Droppable>
                                        </div>
          
                                      )}
          
                                    </Draggable>
                                  ))}
                                  {provided.placeholder}
                                </div>
                              )}
                            </Droppable>
                          )}
                  </div>
                
                </div>
                <div className="px-5">
                  <h2 className="text-xl text-blue-900 mb-5 font-bold" style={{ color: headerColor }}>EDUCATION</h2>
                  <div class="border-solid border-b-2 border-blue-900 mb-5"></div>
                  <div className="mb-4 ">
                  <ul className="list-none p-0">
                    {resumeData.education.length > 0 && (
                              <div className="mb-5">
                                {resumeData.education.map((item, index) => (
                                  <div  key={index} className="text-black mb-5">
                                    <p className="content i-bold " style={{ fontSize: '1.3rem' }}>{item.degree}</p>
                                    <p className="content">{item.school}</p>
                                    <DateRange className="mb-1 text-lg"
                                      startYear={item.startYear}
                                      endYear={item.endYear}
                                      id={`education-start-end-date`}
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                    </ul>
                    
                  </div>
                </div>
                <div className="px-5">
                    <h2 className="text-xl capitalize text-blue-900 font-bold" style={{ color: headerColor }}>SKILLS</h2>
                    <div class="border-solid  border-b-2 border-blue-900 mb-2 "></div>
                    <Droppable droppableId="skills" type="SKILLS">
                              {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                  {resumeData.skills.map((skill, index) => (
                                    <Draggable
                                      key={`SKILLS-${index}`}
                                      draggableId={`SKILLS-${index}`}
                                      index={index}
                                    >
                                      {(provided, snapshot) => (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          className={`border-0 text-black mb-5 hover:scale-105 transition-transform duration-300 mb-1 ${snapshot.isDragging &&
                                            "inline"
                                            }`}
                                        >
                                          <Skills title={skill.title} skills={skill.skills} />
                                        </div>
                                      )}
                                    </Draggable>
                                  ))}
                                  {provided.placeholder}
                                </div>
                              )}
                            </Droppable>
                    </div>
                    <div className="px-5">
                      <h2 className="text-2xl font-bold text-blue-900 border-blue-900" style={{ color: headerColor }}>LANGUAGE</h2>
                      <div className="text-black mb-4 font-bold ">
                      <Language  languages={resumeData.languages} />
                      </div>
                    </div>
                       

            
            
            

          </div>


          
        
      </div>
    );
};

const A4PageWrapper = ({ children }) => {
    const alertA4Size = () => {
        const preview = document.querySelector(".preview");
        const previewHeight = preview.offsetHeight;
        console.log(previewHeight);
        if (previewHeight > 1122) {
            alert("A4 size exceeded");
        }
    };

    return (
        <div className="w-8.5in border p-3" onLoad={alertA4Size}>
            {children}
        </div>
    );

};

export default Template22;
