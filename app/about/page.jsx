import { RiRidingFill, RiUserHeartFill, RiStarHalfLine, RiVidiconFill, RiVipCrown2Fill, RiSendPlaneFill } from "react-icons/ri";
import HeroImg from "@/components/HeroImg";

const infoData = [
  {
    icon: <RiUserHeartFill size={20} />,
    text: 'Mr Lorem',
  },
  {
    icon: <RiSendPlaneFill size={20} />,
    text: '+226 72 00 00 00',
  },
  {
    icon: <RiVidiconFill size={20} />,
    text: 'Lorempro@gmail.com',
  },
  {
    icon: <RiVipCrown2Fill size={20} />,
    text: 'Born on 23 Jan, 2000',
  },
  {
    icon: <RiStarHalfLine size={20} />,
    text: 'Master degree',
  },
  {
    icon: <RiRidingFill size={20} />,
    text: 'Cité Azimo Ouaga 2000, Ouaga',
  }
]
const About = () => {
  return (
    <section className="pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-18 text-center mx-auto">About me</h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="relative flex-1 xl:flex">
            <HeroImg
            containerStyles='w-[450px] h-[450] lg:w-[520px] lg:h-[505px] bg-no-repeat relative'
            imgSrc='/about/undraw_Visionary_technology_re_jfp7.png'
            />
          </div>
          <div className="flex-1">
            {/* Content */}
            <div className="text-lg mt-12 xl:mt-3">
              <div className="text-center xl:text-left">
                <h3 className="h3 mb-4">Lorem ipsum dolor sit amet.</h3>
                <p className="subtitle max-w-xl mx-auto xl:mx-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia tenetur hic ab voluptatum ut minus!</p>
                <p className="subtitle max-w-xl mx-auto xl:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam necessitatibus exercitationem quidem, odio ex beatae.</p>

                {/* Icons */}
                <div className="grid xl:grid-cols-2 gap-4 mb-12">
                  {
                    infoData.map((item, index) => {
                      return (
                        <div
                        className="flex items-center gap-x-4 mx-auto xl:mx-0" 
                        key={index}>
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About