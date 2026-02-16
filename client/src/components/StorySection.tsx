const StorySection = () => {
  return (
    <div className="px-6 pt-20 pb-10 bg-sageTint">
      <div className="max-w-3xl mx-auto text-center">
        <h2 
          className="font-miluno text-black text-[28px] tracking-wider mb-6 font-bold"
          style={{ textShadow: '0.8px 0 0 currentColor' }}
        >
          OUR STORY & PHILOSOPHY
        </h2>
        <p className="font-milonga text-xl text-deepSlate leading-relaxed opacity-90">
          At EcoTotex, we don’t just create bags; we lead a movement toward a sustainable future. 
          Our mission is to replace plastic with purpose. Every bag in our collection is a testament 
          to the fact that you don’t have to sacrifice style for sustainability.
        </p>
      </div>
    </div>
  );
};

export default StorySection;
