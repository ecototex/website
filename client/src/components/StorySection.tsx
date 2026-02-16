const StorySection = () => {
  return (
    <div className="px-6 pt-10 pb-6 md:pt-20 md:pb-10 bg-sageTint">
      <div className="max-w-3xl mx-auto text-center">
        <h2 
          className="font-miluno text-black text-lg md:text-[28px] tracking-wider mb-4 md:mb-6 font-bold"
          style={{ textShadow: '0.8px 0 0 currentColor' }}
        >
          OUR STORY & PHILOSOPHY
        </h2>
        <p className="font-milonga text-sm md:text-xl text-deepSlate leading-relaxed opacity-90">
          At EcoTotex, we don’t just create bags; we lead a movement toward a sustainable future. 
          Our mission is to replace plastic with purpose. Every bag in our collection is a testament 
          to the fact that you don’t have to sacrifice style for sustainability.
        </p>
      </div>
    </div>
  );
};

export default StorySection;
