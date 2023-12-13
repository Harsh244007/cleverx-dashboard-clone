import { cleanQuery } from "@/utils/util";
// import { NextApiRequest } from "next";
import Data from "@/Configs/JSON/data.json";

export function GET(req: Request) {
  const params = req?.url?.includes("?") ? cleanQuery(req?.url) : { count: 10, start: 0, country: [] };

  const limit = (params?.count && parseInt(params?.count as string)) || 10,
    skip = (params?.start && parseInt(params?.start as string)) || 0,
    countryArr = (params?.country && params?.country) || [];

  let copyOfData = Data;
  if (Array.isArray(countryArr) && countryArr?.length > 0) {
    copyOfData = Data.filter((opportunity) => opportunity?.countries?.some((item) => countryArr.includes(item)));
  }

  const totalItems = copyOfData.length;
  const totalPages = Math.ceil(totalItems / limit);
  const currentPage = Math.floor(skip / limit) + 1;

  const result = copyOfData.slice(skip, limit + skip);
  const pageDetails = { totalItems, totalPages, currentPage };
  return Response.json({ data: result, pageDetails }, { status: 200 });
}
