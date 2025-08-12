function lastUpdated() {
    const date = new Date(document.lastModified);
    document.getElementById("update").innerHTML = "Last Updated: " + date.toDateString();
}

// function countdown() {
//     const graduationDate = new Date(2025, 4, 15, 13);
//     const countdownElement = document.getElementById("cd");

//     if (!countdownElement) {
//         console.error("Countdown element not found");
//         return;
//     }

//     function updateCountdown() {
//         const currentDate = new Date();
//         let diff = graduationDate.getTime() - currentDate.getTime();

//         if (diff < 0) {
//             countdownElement.innerHTML = "Graduation day has arrived!";
//             return;
//         }

//         let days = Math.floor(diff / (1000 * 60 * 60 * 24));
//         let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//         let seconds = Math.floor((diff % (1000 * 60)) / 1000);

//         countdownElement.innerHTML = `Time until graduation (May 15th, 2025): 
//             ${days} day(s) ${hours} hr(s) ${minutes} min(s) ${seconds} sec(s)`;
//     }

//     updateCountdown();
//     const countdownInterval = setInterval(updateCountdown, 1000);
//     return () => clearInterval(countdownInterval);
// }

// document.addEventListener('DOMContentLoaded', countdown);