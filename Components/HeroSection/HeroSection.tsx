"use client";
import { Suspense, memo, useState } from "react";
import FilterSection from "./Filter";
import RenderSurvey from "./Survey";
import SurveyContextProvider from "@/Configs/contexts/SurveyProvider";

const HeroSection = () => {
  return (
    <>
      <section className="flex justify-between">
        <SurveyContextProvider>
          <Suspense>
            <FilterSection />
          </Suspense>

          <Suspense>
            <RenderSurvey  />
          </Suspense>
        </SurveyContextProvider>
      </section>
    </>
  );
};
export default memo(HeroSection);
