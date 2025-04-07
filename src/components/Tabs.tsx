import React, { useState } from "react";
import img1 from "../../puplic/assets/img9.png"
import img2 from "../../puplic/assets/img10.png"
import img3 from "../../puplic/assets/img11.png"
import img4 from "../../puplic/assets/img13.png"

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="tabbs">
            {/* Tab Buttons */}
            <div className="respons flex gap-6 mb-10 justify-center">
                <button
                    onClick={() => setActiveTab(1)}
                    className={`tab ${activeTab === 1 ? 'active-tab' : 'tab'}`}
                >
                    Product 1
                </button>
                <button
                    onClick={() => setActiveTab(2)}
                    className={`tab ${activeTab === 2 ? 'active-tab' : 'tab'}`}
                >
                    Product 2
                </button>
                <button
                    onClick={() => setActiveTab(3)}
                    className={`tab ${activeTab === 3 ? 'active-tab' : 'tab'}`}
                >
                    Product 3
                </button>
                <button
                    onClick={() => setActiveTab(4)}
                    className={`tab ${activeTab === 4 ? 'active-tab' : 'tab'}`}
                >
                    Product 4
                </button>
                <button
                    onClick={() => setActiveTab(5)}
                    className={`tab ${activeTab === 5 ? 'active-tab' : 'tab'}`}
                >
                    Product 5
                </button>
            </div>

            {/* Tab Content */}
            <div className="tabbs-content">
                {activeTab === 1 && (
                    <div className="tab-content">
                        <div className="tab-left">
                            <img src={img1} />
                        </div>
                        <div className="tab-right">
                            <div className="right-top">
                                <img src={img2} />
                                <img src={img3} />
                            </div>
                            <div className="right-bottom">
                                <img src={img4} />
                            </div>

                        </div>

                    </div>
                )}
                {activeTab === 2 && (
                    <div className="tab-content">
                        <div className="tab-left">
                            <img src={img1} />
                        </div>
                        <div className="tab-right">
                            <div className="right-top">
                                <img src={img2} />
                                <img src={img3} />
                            </div>
                            <div className="right-bottom">
                                <img src={img4} />
                            </div>

                        </div>

                    </div>
                )}
                {activeTab === 3 && (
                    <div className="tab-content">
                        <div className="tab-left">
                            <img src={img1} />
                        </div>
                        <div className="tab-right">
                            <div className="right-top">
                                <img src={img2} />
                                <img src={img3} />
                            </div>
                            <div className="right-bottom">
                                <img src={img4} />
                            </div>

                        </div>

                    </div>
                )}
                {activeTab === 4 && (
                    <div className="tab-content">
                        <div className="tab-left">
                            <img src={img1} />
                        </div>
                        <div className="tab-right">
                            <div className="right-top">
                                <img src={img2} />
                                <img src={img3} />
                            </div>
                            <div className="right-bottom">
                                <img src={img4} />
                            </div>

                        </div>

                    </div>
                )}
                {activeTab === 5 && (
                    <div className="tab-content">
                        <div className="tab-left">
                            <img src={img1} />
                        </div>
                        <div className="tab-right">
                            <div className="right-top">
                                <img src={img2} />
                                <img src={img3} />
                            </div>
                            <div className="right-bottom">
                                <img src={img4} />
                            </div>

                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs;
