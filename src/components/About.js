import React from 'react'

export default function About() {
    return (
        <div className="container my-5">
            <div className="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This app lets you manipulate text, you can also try out dark mode.</strong>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
