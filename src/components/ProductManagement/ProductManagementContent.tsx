/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "@/redux/features/Products/Products.api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { TableCell, TableRow } from "../ui/table";

const ProductManagementContent = ({ product }: any) => {
  const navigate = useNavigate();
  const [deleteProduct] = useDeleteProductMutation();

  const handleProductDelete = async (productId: string) => {
    const confirmPronPrompt = prompt("Write delete to remove product");
    if (confirmPronPrompt === "delete") {
      deleteProduct(productId);
      toast("Product is deleted successfully");
      navigate("/product-management");
    } else {
      toast("Wrong Input");
    }
  };

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: 0,
    stockQuantity: 0,
    description: "",
    image: "",
    category: "",
  });

  useEffect(() => {
    setFormData(product);
  }, [product]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [updateData] = useUpdateProductMutation();

  const handleUpdateFormSubmit = (e: any) => {
    e.preventDefault();
    const typeChangeFormData = {
      title: formData?.title,
      author: formData?.author,
      price: Number(formData?.price),
      stockQuantity: Number(formData?.stockQuantity),
      description: formData?.description,
      image: formData?.image,
      category: formData?.category,
    };

    const options = {
      id: product?._id,
      data: typeChangeFormData,
    };

    updateData(options);
    toast.success("product updated successfully");
    navigate("/product-management");
  };

  const [productInfo, setProductInfo] = useState({
    title: "",
    author: "",
    price: 0,
    stockQuantity: 0,
    description: "",
    image: "",
    category: "",
  });

  const [addProduct] = useAddProductMutation();

  const handleProductSubmit = (e: any) => {
    e.preventDefault();
    addProduct({
      ...productInfo,
      inStock: true,
    });
    toast.success("product added successfully");
  };

  return (
    <TableRow key={product?._id}>
      <TableCell>
        {" "}
        <img className="h-12 w-12" src={product?.image} alt="" />{" "}
      </TableCell>
      <TableCell>{product?.title}</TableCell>
      <TableCell>{product?.author}</TableCell>
      <TableCell>$ {product?.price}</TableCell>
      <TableCell>{product?.category}</TableCell>
      <TableCell>
        {/* ADD Product */}
        <Sheet>
          <SheetTrigger className="mr-1">
            <Button className="bg-slate-600 ms-1">Add Product</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add Product Information</SheetTitle>
              <SheetDescription>
                <form onSubmit={handleProductSubmit}>
                  <Label htmlFor="title">Product Title</Label>
                  <Input
                    type="text"
                    placeholder="Product Title"
                    id="title"
                    name="title"
                    onBlur={(e) =>
                      setProductInfo({ ...productInfo, title: e.target.value })
                    }
                  />
                  <Label htmlFor="title">Product Author</Label>
                  <Input
                    type="text"
                    placeholder="Author"
                    id="author"
                    name="author"
                    onBlur={(e) =>
                      setProductInfo({ ...productInfo, author: e.target.value })
                    }
                  />
                  <Label htmlFor="price">Product Price</Label>
                  <Input
                    type="number"
                    placeholder="Product Price"
                    id="price"
                    name="price"
                    onBlur={(e) =>
                      setProductInfo({
                        ...productInfo,
                        price: Number(e.target.value),
                      })
                    }
                  />
                  <Label htmlFor="stockQuantity">Stock Quantity</Label>
                  <Input
                    type="number"
                    placeholder="Product Stock"
                    id="stockQuantity"
                    name="stockQuantity"
                    onBlur={(e) =>
                      setProductInfo({
                        ...productInfo,
                        stockQuantity: Number(e.target.value),
                      })
                    }
                  />
                  <Label htmlFor="description">Product Description</Label>
                  <Input
                    type="string"
                    placeholder="Product Description"
                    id="description"
                    name="description"
                    onBlur={(e) =>
                      setProductInfo({
                        ...productInfo,
                        description: e.target.value,
                      })
                    }
                  />
                  <Label htmlFor="stock">Product Image</Label>
                  <Input
                    type="string"
                    placeholder="Product Image"
                    id="image"
                    name="image"
                    onBlur={(e) =>
                      setProductInfo({
                        ...productInfo,
                        image: e.target.value,
                      })
                    }
                  />
                  <Label htmlFor="stock">Product Category</Label>
                  <Input
                    type="string"
                    placeholder="Product Category"
                    id="category"
                    name="category"
                    onBlur={(e) =>
                      setProductInfo({
                        ...productInfo,
                        category: e.target.value,
                      })
                    }
                  />
                  <br />
                  <Button type="submit" className="w-full">
                    Add Product
                  </Button>
                </form>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        {/* Delete */}
        <Button
          variant="destructive"
          onClick={() => handleProductDelete(product?._id)}
        >
          Delete
        </Button>
        {/* update */}
        <Sheet>
          <SheetTrigger>
            <Button className="bg-slate-600 ms-1">Update</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Update Information of {product?.name}</SheetTitle>
              <SheetDescription>
                <form onSubmit={handleUpdateFormSubmit}>
                  <Label htmlFor="title">Product Title</Label>
                  <Input
                    type="text"
                    placeholder="Product Title"
                    id="title"
                    name="title"
                    defaultValue={product?.title || ""}
                    onChange={handleChange}
                  />
                  <Label htmlFor="title">Author</Label>
                  <Input
                    type="text"
                    placeholder="Author"
                    id="author"
                    name="author"
                    defaultValue={product?.author || ""}
                    onChange={handleChange}
                  />
                  <Label htmlFor="price">Product Price</Label>
                  <Input
                    type="number"
                    placeholder="Product Price"
                    id="price"
                    name="price"
                    defaultValue={product?.price || ""}
                    onChange={handleChange}
                  />
                  <Label htmlFor="stockQuantity">Product Stock</Label>
                  <Input
                    type="number"
                    placeholder="Product Stock"
                    id="stockQuantity"
                    name="stockQuantity"
                    defaultValue={product?.stockQuantity || ""}
                    onChange={handleChange}
                  />
                  <Label htmlFor="description">Product Description</Label>
                  <Input
                    type="string"
                    placeholder="Product Description"
                    id="description"
                    name="description"
                    defaultValue={product?.description || ""}
                    onChange={handleChange}
                  />
                  <Label htmlFor="stock">Product Image</Label>
                  <Input
                    type="string"
                    placeholder="Product Image"
                    id="image"
                    name="image"
                    defaultValue={product?.image || ""}
                    onChange={handleChange}
                  />
                  <Label htmlFor="stock">Product Category</Label>
                  <Input
                    type="string"
                    placeholder="Product Category"
                    id="category"
                    name="category"
                    defaultValue={product?.category || ""}
                    onChange={handleChange}
                  />
                  <br />
                  <Button type="submit" className="w-full">
                    Update Product Info
                  </Button>
                </form>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </TableCell>
    </TableRow>
  );
};

export default ProductManagementContent;
