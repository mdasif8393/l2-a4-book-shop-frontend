import Category from "./Caterory";
import FeaturedProducts from "./FeaturedProducts";
import HeroSection from "./HeroSection";
import UserReviews from "./UserReviews";

const Home = () => {
  return (
    <div className="w-[90%]">
      <HeroSection />
      <Category />
      <FeaturedProducts />
      <UserReviews />
    </div>
  );
};

export default Home;
