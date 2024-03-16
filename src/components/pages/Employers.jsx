import React from "react";
import Navbar from "../Navbar/Navbar";
import EmployeeHeader from "../Header/EmployeeHeader";
import Footer from "../Footer/Footer";
import Carousel from "nuka-carousel";

const Employers = () => {
  return (
    <>
      <Navbar />
      <EmployeeHeader />
      <div className="flex justify-center items-center flex-col py-10 gap-y-4 fade-in">
        <div
          className="text-6xl text-[#F17020] font-bold border-[#F17020] border-2 shadow-[5px_5px_0px_0px_#F17020] px-7 capitalize py-4 max550:text-3xl max550:px-2 text-center fade-in"
          style={{ fontFamily: "Open Sans" }}
        >
          process map of recruitment
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/workflow.png?alt=media&token=4cb8ed41-8a5c-4cda-b967-bee4cee7e700"
          alt="workflow"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-y-10 w-full h-fit py-10 pb-[100px] fade-in">
        <div
          className="text-6xl text-[#F17020] font-bold border-[#F17020] border-2 shadow-[5px_5px_0px_0px_#F17020]  capitalize px-7 py-4 flex justify-center items-center  max550:text-3xl max550:px-2 text-center mb-[100px]"
          style={{ fontFamily: "Open Sans" }}
        >
          Our Employees
        </div>
        <Carousel
          autoplay={true}
          autoplayInterval={900}
          wrapAround={true}
          withoutControls={true}
          slidesToShow={4}
          speed={600}
          cellSpacing={20}
          cellAlign="center"
        >
          {[
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo1.jpg?alt=media&token=2d8c9fc5-7a87-4389-9eff-9c76cda70263",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo10.png?alt=media&token=2a782ddc-1274-4e30-a7fc-3e1725f15c8a",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo11.png?alt=media&token=cd6a9656-ced6-4e1a-9139-646e61d1a4f6",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo12.jpg?alt=media&token=b36fb3d9-e214-416c-9c2b-a7ef3ad63315",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo13.png?alt=media&token=2cf6fb62-b344-4fc0-ae44-d02cbbef1579",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo17.jpg?alt=media&token=419b67ef-7388-4ac8-bb08-e0db4428e9ce",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo18.jpg?alt=media&token=42479852-4b72-4b45-a20c-982577cec18e",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo2.png?alt=media&token=e7d73ebb-8c10-4344-9c27-588cfca02555",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo3.jpg?alt=media&token=209f9c2a-7b48-4d75-ba43-d79614938695",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo4.jpg?alt=media&token=d11c8d29-c617-4ceb-95c1-2937496153c2",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo5.png?alt=media&token=b10a5f86-9f5c-4b18-873e-a05f318c9246",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo6.png?alt=media&token=235284d9-a4cf-48e1-8086-b8f94a93915b",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo7.png?alt=media&token=5e8fd0e7-e68c-4ce0-b127-cb4856b17971",
            "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo8.png?alt=media&token=95e8cb90-c7fb-4ecc-9ab3-c65d4015c01b",
          ].map((dt, i) => {
            return (
              <div className="h-full flex justify-center items-center">
                <img src={dt} alt={`Logo ${i + 1}`} />
              </div>
            );
          })}
        </Carousel>
      </div>
      <Footer />
    </>
  );
};

export default Employers;
