// pages/api/products.ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(
    "https://654c523b77200d6ba858ba96.mockapi.io/api/v1/product",
    {
      cache: "no-cache",
      next: {
        tags: ["products"],
      },
    }
  );
  const data = await response.json();
  res.status(200).json(data);
}
