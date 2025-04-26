import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { promo } from "@/utils/dataDb";
import Image from "next/image";
import React from "react";

export const Promo = () => {
  return (
    <div id="promo" className="px-1 py-[5%] md:px-[10%] bg-white min-h-fit">
      <div className="w-full gap-6 px-4 flex flex-col items-center ">
        <h1 className="text-3xl font-bold opacity-80 text-[#E60000]">
          Promo and Event
        </h1>
        <div className="flex flex-col gap-4 md:justify-between justify-center items-center md:flex-row">
          <p className="text-sm text-justify md:text-lg md:w-1/2 text-gray-500 mb-4">
            Temukan berbagai promo menarik dan event seru di Red Lane Coffee!
            Dari diskon spesial hingga acara komunitas, kami hadir untuk
            memberikan pengalaman tak terlupakan bagi setiap pencinta kopi.
          </p>
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {promo.data.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="w-full flex flex-col items-center"
                >
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    width={1000}
                    height={1000}
                    className="-mt-6 h-96 w-full rounded-bl-3xl hover:ml-0 rounded-tr-3xl border border-gray-300 object-cover"
                  />
                  <h1 className="text-xl font-bold mt-4">{item.name}</h1>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
