import ManifestoHero from '../components/ManifestoHero';
import FounderStory from '../components/FounderStory';
import TheProblem from '../components/TheProblem';
import TheResponse from '../components/TheResponse';
import CollectionShowcase from '../components/CollectionShowcase';
import ImpactSection from '../components/ImpactSection';
import ConsciousCarriers from '../components/ConsciousCarriers';
import MovementCTA from '../components/MovementCTA';
import ManifestoFooter from '../components/ManifestoFooter';

const Home = () => {
    return (
        <div className="min-h-screen bg-warmCream">
            <ManifestoHero />
            <FounderStory />
            <TheProblem />
            <TheResponse />
            <CollectionShowcase />
            <ImpactSection />
            <ConsciousCarriers />
            <MovementCTA />
            <ManifestoFooter />
        </div>
    );
};

export default Home;
