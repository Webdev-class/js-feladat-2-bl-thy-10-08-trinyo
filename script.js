async function fuggveny1(hosszusag, szelesseg, datum) {
    const data = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${hosszusag}&longitude=${szelesseg}&start_date=${datum}&end_date=${datum}&hourly=temperature_2m`).then(data => data.json()).then(data => data.hourly.temperature_2m)

    let sum = data.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
    );
    console.log(sum / data.length + " C")
}
fuggveny1(52.52, 13.41, '2024-09-22')

async function fuggveny2(hosszusag, szelesseg, datum, sorszam) {
    const data = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${hosszusag}&longitude=${szelesseg}&start_date=${datum}&end_date=${datum}&hourly=temperature_2m`).then(data => data.json()).then(data => data.hourly.temperature_2m)

    console.log(data[sorszam] + " C");
}
fuggveny2(52.52, 13.41, '2024-09-22', "12")