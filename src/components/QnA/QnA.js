import React from 'react';
import './QnA.css'
const QnA = (props) => {
  const   {question,answer} = props.qnA
    return (
        <>
            <div className="accordion pt-5" >
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button">
                   <h4>{question}</h4>
                </button>
                </h2>
                <div id="" className="accordion-collapse collapse show">
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