const t = parseInt(document.querySelector("#temp").textContent);
const s = parseInt(document.getElementById("speed").textContent);

if(t <= 50 && s > 3) {
    const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16)
    document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}&#176;`;
}
else {
    document.querySelector("#windchill").innerHTML = "N/A"
}