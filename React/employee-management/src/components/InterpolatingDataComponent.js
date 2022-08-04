export default function InterpolatingDataComponent() {

    var name = "TechnoFunnel";

    function returnUserAge() {
        return 10;
    }

    return (
        <div>
            <h1>Welcome { name + " Gupta" }</h1>
            <h2>Current Time: { new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds() }</h2>
            <h3>User Age is { returnUserAge() }</h3>
        </div>
    )
}
