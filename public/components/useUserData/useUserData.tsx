import { useEffect, useState } from "react";

export default function useProduct(data: any){
  const [status, setStatus] = useState<boolean>()

  console.log(data)

  return status
}