import React from "react";

const Footer = () => {
    const socialLinks = [
        {
            href: "#",
            svgPath:
                "M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-3 19h-3v-6h-2v6h-3v-10h3v2h2v-2h3v10zm-9-12c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
        },
        {
            href: "#",
            svgPath:
                "M23 3.01a10.9 10.9 0 0 1-3.14.86 5.46 5.46 0 0 0 2.41-3.01 10.85 10.85 0 0 1-3.44 1.32 5.44 5.44 0 0 0-9.29 4.96 15.44 15.44 0 0 1-11.22-5.7 5.43 5.43 0 0 0 1.69 7.24 5.39 5.39 0 0 1-2.46-.68v.07a5.45 5.45 0 0 0 4.36 5.34 5.44 5.44 0 0 1-2.45.09 5.47 5.47 0 0 0 5.08 3.77 10.91 10.91 0 0 1-6.73 2.31c-.44 0-.88-.03-1.31-.08a15.38 15.38 0 0 0 8.34 2.44c10.02 0 15.51-8.31 15.51-15.51 0-.24 0-.47-.02-.71a11.12 11.12 0 0 0 2.72-2.83z",
        },
        {
            href: "#",
            svgPath:
                "M19.6 3h-15.2c-1.3 0-2.4 1.1-2.4 2.4v13.2c0 1.3 1.1 2.4 2.4 2.4h15.2c1.3 0 2.4-1.1 2.4-2.4v-13.2c0-1.3-1.1-2.4-2.4-2.4zm-9.6 14v-6l6 3-6 3z",
        },
    ];

    const sections = [
        {
            title: "Solutions",
            links: [
                { href: "#", text: "Overview" },
                { href: "#", text: "Product Activation & Retailer Engagement" },
                { href: "#", text: "Trade Insights" },
                { href: "#", text: "In-Store Visibility" },
            ],
        },
        {
            title: "Resources",
            links: [
                { href: "#", text: "Case Studies" },
                { href: "#", text: "InstaNear Insider" },
                { href: "#", text: "InstaNear Pulse" },
                { href: "#", text: "InstaNear Blogs" },
            ],
        },
        {
            title: "Company",
            links: [
                { href: "#", text: "About Us" },
                { href: "#", text: "Careers" },
            ],
        },
    ];

    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo & Social Media */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <img
                                src="/Assets/instanear-logo.png"
                                alt="InstaNear"
                                className="h-8"
                            />
                        </div>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-gray-400 hover:text-white"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d={link.svgPath} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Sections */}
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h1 className="text-lg lg:text-xl text-gray-200 font-semibold mb-4">
                                {section.title}
                            </h1>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href={link.href} className="hover:text-white">
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Copyright */}
                <div className="mt-10 text-center text-gray-400 text-sm">
                    Copyright © InstaNear Ltd |{" "}
                    <a href="#" className="hover:text-white">
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
