import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import HeroTitle from "@/Components/HeroSection/Title";
import HeroSection from "@/Components/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex max-w-6xl m-auto w-full min-h-screen flex-col pt-16 pb-20">
        <HeroTitle />
        <HeroSection/>
      </main>
      <Footer/>
    </>
  );
}
