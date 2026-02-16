import { FaLeaf, FaHandHoldingHeart, FaGlobeAmericas } from 'react-icons/fa';

const WhyChoose = () => {
    return (
        <div className="py-16 px-6 bg-white rounded-t-[40px]">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-miluno text-center text-3xl text-black mb-12">WHY CHOOSE ECOTOTEX?</h2>
                
                <div className="space-y-8">
                    <Row icon={FaLeaf} title="Eco-Friendly" desc="100% biodegradable or recycled materials." />
                    <Row icon={FaHandHoldingHeart} title="Ethically Made" desc="Fair wages and safe working conditions." />
                    <Row icon={FaGlobeAmericas} title="Global Patterns" desc="Styles inspired by cultures around the world." />
                </div>
            </div>
        </div>
    );
};

const Row = ({ icon: Icon, title, desc }: any) => (
    <div className="flex items-center gap-6 p-4 hover:bg-sageTint/30 rounded-2xl transition-colors">
        <div className="h-12 w-12 flex items-center justify-center bg-forestMoss/10 rounded-full text-forestMoss">
            <Icon size={24} />
        </div>
        <div>
            <h3 className="font-mono font-bold text-deepSlate text-lg">{title}</h3>
            <p className="text-deepSlate/60 text-sm">{desc}</p>
        </div>
    </div>
);

export default WhyChoose;
