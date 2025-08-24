import main from "../../../assets/main.jpg";
const Hero = () => {
  return (
    <div className="flex">
      <div className="w-full h-[85vh] ">
        <img className=" object-cover w-full h-full" src={main} alt="" />
      </div>
    </div>
  );
};

export default Hero;
