import React from "react";
import Button from "../../../Button.tsx";
import { addTemplateIcon } from "../../../../assets/icons/index.js";
import Template from "./Template.tsx";

const Templates = () => {
  return (
    <div className="absolute left-1/2 bottom-[90px] -translate-x-1/2 w-[311px] h-[40vh] p-4 bg-bgd-100 rounded-3xl z-[49] overflow-auto">
      <Button className="absolute top-4 right-4 z-10 text-[hsla(0,0%,100%,.5)] hover:text-[hsl(0,0%,100%)]">
        ー
      </Button>
      <div className="flex items-center gap-2">
        <span className="text-[hsla(0,0%,100%,.8)] text-base font-bold">
          TEMPLATES
        </span>
        <Button>
          <img src={addTemplateIcon} alt="" className="max-w-[22px]" />
        </Button>
      </div>
      <div className="mt-2">
        <Template title="deep"/>
      </div>
    </div>
  );
};

export default Templates;
