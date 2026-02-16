
import { lazy, Suspense } from 'react';
import { LottieRefCurrentProps } from 'lottie-react';

// Lazy load the Lottie component to prevent main bundle crashes
const Lottie = lazy(() => import('lottie-react'));

interface LazyLottieProps {
    animationData: any;
    lottieRef?: React.Ref<LottieRefCurrentProps>;
    className?: string;
    style?: React.CSSProperties;
    loop?: boolean;
    autoplay?: boolean;
}

const LazyLottie = (props: LazyLottieProps) => {
    return (
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center bg-gray-100/50 rounded-lg"><span className="text-xs text-gray-400">Loading...</span></div>}>
             {/* @ts-ignore */}
            <Lottie {...props} />
        </Suspense>
    );
};

export default LazyLottie;
