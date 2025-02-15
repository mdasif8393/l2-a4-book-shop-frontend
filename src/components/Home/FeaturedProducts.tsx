import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const FeaturedProducts = () => {
  return (
    <div className="my-8 mt-24 mb-24 w-[85%] mx-auto">
      <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl mb-8">
        Features Books
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
        <Card className=" hover:shadow-2xl relative overflow-hidden bg-no-repeat m-1">
          <CardHeader>
            <div className="mb-5">
              <img
                className="object-contain h-56 w-96 transition duration-300 ease-in-out hover:scale-110"
                src="https://m.media-amazon.com/images/I/71NvkZxn-fL._SL1360_.jpg"
                alt="book"
              />
            </div>
            <CardTitle>The Great Gatsby</CardTitle>
            <CardDescription>
              A story about the American dream. thriller about a woman's act of
              violence against her husband and the therapist obsessed with
              uncovering her motive. <br />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <small>
              Category: <span className="text-red-800">Science</span>
            </small>
            <CardContent></CardContent>

            <p>
              $ <span className="font-semibold text-red-800">16</span>
            </p>
          </CardContent>
        </Card>

        <Card className=" hover:shadow-2xl relative overflow-hidden bg-no-repeat m-1">
          <CardHeader>
            <div className="mb-5">
              <img
                className="object-contain h-56 w-96 transition duration-300 ease-in-out hover:scale-110"
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg"
                alt="book"
              />
            </div>
            <CardTitle>The Silent Patient</CardTitle>
            <CardDescription>
              A psychological thriller about a woman's act of violence against
              her husband and the therapist obsessed with uncovering her motive.{" "}
              <br />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <small>
              Category: <span className="text-red-800">Fiction</span>
            </small>
            <CardContent></CardContent>

            <p>
              $ <span className="font-semibold text-red-800">9</span>
            </p>
          </CardContent>
        </Card>

        <Card className=" hover:shadow-2xl relative overflow-hidden bg-no-repeat m-1">
          <CardHeader>
            <div className="mb-5">
              <img
                className="object-contain h-56 w-96 transition duration-300 ease-in-out hover:scale-110"
                src="https://c8.alamy.com/comp/2A3GHJ0/the-book-brief-answers-to-the-big-questions-by-stephen-hawking-2A3GHJ0.jpg"
                alt="book"
              />
            </div>
            <CardTitle>Brief Answers to the Big Questions</CardTitle>
            <CardDescription>
              Hawking's final thoughts on the universe's greatest mysteries.{" "}
              <br />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <small>
              Category: <span className="text-red-800">Drama</span>
            </small>
            <CardContent></CardContent>

            <p>
              $ <span className="font-semibold text-red-800">13</span>
            </p>
          </CardContent>
        </Card>

        <Card className=" hover:shadow-2xl relative overflow-hidden bg-no-repeat m-1">
          <CardHeader>
            <div className="mb-5">
              <img
                className="object-contain h-56 w-96 transition duration-300 ease-in-out hover:scale-110"
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg"
                alt="book"
              />
            </div>
            <CardTitle>The Alchemist</CardTitle>
            <CardDescription>
              An allegorical tale about a young shepherd pursuing his dream of
              finding a treasure. <br />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <small>
              Category: <span className="text-red-800">Fiction</span>
            </small>
            <CardContent></CardContent>

            <p>
              $ <span className="font-semibold text-red-800">16</span>
            </p>
          </CardContent>
        </Card>

        <Card className=" hover:shadow-2xl relative overflow-hidden bg-no-repeat m-1">
          <CardHeader>
            <div className="mb-5">
              <img
                className="object-contain h-56 w-96 transition duration-300 ease-in-out hover:scale-110"
                src="https://m.media-amazon.com/images/I/71ZUAQQ-9IL._AC_UF1000,1000_QL80_.jpg"
                alt="book"
              />
            </div>
            <CardTitle> Leaves of Grass</CardTitle>
            <CardDescription>
              A groundbreaking collection of poetry that celebrates
              individuality and nature.
              <br />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <small>
              Category: <span className="text-red-800">Science</span>
            </small>
            <CardContent></CardContent>

            <p>
              $ <span className="font-semibold text-red-800">8</span>
            </p>
          </CardContent>
        </Card>

        <Card className=" hover:shadow-2xl relative overflow-hidden bg-no-repeat m-1">
          <CardHeader>
            <div className="mb-5">
              <img
                className="object-contain h-56 w-96 transition duration-300 ease-in-out hover:scale-110"
                src="https://static-01.daraz.com.bd/p/d5f7ca1f9fa387844d9295e8c5859301.jpg"
                alt="book"
              />
            </div>
            <CardTitle>The Power of Now</CardTitle>
            <CardDescription>
              A guide to spiritual enlightenment through living in the present
              moment. <br />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <small>
              Category: <span className="text-red-800">Drama</span>
            </small>
            <CardContent></CardContent>

            <p>
              $ <span className="font-semibold text-red-800">15</span>
            </p>
          </CardContent>
        </Card>

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
