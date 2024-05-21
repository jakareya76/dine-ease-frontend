import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import CoverSection from "../components/Shared/CoverSection";
import bannerImg from "../assets/shop/banner2.jpg";

import "react-tabs/style/react-tabs.css";
import useMenu from "../hooks/useMenu";
import OrderTab from "../components/Shared/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const [menu] = useMenu();

  const categories = ["salad", "pizza", "soups", "dessert", "drinks"];
  const { category } = useParams();

  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);

  console.log(tabIndex);

  const dessert = menu.filter((item) => {
    return item.category === "dessert";
  });

  const soup = menu.filter((item) => {
    return item.category === "soup";
  });

  const salad = menu.filter((item) => {
    return item.category === "salad";
  });

  const pizza = menu.filter((item) => {
    return item.category === "pizza";
  });
  const drinks = menu.filter((item) => {
    return item.category === "drinks";
  });

  return (
    <>
      <Helmet>
        <title>Dine Ease | Order</title>
      </Helmet>
      <CoverSection
        img={bannerImg}
        title={"ORDER FOOD"}
        text={"Would you like to try a dish?"}
      />

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="flex items-center justify-center my-10">
          <TabList className="flex gap-5">
            <Tab className="font-semibold cursor-pointer">Salad</Tab>
            <Tab className="font-semibold cursor-pointer">Pizza</Tab>
            <Tab className="font-semibold cursor-pointer">soups</Tab>
            <Tab className="font-semibold cursor-pointer">desserts</Tab>
            <Tab className="font-semibold cursor-pointer">drinks</Tab>
          </TabList>
        </div>
        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Order;
