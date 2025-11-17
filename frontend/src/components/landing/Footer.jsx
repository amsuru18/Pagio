import { BookOpen, Github, Linkedin } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            {/* Subtitle Background Pattern */}
            <div className="">
                <div className=""></div>
            </div>

            <div className="">
                <div className="">
                    {/* Brand Section */}
                    <div className="">
                        <a href="/" className="">
                            <div className="">
                                <BookOpen className="" />
                            </div>
                            <span className=""></span>
                        </a>
                        <p className="">
                            Create, design, and publish stunning eBooks with the
                            power of AI.
                        </p>

                        {/* Social Links */}
                        <div className="">
                            <a
                                href="https://twitter.com"
                                className=""
                                aria-label="Twitter"
                            >
                                <Twitter className="" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                className=""
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="" />
                            </a>
                            <a
                                href="https://github.com"
                                className=""
                                aria-label="Github"
                            >
                                <Github className="" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="">
                        <div>
                            <h3 className="">Product</h3>
                            <ul className="">
                                <li>
                                    <a href="#features" className="">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#pricing" className="">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#templates" className="">
                                        Templates
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="">Company</h3>
                            <ul className="">
                                <li>
                                    <a href="#about" className="">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="#blog" className="">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="">Legal</h3>
                            <ul className="">
                                <li>
                                    <a href="#privacy" className="">
                                        Privacy
                                    </a>
                                </li>
                                <li>
                                    <a href="#terms" className="">
                                        Terms
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="">
                    <div className="">
                        <p className="">
                            {new Date().getFullYear()} Pagio. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
