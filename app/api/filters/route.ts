import Data from "@/Configs/JSON/data.json";

export function GET() {
  const uniqueCountries = Array.from(new Set(Data.flatMap((opportunity) => opportunity.countries)));
  return Response.json(uniqueCountries, { status: 200 });
}
