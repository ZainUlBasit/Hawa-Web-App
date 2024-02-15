import React from "react";
import Button from "../Buttons/Button";

const ProfileCard = () => {
  const downloadProfilePDF = () => {
    const pdfLink =
      "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/profile.pdf?alt=media&token=4b1f4925-6393-45f2-a03e-f250d271ca74";

    // Create a temporary link element
    const downloadLink = document.createElement("a");
    downloadLink.href = pdfLink;
    downloadLink.download = "company_profile.pdf";
    downloadLink.target = "_blank"; // Add this line to open in a new tab

    // Append the link to the document and trigger the click event
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Remove the link from the document
    document.body.removeChild(downloadLink);
  };
  return (
    <div className="bg-black pb-10 flex justify-center items-center flex-col py-10 border-b-[10px] border-b-white gap-y-5">
      <div
        className="mb-7 title px-5 py-3 text-[#F17020] text-3xl border-white border-2 shadow-[5px_5px_0px_0px_rgba(255,255,255)] font-bold"
        style={{ fontFamily: "Open Sans" }}
      >
        Company Profile
      </div>
      <div className="Desc w-[90%] text-justify text-[#fff] text-xl">
        Hawa Overseas is ISO-Certified Company and has started his service in
        2004 as International Recruitment agency in GCC Region. We are pleased
        to introduce as one of the trustworthy institutions in the GCC Region
        with having more then 20 years continuous experience in providing
        skilled, Trained and Experienced manpower in various industrial,
        commercial and service sectors as per the client Requirements. We are
        well established in all industrial and commercial sectors having more
        then 20 years of experience by supplying more then 20 companies here in
        Kingdom of Saudi Arabia and all GCC Region including Malaysia , we have
        the capabilities and strategy that allow us to provide qualified and
        trained manpower according to client satisfaction. <br /><br />
        Hawa Overseas firmly believes in working collaboratively with a group of
        people in order to achieve goals and backs the ability to identify and
        motivate individual employees to form a team that stays together, works
        together and achieves together. Hawa Overseas puts its faith in the
        process of bringing individual employees together through various group
        activities to foster a sense of togetherness and teamwork to improve
        productivity, communication and other key business functions. Regularly
        scheduled training sessions are held year-round to assess the strengths
        and weaknesses of our employees and carve them into highly experienced
        and skilled professionals. Investing in our people increases
        productivity, improves quality control and adds to the overall
        contentment of our workforce.
      </div>
      <Button
        title={"Download Company Profile"}
        Width={"w-[200px] my-10"}
        onClick={downloadProfilePDF}
      />
    </div>
  );
};

export default ProfileCard;
