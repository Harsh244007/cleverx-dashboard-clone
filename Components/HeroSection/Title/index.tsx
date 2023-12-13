import dynamic from "next/dynamic";

const HeroTitle =dynamic(()=>import("./Hero"))

export default HeroTitle