import { ArrowRight, Sparkles, BookOpen, Zap } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import HERO_IMG from '../../assets/hero-img.png';

const Hero = () => {
    const { isAuthenticated } = useAuth();

    return (
        <div className="">
            <div className="">
                {/* Left Content */}
                <div className="">
                    <div className="">
                        <Sparkles className="" />
                        <span className="">AI-Powered Publishing</span>
                    </div>
                    <h1 className="">
                        Create Stunning
                        <span className="">Ebooks in Minutes</span>
                    </h1>
                    <p className="">
                        From idea to published ebook, our AI-powered platform
                        helps you write, design, and export professional-quality
                        books effortlessly.
                    </p>
                    <div className="">
                        <Link
                            to={isAuthenticated ? '/dashboard' : '/login'}
                            className=""
                        >
                            <span>Start Creating for FREE!</span>
                            <ArrowRight className="" />
                        </Link>

                        <a href="#demo" className="">
                            <span>Watch Demo</span>
                            <span className="">→</span>
                        </a>
                    </div>

                    <div className="">
                        <div className="">
                            <div className="">50K+</div>
                            <div className="">Books Created</div>
                        </div>
                        <div className=""></div>
                        <div>
                            <div className="">4.9/5</div>
                            <div className="">User Rating</div>
                        </div>
                        <div className=""></div>
                        <div>
                            <div className="">10 min</div>
                            <div className="">Avg. Creation</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
