import { IBook } from "@/types/types";

const Product = (product: IBook) => {
  console.log(product.product._id);
  return (
    <>
      {/* <Link to={`/service/${service?.service?._id}`}>
      <Card className=" hover:shadow-2xl relative overflow-hidden bg-no-repeat m-1">
        <CardHeader>
          <CardTitle>{service?.service?.name.slice(0, 20)}</CardTitle>
          <CardDescription>
            {service.service.description.slice(0, 80)} <br />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <small className="text-red-800">
            Take {service?.service?.duration} minutes
          </small>
          <CardContent></CardContent>

          <p className=" text-red-800">
            ${" "}
            <span className="font-semibold text-red-800">
              {service.service.price}
            </span>
          </p>
        </CardContent>

        <CardFooter>
          <Button className="w-2/4">
            <Link to={`/service/${service?.service?._id}`}>Book Now</Link>
          </Button>
        </CardFooter>
      </Card>
    </Link> */}
    </>
  );
};

export default Product;
