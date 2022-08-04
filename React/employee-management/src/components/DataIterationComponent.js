export default function DataIterationComponent() {
    var dataArray = [10, 20, 30, 40, 45, 48, 89]

    return (
        <div>
            {dataArray.map((value, index) => {
                return (
                    <div>
                        { value % 2 === 1 && <h1>Odd: Value at index {index + 1} is {value}</h1>}
                        { value % 2 === 0 && <h1>Even: Value at index {index + 1} is {value}</h1>}
                    </div>
                )
            })}
        </div>
    )
}