"use client";
import React from "react";
import "../globals.css";
import { Box, Flex, Tabs, Text } from "@radix-ui/themes";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { tabsTitleHomePage } from "../statics/objects";
import Cardcomponent from "./card";

const tabsComponent = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft + 500;
  };

  return (
    <Box className="space-y-4 ">
      <Tabs.Root defaultValue={"Stocks"}>
        <Tabs.List>
          {tabsTitleHomePage.map((item) => (
            <Tabs.Trigger key={item} value={item}>
              {item}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <Box className="p-2 relative">
          <div className="absolute left-6 top-1/3 z-20">
            <button
              onClick={slideLeft}
              className="  p-2 bg-white rounded-full  shadow-lg border   hover:text-sky-600"
            >
              <MdChevronLeft className=" size-8  font-extrabold"></MdChevronLeft>
            </button>
          </div>
          {tabsTitleHomePage.map((item) => (
            <Tabs.Content key={item} value={item}>
              <Flex
                id="slider"
                gap={"5"}
                className="z-20  overflow-x-auto hide-scrollbar scroll-smooth  scroll-mr-10    py-3 pr-3"
              >
                <Cardcomponent StockDataLable={item}></Cardcomponent>
              </Flex>
            </Tabs.Content>
          ))}
          <div className="absolute right-6 top-1/3 z-20 ">
            <button
              onClick={slideRight}
              className="  p-2 bg-white rounded-full animate-bounce-x  shadow-lg border  hover:text-sky-600"
            >
              <MdChevronRight className=" size-8  font-extrabold"></MdChevronRight>
            </button>
          </div>
        </Box>
      </Tabs.Root>
    </Box>
  );
};

export default tabsComponent;
