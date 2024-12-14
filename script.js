function countdown() {
    let countDownDate = new Date(2025, 4, 15, 13).getTime();

    let countdown = setInterval(() => {
        // https://www.w3schools.com/howto/howto_js_countdown.asp
        let currentDate = new Date().getTime();
        let diff = countDownDate - currentDate;
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);

        let result = "Time until graduation (May 15th, 2025): " + days + " day(s) " + hours + " hour(s) " + minutes + " minute(s) " + seconds + " second(s)";
        document.getElementById("cd").innerHTML = result;

        if (diff < 0) {
            clearInterval(countdown);
            document.getElementById("cd").innerHTML = "Countdown is Expired!";
        }
    }, 1000)
}

document.addEventListener("load", countdown());