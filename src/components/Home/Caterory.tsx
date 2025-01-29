import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Category = () => {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
        Books Category
      </h2>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
              <img
                src="https://img.freepik.com/free-photo/open-book-with-fairytale-scene_52683-107844.jpg"
                alt="University of Southern California"
                className="absolute inset-0 h-fit w-fit object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-white text-center ">
                Fiction
              </h3>
              <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"></div>
            </article>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
              <img
                src="https://media.istockphoto.com/id/1242139791/vector/abstract-open-schoolbook-with-icons-of-school-subjects.jpg?s=612x612&w=0&k=20&c=471L4qYzgwpdcvdFCW_Kc2KwWN3bxNUd-wVGQcUMLpQ="
                alt="University of Southern California"
                className="absolute inset-0 h-fit w-fit object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-white text-center">
                Science
              </h3>
            </article>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
              <img
                src="https://media.istockphoto.com/id/638084006/photo/vintage-novel-books.jpg?s=612x612&w=0&k=20&c=Vby2cS_kDRYr93Bp8RCILLMGTzftBQF_x551xWS1_vs="
                alt="University of Southern California"
                className="absolute inset-0 h-fit w-fit object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-white text-center">
                Poetry
              </h3>
            </article>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
              <img
                src="https://back.printster.in/Upload/pages/60a8145ccd9951621627996.jpeg"
                alt="University of Southern California"
                className="absolute inset-0 h-fit w-fit object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-white text-center">
                Religious
              </h3>
            </article>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
              <img
                src="https://media.istockphoto.com/id/1087185964/photo/young-man-passes-from-a-peak-to-another-on-a-book-the-concept-of-scholarship.jpg?s=612x612&w=0&k=20&c=8ugGNJhSBIUHqYQAlLY99vxiNdN_4nP1SGv1-kb1eXk="
                alt="University of Southern California"
                className="absolute inset-0 h-fit w-fit object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-white text-center">
                Self Development
              </h3>
            </article>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Category;
