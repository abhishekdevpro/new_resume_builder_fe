import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import FormButton from "./FormButton";
import { MdRemoveCircle } from "react-icons/md";

const Skill = ({ title }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleSkill = (e, index, title) => {
    const updatedSkills = resumeData.skills.map((skillType) => {
      if (skillType.title === title) {
        const newSkills = [...skillType.skills];
        newSkills[index] = e.target.value;
        return { ...skillType, skills: newSkills };
      }
      return skillType;
    });
    setResumeData({ ...resumeData, skills: updatedSkills });
  };

  const addSkill = (title) => {
    setResumeData((prevData) => {
      const updatedSkills = prevData.skills.map((skillType) => {
        if (skillType.title === title) {
          return {
            ...skillType,
            skills: [...skillType.skills, ""],
          };
        }
        return skillType;
      });
      return { ...prevData, skills: updatedSkills };
    });
  };

  const removeSkill = (title, index) => {
    setResumeData((prevData) => {
      const updatedSkills = prevData.skills.map((skillType) => {
        if (skillType.title === title) {
          const newSkills = [...skillType.skills];
          newSkills.splice(index, 1); // Remove the skill at the specific index
          return {
            ...skillType,
            skills: newSkills,
          };
        }
        return skillType;
      });
      return { ...prevData, skills: updatedSkills };
    });
  };

  const skillType = resumeData.skills.find((skillType) => skillType.title === title);

  // If skillType is not found or it has no skills, return null
  if (!skillType || skillType.skills.length === 0) {
    return null;
  }

  return (
    <div className="flex-col-gap-2 mt-10">
      <h2 className="input-title text-black text-3xl">{title}</h2>
      {skillType.skills.map((skill, index) => (
        <div key={index} className=" flex items-center gap-2">
          <input
            type="text"
            placeholder={title}
            name={title}
            className="w-full other-input border-black border"
            value={skill}
            onChange={(e) => handleSkill(e, index, title)}
          />
          <button
            type="button"
            className="border  bg-red-500 text-white p-2 rounded-3xl"
            onClick={() => removeSkill(title, index)}
          >
            <MdRemoveCircle /> 
          </button>
        </div>
      ))}
      <FormButton
        size={skillType.skills.length}
        add={() => addSkill(title)}
      />
    </div>
  );
};

export default Skill;
