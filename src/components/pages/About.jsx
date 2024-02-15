import React from "react";
import Navbar from "../Navbar/Navbar";
import AboutBG from "../../assets/about.jpg";
import Sales from "../../assets/aboutus/sales.png";
import Engineering from "../../assets/aboutus/engineering.png";
import Commercial from "../../assets/aboutus/commercial.png";
import "./About.css";
import SimpleSlider from "../Carousel/CarouselSlider";
import CompleteC from "../Card/CompleteCarousel";
import HomeHeader from "../Header/HomeHeader";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import ProfileCard from "../Card/ProfileCard";
import MessageCard from "../Card/MessageCard";
const About = () => {
  return (
    <>
      <Navbar />
      <HomeHeader
        Src={
          "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/aboutusT.mp4?alt=media&token=c14e5363-2a21-4032-ae55-6628c293d1ec"
        }
      />
      <ProfileCard />
      <MessageCard
        title={"MD Message"}
        img={
          "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/WhatsApp%20Image%202024-02-15%20at%2019.20.32_48e173dd.jpg?alt=media&token=85ce1f10-26c2-41b6-9a69-69d5a1748b34"
        }
        desc={`
          Hawa Overseas Employment Promoter  License No: OP&HRD/4111/PWR, since its inception, the name has been synonymous with quality, performance and experience. Hawa Overseas Employment promoter, is well-equipped and adequately experienced to offer facilities of International Recruitment, Visa, Emigration and sophisticated information and elegant counsel about any subject and field regarding the recruitment and settlement in Saudi Arabia, United Arab Emirates, Bahrain, Kuwait, Oman, Malaysia and Qatar.

          Hawa Overseas supports the client’s vision by creating innovative and flexible human resource solutions. These solutions support business growth and commercial targets, whilst balancing the company interests and line department requirements. The successes we achieve are due to our dedication, commitment and indomitable spirit, no matter how tough the challenges we face.
          
          However, our greatest asset is, beyond any doubt, our employees. Our firm is managed by a group of professionals with technical expertise and rich experience. We take pride in performing our work professionally, with integrity, passion and dedication to our clients, achieving positive results through effective and cohesive teamwork fostering trust and respect for individuals, supporting the diversity of our people while providing a stable, harmonious, productive and safe working environment.
          
          We have grown immensely and our achievement and performances have been particularly outstanding in the Middle East and Saudi Arabia. With our agile, efficient, prompt and guaranteed service we assure the quality that is forever. Our employment agency has always believed the philosophy of quality and our motto is to make the Customers delightful with “Total Satisfaction” through personal, quality and professional service.
          
          The key attributes signifying Hawa Overseas quality and its very essence: our HAWK-like vision and PHOENIX-like survival. The first has allowed us to find the finest manpower and to furnish our clients with the talent they need and when they need it; the second has given us the instinct and passion to both survive and rise above difficult circumstances with ardor inspiration for passion and enthusiasm.
          
          In the current dynamic and competitive business climate, HAWA Overseas image is best epitomized by the HAWK and the PHOENIX which represent our people.
          
          “Maximizing potential of your human capital and optimizing your HR processes is our desire”
          `}
      >
        <div className="title-text font-[Ubuntu] font-bold  text-[#fff] text-justify w-[70%]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus totam eum, velit quis dolor quod placeat, voluptates
          fuga explicabo obcaecati est facere optio esse vitae ullam laudantium
          at, amet culpa nemo recusandae magnam suscipit tenetur rerum? Eos aut
          laborum quos pariatur reprehenderit fugit error exercitationem
          excepturi ullam alias consequatur voluptatibus earum, enim accusantium
          dignissimos repudiandae omnis, quae doloribus aspernatur praesentium
          eveniet asperiores. Ratione sapiente provident reprehenderit labore
          exercitationem ipsa eligendi harum culpa natus veritatis qui ullam aut
          adipisci odit fuga doloremque repudiandae autem, blanditiis molestias
          enim. Distinctio veritatis beatae qui debitis eveniet, quis tenetur
          quidem earum non quibusdam autem dolorem.
        </div>
      </MessageCard>
      <MessageCard
        title={"HR Manager Message"}
        img={
          "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/WhatsApp%20Image%202024-02-15%20at%2019.20.32_48e173dd.jpg?alt=media&token=85ce1f10-26c2-41b6-9a69-69d5a1748b34"
        }
        desc={`A professional Multi Service Company dedicated to its principle “First Impression Is the Last Impression.”
        We are from Hawa Overseas Employment Promoter (License No: OP&HRD/4111/PWR) one of the leading Recruitment & Manpower Consulting Company based in Pakistan (Peshawar & Islamabad). Hawa Overseas Employment Promoter maintains highly trained staff with highly educated & experience and provides a best class service to our customers. Our Vision of the future is firmly grounded in our everyday practices. We make every effort to constantly fine-tune every aspect of our service to provide complete satisfaction to our clients. We have a client base spreading across in UAE, QATAR, Saudi Arabia, Kuwait, Oman, Malaysia, providing manpower solution.
        Being a Manpower agency from Pakistan, we undertake complete responsibility to recruit any category of personnel from Pakistan. We are interest to join hand with your agency for supplying Pakistan workers as per the requirement.
        If we got a chance from you to supply workers to your reputed company, we are sure to keep our promise to complete the job as per the given terms and conditions by you. It would be our convenience to get reply from you whatever your interest with us.
        We assure that our best service and cooperation will be for you all the time.`}
      >
        <div className="title-text font-[Ubuntu] font-bold  text-[#fff] text-justify w-[70%]">
          <div className="flex flex-col justify-center items-center gap-y-3">
            <span className="text-5xl text-[#F17020]">
              GREETINGS OF THE DAY
            </span>
            <span className="text-center text-xl">
              A professional Multi Service Company dedicated to its principle{" "}
              <br />
              “First Impression Is the Last Impression.”
            </span>
          </div>
        </div>
      </MessageCard>
      <div className="flex justify-center items-center gap-x-20 px-10 py-[70px] flex-wrap">
        <div className="card w-[280px] flex flex-col justify-center items-center gap-y-7">
          <img src={Sales} alt="changes" className="w-[150px]" />
          <h1
            className="font-bold text-[1.3rem]"
            style={{ fontFamily: "Open Sans" }}
          >
            Sales Recruitment
          </h1>
          <div className="desc text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus tempora perferendis voluptas iusto nemo iste explicabo
            maiores natus nobis itaque ea dolorem, corporis, praesentium
            possimus consectetur consequuntur vel quis magni.
          </div>
        </div>
        <div className="card w-[280px] flex flex-col justify-center items-center gap-y-7">
          <img src={Engineering} alt="changes" className="w-[150px]" />
          <h1
            className="font-bold text-[1.3rem]"
            style={{ fontFamily: "Open Sans" }}
          >
            Engineering Recruitment
          </h1>
          <div className="desc text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus tempora perferendis voluptas iusto nemo iste explicabo
            maiores natus nobis itaque ea dolorem, corporis, praesentium
            possimus consectetur consequuntur vel quis magni.
          </div>
        </div>
        <div className="card w-[280px] flex flex-col justify-center items-center gap-y-7">
          <img src={Commercial} alt="changes" className="w-[150px]" />
          <h1
            className="font-bold text-[1.3rem]"
            style={{ fontFamily: "Open Sans" }}
          >
            Commercial Recruitment
          </h1>
          <div className="desc text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus tempora perferendis voluptas iusto nemo iste explicabo
            maiores natus nobis itaque ea dolorem, corporis, praesentium
            possimus consectetur consequuntur vel quis magni.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
