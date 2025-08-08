import { CaretDoubleRight } from "phosphor-react";

const Collection = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 gap-5">
      {/* Left large image */}
      <div className="col-span-1 xl:col-span-2">
        <img
          className="object-cover rounded shadow w-full h-full"
          src="https://i.pinimg.com/1200x/1f/76/54/1f765441502051e5f11aeaab30ae175e.jpg"
          alt=""
        />
      </div>

      {/* Center column with title and image */}
      <div className="col-span-1 relative overflow-visible flex items-end xl:items-start xl:col-span-1">
        <h1 className="main-title xl:hidden block font-semibold w-full absolute bg-white/40 backdrop-blur-md text-center ">
          NEW COLLECTIONS OF RICHICO
        </h1>
        <h1 className="main-title hidden xl:whitespace-nowrap xl:inline-flex font-semibold absolute top-0">
          NEW COLLECTIONS <br /> OF RICHICO
        </h1>

        <div className="h-[50vh] self-end w-full xl:w-auto">
          <img
            className="object-cover object-top rounded shadow w-full h-full"
            src="https://i.pinimg.com/1200x/59/9d/4d/599d4dacfae9075b0261428f367ddf58.jpg"
            alt=""
          />
        </div>
      </div>

      {/* Right column with text and link */}
      <div className="col-span-1 xl:col-span-2 flex flex-col justify-end gap-10 ">
        <div className="flex gap-5 cursor-pointer items-center justify-start xl:justify-start">
          <span className="underline">see more</span>
          <CaretDoubleRight size={25} />
        </div>
        <p className="text-justify text-xl xl:text-base">
          Richico is where timeless elegance meets modern luxury. Our
          collections are crafted for individuals who appreciate refined style,
          impeccable quality, and effortless sophistication. At Richico, every
          piece is designed with meticulous attention to detail, blending
          classic silhouettes with contemporary trends to create wardrobe
          staples that elevate everyday wear. From premium fabrics to expert
          tailoring, Richico embodies a commitment to excellence and
          exclusivity. Whether dressing for a high-profile event or curating a
          polished casual look, our clothing empowers confidence and celebrates
          individuality.
        </p>
      </div>
    </div>
  );
};

export default Collection;
