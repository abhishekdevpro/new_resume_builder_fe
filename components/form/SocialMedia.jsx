import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import { MdRemoveCircle } from "react-icons/md";

const SocialMedia = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  // Handle social media input changes
  const handleSocialMedia = (e, index) => {
    const newSocialMedia = [...resumeData.socialMedia];
    newSocialMedia[index][e.target.name] = e.target.value.replace("https://", "");
    setResumeData({ ...resumeData, socialMedia: newSocialMedia });
  };

  // Add a new social media field
  const addSocialMedia = () => {
    setResumeData({
      ...resumeData,
      socialMedia: [...resumeData.socialMedia, { socialMedia: "", link: "" }],
    });
  };

  // Remove a specific social media field
  const removeSocialMedia = (index) => {
    const newSocialMedia = [...resumeData.socialMedia];
    newSocialMedia.splice(index, 1); // Remove the item at the specified index
    setResumeData({ ...resumeData, socialMedia: newSocialMedia });
  };

  return (
    <div className="flex-col-gap-2 mt-10">
      <h2 className="input-title text-black text-3xl">Social Media</h2>
      <h2 className="input-title text-black">Please mention platform and their link</h2>
      {resumeData.socialMedia.map((socialMedia, index) => (
        <div key={index} className="flex-wrap-gap-2">
          <input
            type="text"
            placeholder="Social Media"
            name="socialMedia"
            className="other-input border-black font-semibold bg-gray-200 text-center w-32"
            value={socialMedia.socialMedia}
            onChange={(e) => handleSocialMedia(e, index)}
          />
          <input
            type="text"
            placeholder="Link"
            name="link"
            className="other-input border-black border w-60"
            value={socialMedia.link}
            onChange={(e) => handleSocialMedia(e, index)}
          />
          {/* Remove Button */}
          {resumeData.socialMedia.length > 1 && (
            <button
              type="button"
              onClick={() => removeSocialMedia(index)}
              className="px-2 text-white bg-red-700 rounded-lg text-2xl">
            
              <MdRemoveCircle /> 
            </button>
          )}
        </div>
      ))}
      <FormButton
        size={resumeData.socialMedia.length}
        add={addSocialMedia}
      />
    </div>
  );
};

export default SocialMedia;
