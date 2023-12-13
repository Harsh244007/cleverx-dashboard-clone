const HeroTitle = () => {
  const HeroText = {
    title: "Explore opportunities",
    subTitle: "Browse exciting paid opportunities you can take up today.",
    learnMore: "Learn more",
  };
  return (
    <article className="flex flex-col mt-5 lg:mt-8">
      <h2 className="heroTitle text-xl lg:text-2xl ">{HeroText.title}</h2>
      <h4 className="heroSubTitle gap-1 my-3 lg:my-4 text-sm lg:text-base">
        {HeroText.subTitle}
        <span className="sm:hidden lg:inline">{HeroText.learnMore}</span>
      </h4>
    </article>
  );
};
export default HeroTitle