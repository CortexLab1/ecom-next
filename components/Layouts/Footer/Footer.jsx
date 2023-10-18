import { useEffect, useState } from 'react';
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpIcon from '@mui/icons-material/Help';
import paymentMethods from '../../../assets/images/payment-methods.svg';
import { useLocation } from 'react-router-dom';

const footerLinks = [
    {
        title: "about",
        links: [
            {
                name: "Contact Us",
                redirect: "/helpcentre",
            },
            {
                name: "About Us",
                redirect: "/about-us",
            },
            {
                name: "Careers",
                redirect: "",
            },
            {
                name: "CortexLab E-Commerce Stories",
                redirect: "",
            },
            {
                name: "Press",
                redirect: "/category/top-stories/news",
            },
            {
                name: "CortexLab E-Commerce Wholesale",
                redirect: "",
            },
            {
                name: "Corporate Information",
                redirect: "/corporate-information",
            },
        ]
    },
    {
        title: "help",
        links: [
            {
                name: "Payments",
                redirect: "/pages/payments",
            },
            {
                name: "Shipping",
                redirect: "/pages/shipping",
            },
            {
                name: "Cancellation & Returns",
                redirect: "/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG",
            },
            {
                name: "FAQ",
                redirect: "/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG",
            }
        ]
    },
    {
        title: "policy",
        links: [
            {
                name: "Return Policy",
                redirect: "/pages/returnpolicy",
            },
            {
                name: "Terms Of Use",
                redirect: "/pages/terms",
            },
            {
                name: "Security",
                redirect: "/pages/paymentsecurity",
            },
            {
                name: "Privacy",
                redirect: "/pages/privacypolicy",
            },
            {
                name: "Sitemap",
                redirect: "/sitemap",
            },
            {
                name: "EPR Compliance",
                redirect: "/pages/ewaste-compliance-tnc",
            },
        ]
    },
    {
        title: "social",
        links: [
            {
                name: "Facebook",
                redirect: "https://www.facebook.com/",
            },
            {
                name: "Twitter",
                redirect: "https://twitter.com/",
            },
            {
                name: "YouTube",
                redirect: "https://www.youtube.com/",
            }
        ]
    }
]

const Footer = () => {

    const location = useLocation();
    const [adminRoute, setAdminRoute] = useState(false);

    useEffect(() => {
        setAdminRoute(location.pathname.split("/", 2).includes("admin"))
    }, [location]);

    return (
        <>
            {!adminRoute && (
                <>
                    <footer className="mt-20 w-full py-1 sm:py-4 px-4 sm:px-12 bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden">
                        <div className="w-full sm:w-7/12 flex flex-col sm:flex-row">

                            {footerLinks.map((el, i) => (
                                <div className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5" key={i}>
                                    <h2 className="text-primary-grey mb-2 uppercase">{el.title}</h2>
                                    {el.links.map((item, i) => (
                                        <a href={item.redirect} target="_blank" rel="noreferrer" className="hover:underline" key={i}>{item.name}</a>
                                    ))}

                                </div>
                            ))}

                        </div>

                        <div className="border-gray-600 h-36 w-1 border-l mr-5 mt-6 hidden sm:block"></div>
                        <div className="w-full sm:w-5/12 my-6 mx-5 sm:mx-0 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
                            <div className="w-full sm:w-1/2">
                                <h2 className="text-primary-grey">Mail Us:</h2>
                                <p className="mt-2 leading-5">CortexLab E-Commerce Internet Private Limited,<br />
                                    Buildings Alyssa, Begonia &<br />
                                    Clove Embassy Tech Village,<br />
                                    Outer Ring Road, Devarabeesanahalli Village,<br />
                                    Bengaluru, 560103,<br />
                                    Karnataka, India
                                </p>
                            </div>

                            <div className="w-full sm:w-1/2">
                                <h2 className="text-primary-grey">Registered Office Address:</h2>
                                <p className="mt-2 leading-5">CortexLab E-Commerce Internet Private Limited,<br />
                                    Buildings Alyssa, Begonia &<br />
                                    Clove Embassy Tech Village,<br />
                                    Outer Ring Road, Devarabeesanahalli Village,<br />
                                    Bengaluru, 560103,<br />
                                    Karnataka, India <br />
                                    CIN : U51109KA2012PTC066107<br />
                                    Telephone: <a className="text-primary-blue" href="tel:18002029898">1800 202 9898</a>
                                </p>
                            </div>
                        </div>

                    </footer>
                    {/* <!-- footer ends --> */}

                    <div className="px-16 py-6 w-full bg-primary-darkBlue hidden sm:flex justify-between items-center text-sm text-white">
                        <a href="https://seller.#.com/sell-online" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                            <span className="text-yellow-400"><WorkIcon sx={{ fontSize: "20px" }} /></span> Sell On CortexLab E-Commerce
                        </a>
                        <a href="https://brands.#.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                            <span className="text-yellow-400"><StarsIcon sx={{ fontSize: "20px" }} /></span> Advertise
                        </a>
                        <a href="/the-gift-card-store" rel="noreferrer" target="_blank" className="flex items-center gap-2">
                            <span className="text-yellow-400"><CardGiftcardIcon sx={{ fontSize: "20px" }} /></span> Gift Cards
                        </a>
                        <a href="/helpcentre" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                            <span className="text-yellow-400"><HelpIcon sx={{ fontSize: "20px" }} /></span> Help Center
                        </a>

                        <span>&copy; 2007-{new Date().getFullYear()} CortexLab E-Commerce.com</span>
                        <img draggable="false" src={paymentMethods} alt="Card Payment" />
                    </div>
                </>
            )}
        </>
    )
};

export default Footer;
