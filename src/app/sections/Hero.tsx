import Image from "next/image";

export const Hero = () => {
  return (
    <div
      id="home"
      className="hero px-1 md:px-[10%] bg-white flex items-center justify-center min-h-screen"
    >
      <div className="hero-content w-full flex-col lg:flex-row-reverse">
        <div className="flex px-1 justify-center items-center w-full">
          <Image
            src={"/redlaneban.jpg"}
            alt="hero"
            width={1000}
            height={1000}
            className="object-center aspect-auto rounded-lg shadow-2xl"
          />
        </div>
        <div>
          <h1 className="text-2xl opacity-80 font-bold">The art of brewing!</h1>
          <h1 className="text-3xl lg:text-5xl font-bold">
            Find your moment at <br />
            <span className="text-[#E60000] font-climate-crisis">REDLANE.</span>
          </h1>
          <p className="py-6">
            Selamat datang di Red Lane Coffee!, coffee shop yang hadir bukan
            hanya untuk menyajikan kopi terbaik, tetapi juga untuk merangkai
            momen bermakna bersama setiap tegukan. Kami percaya, setiap cangkir
            punya cerita dan kamu adalah bagian dari kisah kami.
          </p>
          <button className="btn border-none bg-[#E60000] text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
