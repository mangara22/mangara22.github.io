function lastUpdated() {
    const date = new Date(document.lastModified);
    document.getElementById("update").innerHTML = "Last Updated: " + date.toDateString();
}