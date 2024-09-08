import React from 'react'

const FAQs = () => {
    return (
        <div>
            <div
                className="hero min-h-[75vh]"
                style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1613140676475-36abdeaedd44?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <h1 className="subtitle">Frequently asked questions</h1>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title font-medium">Lorem Ipsum doloer hfbusc ojsn 34un sncurnryb uncs usnruuf </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title font-medium">Lorem Ipsum doloer hfbusc ojsn 34un sncurnryb uncs usnruuf </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title font-medium">Lorem Ipsum doloer hfbusc ojsn 34un sncurnryb uncs usnruuf </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQs