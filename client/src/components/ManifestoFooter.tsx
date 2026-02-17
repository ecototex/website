const ManifestoFooter = () => {
    return (
        <footer className="bg-deepEarth border-t border-warmCream/5 py-16 px-gutter">
            <div className="max-w-5xl mx-auto">
                {/* Top Row */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16">
                    {/* Logo + Tagline */}
                    <div className="md:col-span-5">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/images/ECO TOTEX_header_logo.png`}
                            alt="Eco Totex"
                            className="h-10 object-contain mb-4 opacity-70"
                        />
                        <p className="font-body text-warmCream/40 text-sm leading-relaxed max-w-xs">
                            Your partner in carrying style, comfort, and a greener tomorrow.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-3">
                        <h4 className="font-mono text-caption text-warmCream/30 uppercase tracking-[0.2em] mb-4">
                            Connect
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://wa.me/917356939056"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-body text-sm text-warmCream/50 hover:text-warmCream transition-colors"
                                >
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/eco.totex"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-body text-sm text-warmCream/50 hover:text-warmCream transition-colors"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:ecototex@gmail.com"
                                    className="font-body text-sm text-warmCream/50 hover:text-warmCream transition-colors"
                                >
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-4">
                        <h4 className="font-mono text-caption text-warmCream/30 uppercase tracking-[0.2em] mb-4">
                            Explore
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <button
                                    onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="font-body text-sm text-warmCream/50 hover:text-warmCream transition-colors"
                                >
                                    Shop Collection
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => document.getElementById('founder-story')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="font-body text-sm text-warmCream/50 hover:text-warmCream transition-colors"
                                >
                                    Our Story
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="font-body text-sm text-warmCream/50 hover:text-warmCream transition-colors"
                                >
                                    Back to Top
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-warmCream/10 mb-8" />

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="font-mono text-[10px] text-warmCream/20 tracking-wider uppercase">
                        © 2026 Eco Totex. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <p className="font-body text-xs text-warmCream/25 italic">
                            Made with purpose, not plastic. | Designed by Polaroid Dosa
                        </p>
                        <img
                            src={`${import.meta.env.BASE_URL}assets/images/polaroid-dosa.png`}
                            alt="Polaroid Dosa"
                            className="h-[72px] object-contain opacity-50"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ManifestoFooter;
