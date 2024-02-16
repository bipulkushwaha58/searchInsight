import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./productcard";
import Modal from "../../utils/modal";
import searchAPI from "../../api/search";
import Navbar from "../navbar";
const data = {
  total: 10,
  hits: [
    {
      uniq_id: "abcd",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/7319328/pexels-photo-7319328.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      uniq_id: "1234",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      uniq_id: "1234",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      uniq_id: "abcd",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/7319328/pexels-photo-7319328.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      uniq_id: "1234",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      uniq_id: "abcd",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/7319328/pexels-photo-7319328.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      uniq_id: "1234",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      uniq_id: "abcd",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/7319328/pexels-photo-7319328.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      uniq_id: "abcd",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/7319328/pexels-photo-7319328.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      uniq_id: "abcd",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/7319328/pexels-photo-7319328.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      uniq_id: "abcd",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/7319328/pexels-photo-7319328.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      uniq_id: "abcd",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/7319328/pexels-photo-7319328.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      uniq_id: "1234",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      uniq_id: "1234",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      uniq_id: "abcd",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/7319328/pexels-photo-7319328.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      uniq_id: "1234",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      uniq_id: "abcd",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/7319328/pexels-photo-7319328.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      uniq_id: "1234",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      uniq_id: "abcd",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/7319328/pexels-photo-7319328.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      uniq_id: "abcd",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/7319328/pexels-photo-7319328.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      uniq_id: "abcd",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/7319328/pexels-photo-7319328.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      uniq_id: "abcd",
      product_name: "product",
      brand_name: "brand",
      category: "category",
      images: [
        "https://images.pexels.com/photos/7319328/pexels-photo-7319328.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
  ],
};

export default function SearchPage() {
  const childRef = useRef();
  const [open, setOpen] = useState(false);
  const [attributes, setAttributes] = useState({});
  const [query, setQuery] = useState(null);
  const [searchType, setSearchType] = useState("keyword");
  const [apiCall, setApiCall] = useState(false);
  const [searchResult, setSearchResult] = useState(data);

  const handleClick = (item) => {
    setAttributes(item);
    setOpen(!open);
  };
  const fetchSearchResult = () => {
    searchAPI.query(query, searchType).then((res) => {
      // console.log(res)
      setSearchResult(data);
    });
  };
  useEffect(() => {
    if (apiCall) {
      setApiCall(false);
      fetchSearchResult();
    }
  }, [apiCall]);

  console.log("query", query);
  console.log("select", searchType);
  console.log("apiCall", apiCall);
  return (
    <>
      <Navbar
        setQuery={setQuery}
        setApiCall={setApiCall}
        setSearchType={setSearchType}
      />
      <div class="bg-slate-200 flex flex-col h-[calc(100vh-5rem)] overflow-auto ">
        <div class="pt-2 pl-10 text-[#874439] text-lg">
          Total Hits - {searchResult.hits?.length}
        </div>
        <Modal open={open} setOpen={setOpen} jsonData={attributes} />

        <div class="flex flex-wrap items-center justify-center pb-8 ">
          {searchResult.hits?.map((item, i) => (
            <div key={i} class="p-4" onClick={() => handleClick(item)}>
              <ProductCard image={item.images} name={item.product_name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
