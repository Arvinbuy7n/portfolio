"use client";

import React, { useContext, useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import ThemeSwitch from "../theme-toggle";
import "./mygrid.css";
import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import MySkills from "../griditems/Skills";
import { isMobile } from "react-device-detect";
import {
  BlogTdd,
  Ecommerce,
  ExpenseTrack,
  FoodDelivery,
} from "../griditems/Projects";
import { motion } from "framer-motion";
import { Resume } from "../griditems/Resume";
import { LayoutContext } from "@/context/layout-context";
import { About } from "../griditems/About";
import { Contact } from "../griditems/Contact";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const DragFromOutsideLayout = () => {
  const [mounted, setmounted] = useState(false);
  const { layoutState, layoutSmState } = useContext(LayoutContext);

  const [isDraggable, setIsDraggable] = useState(true);

  useEffect(() => {
    setmounted(true);
    setIsDraggable(!isMobile);

    const handleResize = () => {
      setIsDraggable(!isMobile);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#F6F2F2] dark:bg-[#090c10]">
      <ResponsiveReactGridLayout
        className=""
        layouts={{
          lg: layoutState,
          md: layoutState,
          sm: layoutState,
          xs: layoutState,
          xxs: layoutSmState,
        }}
        cols={{ lg: 4, md: 4, sm: 3, xs: 2, xxs: 2 }}
        compactType="vertical"
        rowHeight={280}
        width={1200}
        measureBeforeMount={false}
        isDraggable={isDraggable}
        isResizable={false}
        useCSSTransforms={mounted}
        margin={[16, 16]}
      >
        <div
          key={layoutState[0].i}
          style={{
            color: "rgb(240, 242, 248)",
          }}
          className="lg:px-8 px-4 dark:dark:bg-[#172439] bg-[#FFFFFF] dark:text-white text-[#0F1117] cursor-grab flex items-center rounded-[32px] overflow-hidden"
        >
          <About />
        </div>

        <div
          key={layoutState[1].i}
          className="overflow-hidden relative flex justify-center items-center dark:dark:bg-[#172439] bg-[#FFFFFF] rounded-[32px]"
        >
          <div className="">
            <ThemeSwitch />
            <p className="text-black dark:text-white absolute bottom-2 left-5 text-sm max-[481px]:text-[10px]">
              Click the icon to switch the theme.
            </p>
          </div>
        </div>
        <div
          key={layoutState[2].i}
          className=" rounded-[32px] overflow-hidden "
        >
          <FoodDelivery />
        </div>

        <div
          key={layoutState[3].i}
          className="overflow-hidden flex justify-center items-center dark:bg-[#172439] dark:text-white bg-[#FFFFFF] text-[#0F1117] rounded-[32px] object-contain"
        >
          <Resume />
        </div>

        <div
          key={layoutState[4].i}
          className=" dark:text-white  text-[#0F1117] rounded-[32px] overflow-hidden "
        >
          <BlogTdd />
        </div>

        <div
          key={layoutState[5].i}
          className="flex justify-center items-center dark:bg-[#0d1117D9] dark:text-white bg-[#FFFFFF] text-[#0F1117] rounded-[32px] overflow-hidden"
        >
          <Ecommerce />
        </div>

        <div
          key={layoutState[6].i}
          className="overflow-hidden flex dark:bg-[#172439] px-8 pt-8 pb-12 max-[481px]:px-2 max-[481px]:py-4 bg-[#FFFFFF] dark:text-white text-[#0F1117] rounded-[32px] "
        >
          <MySkills />
        </div>

        <div
          key={layoutState[7].i}
          className="overflow-hidden flex justify-center items-center relative dark:bg-[#172439] dark:text-white bg-[#FFFFFF] text-[#0F1117] rounded-[32px] text-[50px]"
        >
          <FaGithub />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute bottom-3 left-3 bg-slate-400 rounded-full cursor-pointer"
            onMouseDown={(e) => {
              e.stopPropagation();
              window.open("https://github.com/Arvinbuy7n");
            }}
          >
            <MdArrowOutward size={40} className="p-3" />
          </motion.button>
        </div>

        <div
          key={layoutState[8].i}
          className="overflow-hidden flex justify-center items-center dark:text-white text-[#0F1117] rounded-[32px] bg-[#FFFFFF] dark:bg-[#172439]"
        >
          <Contact />
        </div>

        <div
          key={layoutState[9].i}
          className=" dark:text-white  text-[#0F1117] rounded-[32px] overflow-hidden "
        >
          <ExpenseTrack />
        </div>
      </ResponsiveReactGridLayout>
    </div>
  );
};
