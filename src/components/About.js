import React from 'react'

export default function About() {
    return (
        <div className="container my-5">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This app lets you manipulate text, you can also try out dark mode.</strong><br></br><strong>Free to Use site and browser compatible.</strong>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
