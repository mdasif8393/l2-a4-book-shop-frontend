import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <div className="my-8 mt-24 mb-24">
      <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl mb-8">
        Features Books
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
          <a href="#">
            <img
              className="p-2 rounded-t-lg h-52 w-full"
              src="https://m.media-amazon.com/images/I/71NvkZxn-fL._SL1360_.jpg"
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              The Great Gatsby
            </h5>
            <p className="text-sm tracking-tight text-gray-900 dark:text-white mt-2">
              A story about the American dream.
            </p>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
          <a href="#">
            <img
              className="p-2 rounded-t-lg h-52 w-full"
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg"
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              The Silent Patient
            </h5>
            <p className="text-sm tracking-tight text-gray-900 dark:text-white mt-2">
              A psychological thriller about a woman's act of violence against
              her husband and the therapist obsessed with uncovering her motive.
            </p>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
          <a href="#">
            <img
              className="p-2 rounded-t-lg h-52 w-full"
              src="https://c8.alamy.com/comp/2A3GHJ0/the-book-brief-answers-to-the-big-questions-by-stephen-hawking-2A3GHJ0.jpg"
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Brief Answers to the Big Questions
            </h5>
            <p className="text-sm tracking-tight text-gray-900 dark:text-white mt-2">
              Hawking's final thoughts on the universe's greatest mysteries.
            </p>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
          <a href="#">
            <img
              className="p-2 rounded-t-lg h-52"
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg"
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              The Alchemist
            </h5>
            <p className="text-sm tracking-tight text-gray-900 dark:text-white mt-2">
              An allegorical tale about a young shepherd pursuing his dream of
              finding a treasure.
            </p>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
          <a href="#">
            <img
              className="p-2 rounded-t-lg h-52 w-full"
              src="https://m.media-amazon.com/images/I/71ZUAQQ-9IL._AC_UF1000,1000_QL80_.jpg"
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Leaves of Grass
            </h5>
            <p className="text-sm tracking-tight text-gray-900 dark:text-white mt-2">
              A groundbreaking collection of poetry that celebrates
              individuality and nature.
            </p>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
          <a href="#">
            <img
              className="p-2 rounded-t-lg h-52 w-full"
              src="https://static-01.daraz.com.bd/p/d5f7ca1f9fa387844d9295e8c5859301.jpg"
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              The Power of Now
            </h5>
            <p className="text-sm tracking-tight text-gray-900 dark:text-white mt-2">
              A guide to spiritual enlightenment through living in the present
              moment.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Link to="/products" className="inline-flex">
            <span className="h-12 flex items-center justify-center uppercase font-semibold px-8 border border-gray-900 hover:bg-gray-700 hover:text-white transition duration-500 ease-in-out">
              See All Books
            </span>
            <span className="h-12 w-12 flex-shrink-0 flex items-center justify-center border border-l-0 border-gray-900 hover:bg-gray-700 hover:text-white transition duration-500 ease-in-out">
              <svg
                className="h-3 w-3 svg-inline--fa fa-chevron-right fa-w-8 fa-9x"
                aria-hidden="true"
                focusable="false"
                data-icon="chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path
                  fill="currentColor"
                  d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
