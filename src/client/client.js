export async function getWeather(city) {
    const result = await fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, {
        headers: {
            'X-Api-Key': ''
        }
    });
    return result.json();
}