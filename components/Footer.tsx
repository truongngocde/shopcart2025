import Container from "./Container";
import React from "react";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { categoriesData, quickLinksData } from "@/containts/data";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-600 text-sm leading-relaxed">
              Discover curated furniture collections at Shopcartyt, blending
              style and comfort to elevate your living spaces.
            </p>

            <SocialMedia
              className="text-darkColor/60 "
              iconClassName=" border-darkColor/60 hover:border-shop_lighy_green hover:text-shop_light_green"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>
          <div>
            <p className="text-gray-800 font-semibold text-base mb-2">
              Quick Links
            </p>
            <ul className="space-y-3 mt-4">
              {quickLinksData.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-gray-800 font-semibold text-base mb-2">
              Categories
            </p>
            <ul className="space-y-3 mt-4">
              {categoriesData.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={`/category/${item?.href}`}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-gray-800 font-semibold text-base mb-2">
              Newsletter
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Subscribe to our newsletter to receive updates and exclusive
              offers
            </p>

            <form className="space-y-3">
              <Input placeholder="Enter your email" type="email" required />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div>
            © {new Date().getFullYear()} <Logo className="text-sm" />. All
            rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
