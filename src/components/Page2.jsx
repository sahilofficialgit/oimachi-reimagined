import React from "react";
import Page2Herotxt from "./Page2Herotxt";
import Page2Panels from "./Page2Panels";

const Page2 = () => {
  return (
    <div className="min-h-screen w-full box-border bg-[#F0F0F0] px-3 pb-30">
      <Page2Herotxt />
      <Page2Panels />
    </div>
  );
};

export default Page2;