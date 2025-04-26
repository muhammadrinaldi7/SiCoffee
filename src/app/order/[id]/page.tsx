// "use client";

// import { useFetchOrderTable } from "@/api/orders/fetchOrder";
// import { useParams } from "next/navigation";
// import { useState } from "react";

// export default function OrderPage() {
//   const params = useParams();
//   const [message, setMessage] = useState("");
//   const { data: order } = useFetchOrderTable(
//     `http://localhost:8000/api/orders/table/${params.id}`
//   );
//   console.log(order);
//   return (
//     <div>
//       <h1>Order {params.id}</h1>
//     </div>
//   );
// }
