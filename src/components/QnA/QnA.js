import React from 'react';
import './QnA.css'
const QnA = (props) => {
  const   {question,answer} = props.qnA
    return (
        <>
            <div className="accordion pt-5" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   <h4>{question}</h4>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p >{answer}</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QnA;