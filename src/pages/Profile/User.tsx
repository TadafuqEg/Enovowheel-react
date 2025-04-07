import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useLocation } from "react-router-dom";
import img from "../../puplic/assets/setting.png"

const menuItems = [
    { name: "Orders", path: "/orders", imgSrc: "../../Puplic/assets/Order.png" },
    { name: "Address", path: "/address", imgSrc: "../../Puplic/assets/ph_address-book-thin.png" },
    { name: "Payments", path: "/payments", imgSrc: "../../Puplic/assets/Payemnt.png" },
    { name: "Warranty Claims", path: "/warranty-claims", imgSrc: "../../Puplic/assets/claims.png" },
    { name: "Profile", path: "/user", imgSrc: "../../Puplic/assets/User.png" },
    { name: "Security Settings", path: "/security-settings", imgSrc: "../../Puplic/assets/setting.png" }
];

const User: React.FC = () => {
    const [activeItem, setActiveItem] = useState("Profile");
    const location = useLocation();

    return (
        <div className="profile">
            <div className="flex">
                {/* Sidebar */}
                <div className="sidebar flex flex-col justify-between">
                    <div className="yy">
                        <h2 className="hello">Hello <span className="mail">ahmed.fathy@tadafuq.com</span></h2>
                        <nav className="rr">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`tt ${location.pathname === item.path ? "po" : ""
                                        }`}
                                    style={{
                                        backgroundImage: `url(${item.imgSrc})`,
                                        backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "left",
                                        color: location.pathname === item.path ? "#00bcd4" : "white", // Optional: Change text color when active
                                        height: "30px", // Adjust the height to match the content
                                        display: "flex",
                                        alignItems: "center",
                                        paddingLeft: "15px", // Adjust text padding
                                        position: "relative", // For positioning the text on top of the image
                                    }}
                                >
                                    {/* <span className="relative z-10">{item.imgSrc}</span> */}
                                    <span className="slide-name">{item.name}</span>
                                </Link>
                            ))}
                        </nav>
                        <button className="sign">Sign Out</button>
                    </div>

                </div>




                {/* Main Content */}
                <div className="profile-information flex-1 p-10">

                    <div className="space-y-6 information-content">
                        <h5 className="">PROFILE INFORMATION</h5>
                        <div className="pl grid grid-cols-2 gap-4">
                            <input type="text" placeholder="First Name" className="p-3 rounded bg-zinc-800 text-white placeholder-zinc-500" />
                            <input type="text" placeholder="Last Name" className="p-3 rounded bg-zinc-800 text-white placeholder-zinc-500" />
                        </div>
                        <input type="email" placeholder="E-mail" className="w-full p-3 rounded bg-zinc-800 text-white placeholder-zinc-500" />
                        <div className="pl grid grid-cols-3 gap-4">
                            <input type="tel" placeholder="927-636-8978" className="p-3 rounded bg-zinc-800 text-white placeholder-zinc-500" />
                            <input type="date" className="p-3 rounded bg-zinc-800 text-white placeholder-zinc-500" />
                            <select className="p-3 rounded bg-zinc-800 text-white">
                                <option>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <button className="update hover:bg-cyan-500 hover:text-black transition">
                            UPDATE PROFILE
                        </button>
                    </div>

                    <button className="need-help hover:bg-cyan-500 transition">NEED HELP</button>
                </div>
            </div>

            {/* Footer */}
            <div className="sub-footer flex justify-between items-center bg-white">
                <span>
                    © 2024 Enovowheel Copyright
                </span>
                <div className="bott space-x-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Use</a>
                </div>

            </div>
        </div>
    );
};

export default User;
