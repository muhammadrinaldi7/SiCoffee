import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal flex flex-col md:flex-row justify-between items-center bg-[#E60000] text-neutral-content p-10">
      <aside className="flex flex-col justify-center items-start">
        <div className="flex items-center">
          <Image
            src="/redicon.png"
            alt="logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <p className="ml-2 font-climate-crisis">RED LANE</p>
        </div>
        <p className="text-sm md:w-1/2 text-justify text-wrap opacity-80">
          Alamat : Jl. A. Yani No.KM-6, Pemurus Luar, Kec. Banjarmasin Selatan,
          Kota Banjarmasin, Kalimantan Selatan
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
        <h6 className="footer-title">Maps</h6>
        <div className="flex justify-center items-center px-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.155094821934!2d114.62450557481012!3d-3.3510858966236294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de427000ea89291%3A0xcdda70cd4a5b3f33!2sRed%20Lane%20Coffee%20%26%20Space!5e1!3m2!1sid!2sid!4v1745651695002!5m2!1sid!2sid"
            className="w-full h-64 rounded-lg shadow-2xl"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </nav>
    </footer>
  );
};
