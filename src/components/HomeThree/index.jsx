import { useEffect, useState } from "react";
import datas from "../../data/products.json";
import SectionStyleFour from "../Helpers/SectionStyleFour";
import SectionStyleThree from "../Helpers/SectionStyleThree";
import SectionStyleTwo from "../Helpers/SectionStyleTwo";
import ViewMoreTitle from "../Helpers/ViewMoreTitle";
import Banner from "./Banner";
import BrandSection from "./BrandSection";
import CampaignCountDown from "./CampaignCountDown";
import ProductsAds from "./ProductsAds";
import LayoutHomeThree from "../Partials/LayoutHomeThree";
import SectionStyleOneHmThree from "../Helpers/SectionStyleOneHmThree";
import Ads from "./Ads";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Divider, UnstyledButton } from "@mantine/core";
import { Modal, Button, Group, Title, Text } from "@mantine/core";
export default function HomeThree() {
  const { products } = datas;
  const brands = [];
  products.forEach((product) => {
    brands.push(product.brand);
  });
  const [ads, setAds] = useState(false);
  const adsHandle = () => {
    setAds(false);
  };
  useEffect(() => {
    setAds(true);
  }, []);
  return (
    <>
      <LayoutHomeThree type={3} childrenClasses="pt-0">
        {ads && <Ads handler={adsHandle} />}
        <div className="btn w-5 h-5 "></div>
        <Banner className="banner-wrapper mb-[60px]" />
        <BrandSection
          type={3}
          sectionTitle="Shop by Brand"
          className="brand-section-wrapper mb-[60px]"
        />
        {/* <SectionStyleThree
          type={3}
          products={products[0]}
          sectionTitle="Our Core Features"
          seeMoreUrl="/"
          className="new-products mb-[60px]"
        /> */}
        <ProductsAds
          ads={[`${process.env.PUBLIC_URL}/assets/images/ads-3.png`]}
          className="products-ads-section mb-[60px]"
        />

        {/* <SectionStyleOneHmThree
          type={3}
          products={products}
          brands={brands}
          categoryTitle="Mobile & Tablet"
          sectionTitle="Gamer World"
          seeMoreUrl="/all-products"
          className="category-products mb-[60px]"
        /> */}

        <ViewMoreTitle
          className="top-selling-product mb-[60px]"
          seeMoreUrl="/"
          categoryTitle="How We Work"
        >
          <SectionStyleTwo
            type={3}
            products={products.slice(3, products.length)}
          />
        </ViewMoreTitle>
        <ProductsAds
          ads={[
            `${process.env.PUBLIC_URL}/assets/images/pic3.png`,
            `${process.env.PUBLIC_URL}/assets/images/pic1.jpg`,
          ]}
          sectionHeight="sm:h-[295px] h-full"
          className="products-ads-section mb-[60px]"
        />
        {/* <SectionStyleOneHmThree
          type={3}
          categoryBackground={`${process.env.PUBLIC_URL}/assets/images/section-category-2.jpg`}
          products={products.slice(4, products.length)}
          brands={brands}
          categoryTitle="Electronics"
          sectionTitle="Popular Sales"
          seeMoreUrl="/all-products"
          className="category-products mb-[60px]"
        /> */}
        <CampaignCountDown
          className="mb-[60px]"
          lastDate="2023-10-04 4:00:00"
        />
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#25D366",
            color: "#fff",
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <UnstyledButton
            component="a"
            href="https://wa.link/5o6dl1"
            target="_blank"
          >
            <IconBrandWhatsapp size={50} color="white" />
          </UnstyledButton>
        </div>
        {/* <SectionStyleFour
          products={products}
          sectionTitle="Popular Sales"
          seeMoreUrl="/all-products"
          className="category-products mb-[60px]"
        /> */}
      </LayoutHomeThree>
    </>
  );
}
