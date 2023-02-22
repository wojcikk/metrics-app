export const Card = (props: {
    variableName: string
    calculationResult: string
    unit: string
}) => {
    return(
        <div className="card">
            <div className="variable-name-field">
                <p> <b> {props.variableName} </b></p>
            </div>
            <div className="result-field">
                <p> {props.calculationResult} </p>
            </div>
        </div>
    )
}