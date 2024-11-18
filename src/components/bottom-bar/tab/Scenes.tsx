import React, { useRef, useState } from "react";
import { slowGardenPreview } from "../../../assets/images";
import Button from "../../Button.tsx";

const Scenes = () => {
  const scenesRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const mouseCoords = useRef({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });
  const handleDragStart = (e: any) => {
    if (!scenesRef.current) return;
    const slider = scenesRef.current;
    const startX = e.pageX - slider.offsetLeft;
    const startY = e.pageY - slider.offsetTop;
    const scrollLeft = slider.scrollLeft;
    const scrollTop = slider.scrollTop;
    mouseCoords.current = { startX, startY, scrollLeft, scrollTop };
    setIsMouseDown(true);
    document.body.style.cursor = "grabbing";
  };
  const handleDragEnd = () => {
    setIsMouseDown(false);
    if (!scenesRef.current) return;
    document.body.style.cursor = "default";
  };
  const handleMouseLeave = () => {
    setIsMouseDown(false);
    if (!scenesRef.current) return;
    document.body.style.cursor = "default";
  };
  const handleDrag = (e: any) => {
    if (!isMouseDown || !scenesRef.current) return;
    e.preventDefault();
    const slider = scenesRef.current;
    const x = e.pageX - slider.offsetLeft;
    const y = e.pageY - slider.offsetTop;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    const walkY = (y - mouseCoords.current.startY) * 1.5;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
    slider.scrollTop = mouseCoords.current.scrollTop - walkY;
  };

  return (
    <div className="absolute left-1/2 bottom-[90px] -translate-x-1/2 w-[90%] max-w-[1092px] bg-bgd-100 rounded-3xl z-[49]">
      <Button className="absolute top-0.5 right-4 z-10 text-[hsla(0,0%,100%,.5)] hover:text-[hsl(0,0%,100%)]">ー</Button>
      <div className="w-[192px] h-full absolute bottom-0 left-0 bg-gradient-to-r from-[rgb(18,18,18)] to-[rgb(18,18,18)]/0 rounded-3xl pointer-events-none"></div>
      <div
        ref={scenesRef}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseMove={handleDrag}
        onMouseLeave={handleMouseLeave}
        className="scrollbar flex items-center gap-4 overflow-auto mx-4 my-6 w-[calc(100%-32px)] whitespace-nowrap"
      >
        <img
          src={slowGardenPreview}
          alt=""
          className={`max-w-[250px] sm:max-w-[392px] ${
            isMouseDown ? "cursor-grabbing" : "cursor-pointer"
          }`}
          draggable={false}
        />
        <img
          src={slowGardenPreview}
          alt=""
          className={`max-w-[250px] sm:max-w-[392px] ${
            isMouseDown ? "cursor-grabbing" : "cursor-pointer"
          }`}
          draggable={false}
        />
        <img
          src={slowGardenPreview}
          alt=""
          className={`max-w-[250px] sm:max-w-[392px] ${
            isMouseDown ? "cursor-grabbing" : "cursor-pointer"
          }`}
          draggable={false}
        />
        <img
          src={slowGardenPreview}
          alt=""
          className={`max-w-[250px] sm:max-w-[392px] ${
            isMouseDown ? "cursor-grabbing" : "cursor-pointer"
          }`}
          draggable={false}
        />
        <img
          src={slowGardenPreview}
          alt=""
          className={`max-w-[250px] sm:max-w-[392px] ${
            isMouseDown ? "cursor-grabbing" : "cursor-pointer"
          }`}
          draggable={false}
        />
        <img
          src={slowGardenPreview}
          alt=""
          className={`max-w-[250px] sm:max-w-[392px] ${
            isMouseDown ? "cursor-grabbing" : "cursor-pointer"
          }`}
          draggable={false}
        />
        <img
          src={slowGardenPreview}
          alt=""
          className={`max-w-[250px] sm:max-w-[392px] ${
            isMouseDown ? "cursor-grabbing" : "cursor-pointer"
          }`}
          draggable={false}
        />
        <img
          src={slowGardenPreview}
          alt=""
          className={`max-w-[250px] sm:max-w-[392px] ${
            isMouseDown ? "cursor-grabbing" : "cursor-pointer"
          }`}
          draggable={false}
        />
        <img
          src={slowGardenPreview}
          alt=""
          className={`max-w-[250px] sm:max-w-[392px] ${
            isMouseDown ? "cursor-grabbing" : "cursor-pointer"
          }`}
          draggable={false}
        />
        <img
          src={slowGardenPreview}
          alt=""
          className={`max-w-[250px] sm:max-w-[392px] ${
            isMouseDown ? "cursor-grabbing" : "cursor-pointer"
          }`}
          draggable={false}
        />
        <img
          src={slowGardenPreview}
          alt=""
          className={`max-w-[250px] sm:max-w-[392px] ${
            isMouseDown ? "cursor-grabbing" : "cursor-pointer"
          }`}
          draggable={false}
        />
        <img
          src={slowGardenPreview}
          alt=""
          className={`max-w-[250px] sm:max-w-[392px] ${
            isMouseDown ? "cursor-grabbing" : "cursor-pointer"
          }`}
          draggable={false}
        />
        <img
          src={slowGardenPreview}
          alt=""
          className={`max-w-[250px] sm:max-w-[392px] ${
            isMouseDown ? "cursor-grabbing" : "cursor-pointer"
          }`}
          draggable={false}
        />
        <img
          src={slowGardenPreview}
          alt=""
          className={`max-w-[250px] sm:max-w-[392px] ${
            isMouseDown ? "cursor-grabbing" : "cursor-pointer"
          }`}
          draggable={false}
        />
      </div>
      <div className="w-[192px] h-full absolute bottom-0 right-0 bg-gradient-to-l from-[rgb(18,18,18)] to-[rgb(18,18,18)]/0 rounded-3xl pointer-events-none"></div>
    </div>
  );
};

export default Scenes;
