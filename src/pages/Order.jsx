import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import CoverSection from "../components/Shared/CoverSection";
import bannerImg from "../assets/shop/banner2.jpg";

import "react-tabs/style/react-tabs.css";
import useMenu from "../hooks/useMenu";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [menu] = useMenu();

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
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Order;
