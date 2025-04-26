// "use client";
// import axiosClient from "@/api/axiosClient";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import Image from "next/image";
// import { useState } from "react";

// interface Table {
//   id: number;
//   table_number: number;
// }
// interface Response<T> {
//   status: number;
//   message: string;
//   data: T;
// }
// export default function Home() {
//   const [isFormTable, setIsFormTable] = useState(false);
//   const [isFormMeja, setIsFormMeja] = useState(false);
//   const { data: table } = useQuery({
//     queryKey: ["tables"],
//     queryFn: () =>
//       axiosClient.get<Response<Table[]>>("http://localhost:8000/api/tables"),
//   });

//   const { data: menus } = useQuery({
//     queryKey: ["menus"],
//     queryFn: () => axiosClient.get("http://localhost:8000/api/menus"),
//   });
//   const queryClient = useQueryClient();
//   const { mutate: addTable } = useMutation({
//     mutationFn: async (payload: { table_number: number }) => {
//       const response = await axiosClient.post(
//         "http://localhost:8000/api/tables",
//         payload
//       );
//       return response.data;
//     },
//     onSuccess: () => {
//       setIsFormTable(false);
//       queryClient.invalidateQueries({ queryKey: ["tables"] });
//     },
//     onError: (data) => {
//       console.log(data.response);
//     },
//   });
//   const [payloadTable, setPayloadTable] = useState({});
//   const createTable = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     addTable({
//       ...payloadTable,
//       table_number: parseInt(payloadTable.table_number),
//     });
//   };
//   const [payload, setPayload] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image_url: null, // Menyimpan file gambar
//   });

//   const { mutate: addMenu } = useMutation({
//     mutationFn: async (formData: FormData) => {
//       const response = await axiosClient.post(
//         "http://localhost:8000/api/menus",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" }, // Penting!
//         }
//       );
//       return response.data;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["menus"] });
//       alert("Menu berhasil ditambahkan!");
//     },
//     onError: (error) => {
//       console.error("Gagal menambahkan menu:", error.response?.data);
//     },
//   });
//   const handleChangeTable = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setPayloadTable((prev) => ({ ...prev, [name]: value }));
//   };
//   const createMenu = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", payload.name);
//     formData.append("description", payload.description);
//     formData.append("price", payload.price);
//     formData.append("image_url", payload.image_url!); // File gambar

//     addMenu(formData);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setPayload((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files?.length) {
//       setPayload((prev) => ({ ...prev, image_url: e.target.files![0] }));
//     }
//   };
//   const handlePrint = async (id: number) => {
//     await axiosClient.get(`http://localhost:8000/api/tables/${id}/print-qr`);
//   };
//   console.log(menus);
//   return (
//     <div className="container flex gap-4 mx-auto">
//       <table>
//         <thead>
//           <tr>
//             <th>No</th>
//             <th>Table</th>
//             <th>Print</th>
//             <th>Qr</th>
//           </tr>
//         </thead>
//         <tbody>
//           {table?.data.data.map((table, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>Meja {table.table_number}</td>
//               <td>
//                 <button
//                   onClick={() => handlePrint(table.id)}
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 >
//                   Print
//                 </button>
//               </td>
//               <td>
//                 <img
//                   src={`${table.qr_code_url}`}
//                   alt="qr"
//                   width={300}
//                   height={300}
//                   className="aspect-auto "
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//         <tfoot>
//           <tr>
//             <td colSpan={2}>
//               {" "}
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={() => setIsFormTable(true)}
//               >
//                 Tambah Meja
//               </button>
//             </td>
//           </tr>
//         </tfoot>
//       </table>
//       <table>
//         <thead>
//           <tr>
//             <th>No</th>
//             <th>Table</th>
//             <th>Gambar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {menus?.data.data.map((menu, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>Meja {menu.name}</td>
//               <td>
//                 <img
//                   src={menu?.image_url || "/img/noimage.webp"}
//                   alt={menu.name}
//                   width={1000}
//                   height={1000}
//                   className=" -mt-6 h-80 w-full rounded-bl-3xl hover:ml-0 rounded-tr-3xl border border-gray-300 object-cover"
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//         <tfoot>
//           <tr>
//             <td colSpan={2}>
//               {" "}
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={() => setIsFormMeja(true)}
//               >
//                 Tambah Menu
//               </button>
//             </td>
//           </tr>
//         </tfoot>
//       </table>
//       {isFormTable && (
//         <div className="fixed top-0 left-0 w-full flex-col h-full bg-white bg-opacity-50 flex items-center justify-center">
//           <h1>Tambah Meja</h1>
//           <form onSubmit={createTable} className="flex flex-col gap-3">
//             <input
//               type="number"
//               name="table_number"
//               onChange={handleChangeTable}
//               placeholder="Nomor Meja"
//             />
//             <button className="p-2 rounded-md bg-blue-500" type="submit">
//               Tambah
//             </button>
//             <button
//               className="p-2 rounded-md bg-red-500"
//               onClick={() => setIsFormTable(false)}
//             >
//               close
//             </button>
//           </form>
//         </div>
//       )}
//       {isFormMeja && (
//         <div className="fixed top-0 left-0 w-full flex-col h-full bg-white bg-opacity-50 flex items-center justify-center">
//           <h1>Tambah Meja</h1>
//           <form
//             onSubmit={createMenu}
//             className="flex flex-col gap-4 p-4 border rounded-md max-w-md"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Nama Menu"
//               onChange={handleChange}
//               required
//               className="border p-2 rounded"
//             />
//             <textarea
//               name="description"
//               placeholder="Deskripsi"
//               onChange={handleChange}
//               required
//               className="border p-2 rounded"
//             />
//             <input
//               type="number"
//               name="price"
//               placeholder="Harga"
//               onChange={handleChange}
//               required
//               className="border p-2 rounded"
//             />
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleFileChange}
//               required
//               className="border p-2 rounded"
//             />
//             <button
//               type="submit"
//               className="bg-blue-500 text-white p-2 rounded"
//             >
//               Tambah Menu
//             </button>
//             <button
//               className="p-2 rounded-md bg-red-500"
//               onClick={() => setIsFormMeja(false)}
//             >
//               close
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }
