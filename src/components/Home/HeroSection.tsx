import Button from "@/utils/Button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold  leading-none md:text-5xl xl:text-6xl dark:text-white">
            Bangladesh’s #1 Online Book Shop
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            My online bookshop will offer a wide selection of books, including
            fiction, non-fiction, academic titles, and rare finds. With a
            user-friendly platform, personalized recommendations, and secure
            payments, it ensures a seamless shopping experience. Featuring
            e-books, audiobooks, and discounts, it’s a one-stop destination for
            book lovers everywhere.
          </p>
          <Link to="/products" className="flex justify-center">
            <Button text="See All Books"></Button>
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="relative overflow-hidden bg-cover bg-no-repeat ">
                  <img
                    src="https://m.media-amazon.com/images/I/71NvkZxn-fL._SL1360_.jpg"
                    className=" transition duration-300 ease-in-out hover:scale-110"
                    alt="Louvre"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg"
                  alt="mockup"
                  className=" transition duration-300 ease-in-out hover:scale-110"
                />
              </CarouselItem>

              <CarouselItem>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg"
                  alt="mockup"
                  className=" transition duration-300 ease-in-out hover:scale-110"
                />
              </CarouselItem>

              <CarouselItem>
                <img
                  src="https://m.media-amazon.com/images/I/71ZUAQQ-9IL._AC_UF1000,1000_QL80_.jpg"
                  alt="mockup"
                  className=" transition duration-300 ease-in-out hover:scale-110"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
