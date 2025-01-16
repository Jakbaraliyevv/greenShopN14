import { Carousel } from "antd";
import { hero_mock } from "../../../utils";
import HeroItem from "./hero-item";
import { HeroSliderType } from "../../../@types";

const Hero = () => {

  return (
    <Carousel autoplay className=" mt-[1.5rem]">
        {hero_mock.map((value:HeroSliderType) => <HeroItem key={value.id} {...value}/>)}
    </Carousel>
  );
};

export default Hero;
