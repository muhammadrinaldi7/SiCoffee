"use client";

// import axiosClient from "@/api/axiosClient";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { categories } from "@/utils/dataDb";
// import { fixImageUrl } from "@/utils/fixImageUrl";
// import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
export interface Menu {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  is_available: number; // Kalau mau lebih aman bisa dibuat boolean juga nanti
  created_at: string;
  updated_at: string;
  categories_name: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  menus: Menu[];
}

export interface CategoriesResponse {
  status: string;
  message: string;
  data: Category[];
}

export const Product = () => {
  // const { data } = useQuery({
  //   queryKey: ["product"],
  //   queryFn: async () => {
  //     const categories = await axiosClient.get<CategoriesResponse>(
  //       "http://localhost:8000/api/categories"
  //     );
  //     return categories.data;
  //   },
  // });
  const { data } = categories; // useQuery({

  console.log(data);
  return (
    <div
      id="product"
      className="py-[5%] px-2 scroll-smooth md:px-[10%] bg-[#E60000] min-h-dvh"
    >
      <div className="w-full gap-4 px-4 flex flex-col items-center ">
        <h1 className="text-3xl font-bold opacity-80 text-white">
          Our Product
        </h1>
        <h1 className="text-5xl font-bold mb-4 text-white">Categories</h1>
        <div className="flex flex-col md:flex-row gap-6">
          {data?.map((cat, index) => (
            <div
              key={index}
              className="w-full flex items-center flex-col gap-2 md:w-1/2"
            >
              <Carousel className="shadow-lg drop-shadow-xl shadow-white/20 overflow-hidden rounded-lg">
                <CarouselContent>
                  {cat.menus.map((menu, index) => (
                    <CarouselItem
                      key={index}
                      className="drop-shadow-xl aspect-auto size-fit rounded-lg shadow-2xl"
                    >
                      {/* w-full aspect-auto size-fit rounded-lg shadow-2xl */}

                      <Image
                        src={
                          "https://instagram.fbdj5-1.fna.fbcdn.net/v/t51.2885-15/489775024_17856431676407490_5494981036165178158_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fbdj5-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QFnz0C-UmzlYlED3NEgGJyHzRc0thwmOevwLmaAmuIDc4QWxBJ0Vzf1a9gePuIf6iY24gimEZ0BVmTCx1Wou7TO&_nc_ohc=GBQIVP3g5WsQ7kNvwHWL8oj&_nc_gid=YVxD_0H73ITu9xdLFV_OeA&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzYwNjgzNDE4MjM2ODI2NTM2MQ%3D%3D.3-ccb7-5&oh=00_AfG-pl3sByyJ7d6dlvZw9IJVFvbwa89y6jDaeRA7xXvpWA&oe=681257D0&_nc_sid=7a9f4b"
                        }
                        alt={menu.name}
                        width={1000}
                        height={1000}
                        className="w-full aspect-auto object-center rounded-lg shadow-2xl"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <h1 className="text-3xl font-bold opacity-80 text-white">
                {cat.name}
              </h1>
              <p className="text-white text-center opacity-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                aut a architecto quibusdam corrupti tempora, explicabo nam
                dolorem, exercitationem alias in fugiat, vero blanditiis? Dolore
                doloremque autem praesentium ea corporis.
              </p>
            </div>
          ))}
          {/* <div className="w-full flex items-center flex-col gap-2 md:w-1/2">
            <img
              src="/lychemojito.jpg"
              className="w-full aspect-auto size-fit rounded-lg shadow-2xl"
            />
            <h1 className="text-3xl font-bold opacity-80 text-white">
              Mint Cooler
            </h1>
            <p className="text-white text-center opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aut
              a architecto quibusdam corrupti tempora, explicabo nam dolorem,
              exercitationem alias in fugiat, vero blanditiis? Dolore doloremque
              autem praesentium ea corporis.
            </p>
          </div>
          <div className="w-full flex items-center flex-col gap-2 md:w-1/2">
            <img
              src="/mintcooler.jpg"
              className="w-full aspect-auto size-fit rounded-lg shadow-2xl"
            />
            <h1 className="text-3xl font-bold opacity-80 text-white">
              Lychee Mojito
            </h1>
            <p className="text-white text-center opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aut
              a architecto quibusdam corrupti tempora, explicabo nam dolorem,
              exercitationem alias in fugiat, vero blanditiis? Dolore doloremque
              autem praesentium ea corporis.
            </p>
          </div>
          <div className="w-full flex items-center flex-col gap-2 md:w-1/2">
            <img
              src="/mintcooler.jpg"
              className="w-full aspect-auto size-fit rounded-lg shadow-2xl"
            />
            <h1 className="text-3xl font-bold opacity-80 text-white">
              Lychee Mojito
            </h1>
            <p className="text-white text-center opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aut
              a architecto quibusdam corrupti tempora, explicabo nam dolorem,
              exercitationem alias in fugiat, vero blanditiis? Dolore doloremque
              autem praesentium ea corporis.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};
