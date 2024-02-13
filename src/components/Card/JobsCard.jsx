import React from "react";

const JobsCard = () => {
  return (
    <div className="overflow-hidden flex flex-col shadow-md shadow-black w-fit px-8 py-4 gap-y-4 m-5 border rounded-[5px] max-w-[300px]">
      <h1 className="font-bold text-3xl text-wrap">
        Sales Manager – Southwest
      </h1>
      <div className="flex flex-col">
        <span>Bristol, South West</span>
        <span>£40000 - 42000 per Annum</span>
        <span>Permanent</span>
      </div>
      <div className="overflow-hidden h-[100px]">
        {" "}
        {/* Set your desired height */}
        <p className="line-clamp-3">
          {" "}
          {/* Adjust the line-clamp value based on the number of lines you want to display */}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          rerum tempore eligendi explicabo totam praesentium adipisci, provident
          incidunt expedita, tenetur, ipsam veniam odio quisquam maxime harum
          repellat quae quibusdam nobis quos illo consequuntur rem quidem? Dicta
          illo dolores possimus aspernatur amet excepturi, quae, eos repudiandae
          veritatis placeat quidem,
        </p>
      </div>
    </div>
  );
};

export default JobsCard;
