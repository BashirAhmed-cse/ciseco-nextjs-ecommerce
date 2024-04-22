import React from "react";
import SectionHowItWork from "@/components/SectionHowItWork/SectionHowItWork";

import SectionHero2 from "@/components/SectionHero/SectionHero2";

import SectionSliderProductCard from "@/components/SectionSliderProductCard";

import Heading from "@/components/Heading/Heading";

import { PRODUCTS, SPORT_PRODUCTS } from "@/data/data";
import SectionGridFeatureItems from "@/components/SectionGridFeatureItems";

function PageHome() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <SectionHero2 />

      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        <SectionSliderProductCard
          data={[
            PRODUCTS[4],
            SPORT_PRODUCTS[5],
            PRODUCTS[7],
            SPORT_PRODUCTS[1],
            PRODUCTS[6],
          ]}
        />

        <SectionSliderProductCard
          heading="Best Sellers"
          subHeading="Best selling of the month"
        />

        <SectionGridFeatureItems />

        <div className="py-24 lg:py-32 border-t border-slate-200 dark:border-slate-700">
          <SectionHowItWork />
        </div>
      </div>
    </div>
  );
}

export default PageHome;
