export default function CurrentTimeComponent() {
    function returnCurrentTime() {
        return new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();
    }

    var currentTime = returnCurrentTime();

    return <h1>Current Time is: {currentTime}</h1>
}