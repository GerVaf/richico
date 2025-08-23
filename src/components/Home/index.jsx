import Collabration from "./components/Collabration";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="p-10 flex flex-col gap-10">
        <Collection />
        <MenuSection />
        <Collabration />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
