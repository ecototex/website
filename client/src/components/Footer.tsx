const Footer = () => {
    return (
        <footer className="bg-white text-deepSlate py-12 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <img 
                    src="/assets/images/ECO TOTEX_logo.png" 
                    alt="ECOTOTEX" 
                    className="h-32 mx-auto mb-6 object-contain"
                />
                <p className="text-deepSlate/60 text-sm mb-8">
                    Join the movement against plastic pollution. One bag at a time.
                </p>
                <div className="flex justify-center gap-6 mb-8 text-sm font-mono text-leafGreen">
                    <a href="#" className="hover:text-deepSlate transition-colors">INSTAGRAM</a>
                    <a href="#" className="hover:text-deepSlate transition-colors">WHATSAPP</a>
                    <a href="#" className="hover:text-deepSlate transition-colors">EMAIL</a>
                </div>
                <div className="text-deepSlate/20 text-xs font-mono">
                    © 2026 ECOTOTEX. ALL RIGHTS RESERVED.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
