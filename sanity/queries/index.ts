import { client } from "../lib/client";
import {PRODUCT_BY_SLUG_QUERY,BRANDS_QUERY, BRAND_QUERY, LATEST_BLOG_QUERY, GET_ALL_BLOG, SINGLE_BLOG_QUERY, BLOG_CATEGORIES, OTHERS_BLOG_QUERY, DEAL_PRODUCTS} from "./query"


const getCategories = async (quantity?: number) => {
  try {
    const query = quantity
      ? `*[_type == 'category'] | order(name asc) [0...$quantity] {
          ...,
          "productCount": count(*[_type == "product" && references(^._id)])
        }`
      : `*[_type == 'category'] | order(name asc) {
          ...,
          "productCount": count(*[_type == "product" && references(^._id)])
        }`;

    const params = quantity ? { quantity } : {};
    const data = await client.fetch(query, params);

    return data;
  } catch (error) {
    console.log("Error fetching categories", error);
    return [];
  }
};


const getAllBrands = async () => {
  try {
    const data = await client.fetch(BRANDS_QUERY);
    return data ?? [];
  } catch (error) {
    console.log("Error fetching all brands:", error);
    return [];
  }
};

const getBrand = async (slug: string) => {
  try {
    const brand = await client.fetch(BRAND_QUERY, { slug });
    return brand || null;
  } catch (error) {
    console.error("Error fetching brand by slug:", error);
    return null;
  }
}

const getAllBlogs = async (quantity: number) => {
  try {
    const data = await client.fetch(GET_ALL_BLOG, { quantity });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching all blogs:", error);
    return [];
  }
};



const getLatestBlogs = async () => {
  try {
    const data = await client.fetch(LATEST_BLOG_QUERY);
    return data ?? [];
  } catch (error) {
    console.log("Error fetching latest Blogs:", error);
    return [];
  }
};

const getProductBySlug = async (slug: string) => {
  try {
    const product = await client.fetch(PRODUCT_BY_SLUG_QUERY, { slug });
    return product || null;
  } catch (error) {
    console.error("Error fetching product by slug:", error);
    return null;
  }
};

const getDealProducts = async () => {
  try {
    const data = await client.fetch(DEAL_PRODUCTS);
    return data ?? [];
  } catch (error) {
    console.log("Error fetching deal products:", error);
    return [];
  }
};

// 1. Lấy 1 blog theo slug
const getSingleBlog = async (slug: string) => {
  try {
    const data = await client.fetch(SINGLE_BLOG_QUERY, { slug });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching single blog:", error);
    return [];
  }
};

// 2. Lấy danh sách category blog
const getBlogCategories = async () => {
  try {
    const data = await client.fetch(BLOG_CATEGORIES);
    return data ?? [];
  } catch (error) {
    console.log("Error fetching blog categories:", error);
    return [];
  }
};

// 3. Lấy các bài viết khác (trừ slug hiện tại)
const getOthersBlog = async (slug: string, quantity: number) => {
  try {
    const data = await client.fetch(OTHERS_BLOG_QUERY, { slug, quantity });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching other blogs:", error);
    return [];
  }
};

export {getProductBySlug,getCategories, getAllBrands,getBrand, getLatestBlogs, getAllBlogs, getSingleBlog, getBlogCategories, getOthersBlog, getDealProducts}