import {  ChevronRightIcon } from "@radix-ui/react-icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Product_First, Product_Second } from "../statics/objects";
import React from "react";
import Link from "next/link";

interface prop {
  title: string;
  textColor: string;
  backgroundHoverColor: string;
}

const Dropdownmenu = ({ title, textColor, backgroundHoverColor }: prop) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className={` p-1.5 ${textColor}  ${backgroundHoverColor} rounded-full outline-none hover:bg-gray-100`}
      >
        {title}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        sideOffset={5}
        className="cursor-pointer  min-w-[260px] bg-white border rounded-md p-2  will-change-[opacity,transform]  "
      >
        {Product_First.map((link) =>
          link.sub ? (
            <DropdownMenu.Sub key={link.label}>
              <DropdownMenu.SubTrigger className=" leading-none rounded-sm flex space-x-2  items-center p-2  select-none outline-none data-[disabled]:text-zinc-200 data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100">
                {link.logo}
                <div className="flex-row ">
                  <p className="text-lg">{link.label}</p>
                  <p className="font-light text-xs"> {link.description}</p>
                </div>
                <ChevronRightIcon className="text-2xl" />
              </DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent
                sideOffset={9}
                className="cursor-pointer min-w-[260px] bg-white border rounded-md p-2  will-change-[opacity,transform]  "
              >
                {link.subs?.map((item) => (
                  <Link href={item.href} key={item.label}>
                    <DropdownMenu.Item className=" leading-none rounded-sm flex space-x-2  items-center p-2  select-none outline-none data-[disabled]:text-zinc-200 data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100">
                      <p className="text-lg">{item.label}</p>
                    </DropdownMenu.Item>
                  </Link>
                ))}
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>
          ) : (
            <Link href={link.href} key={link.label}>
              <DropdownMenu.Item className="  leading-none rounded-sm flex space-x-2  items-center p-2  select-none outline-none data-[disabled]:text-zinc-200 data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100">
                {link.logo}
                <div className="flex-row ">
                  <p className="text-lg">{link.label}</p>
                  <p className="font-light text-xs"> {link.description}</p>
                </div>
              </DropdownMenu.Item>
            </Link>
          )
        )}
        <DropdownMenu.Item className=" font-bold text-gray-500 text-xs  rounded-md flex-col items-left p-2   select-none outline-none cursor-default">
          ABOUT
        </DropdownMenu.Item>
        {Product_Second.map((link) => (
          <Link href={link.href} key={link.label}>
            <DropdownMenu.Item className="  rounded-md   p-2  select-none outline-none data-[disabled]:text-zinc-200 data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100">
              <div className="flex-row ">
                <p className="">{link.label}</p>
              </div>
            </DropdownMenu.Item>
          </Link>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdownmenu;
