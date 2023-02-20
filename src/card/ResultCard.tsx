import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import './ResultCard.css';

function ResultCard(
    

) {

    return (
        <div className="card-container">
            <Card id={1} variableName={"avm_essk_calculations_calculations_counter"} fullVariablePath={"avm_essk_calculations_calculations_counter{server=\"JWOJCIKPC01\",app=\"Avm.ESSK.Calculations\",env=\"development\"}"} calculationResult= {5} />
        </div>
    )
}

const Card = (props: { 
    id: number; 
    variableName: string; 
    fullVariablePath: string ; 
    calculationResult: number; }) => {
    return (
        <div className='card'>
            <div className='card-id'>
                <p className='id-label'>ID:</p>
                <div className='id-metric'>
                    { props.id }
                </div>
            </div>

            <div className='card-name'>
                <hr/>
                <p className='metric-name-label'>Metric name:</p>
                <div className='variable-name-metric'>
                    { props.variableName }
                </div>
            </div>

            {/* <div className='card-full-name'>
                <hr/>
                <p className='metric-name-label'>Metric name:</p>
                <div className='variable-full-name-metric'>
                    { props.fullVariablePath }
                </div>
            </div> */}

            {/* <div className='card-full-name'>
                Calculation full name: { fullVariablePath }
            </div> */}

            <div className='card-result'>
                <hr/>
                <p className='result-label'>Result:</p>
                <div className='result-metric'>
                    { props.calculationResult }
                </div>
            </div>
        </div>
    )
}

export default ResultCard;