import Header from "@/Components/Header";
import { HeroTitle } from "@/Components/HeroSection/Hero";
import FilterSection from "@/Components/HeroSection/Filter";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex max-w-6xl m-auto w-full min-h-screen flex-col ">
        <HeroTitle />
        <FilterSection/>
      </main>
    </>
  );
}
