import Category from "./Caterory";
import FeaturedProducts from "./FeaturedProducts";
import HeroSection from "./HeroSection";
import UserReviews from "./UserReviews";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Category />
      <FeaturedProducts />
      <UserReviews />
    </div>
  );
};

export default Home;
