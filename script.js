const ipEl = document.getElementById('ip');
const countryEl = document.getElementById('country');
const locationEl = document.getElementById('location');
const timezoneEl = document.getElementById('timezone');

// IP Intelligence API
const ipIntelligenceKey = "c0b65d33232a4f038c6e02622cd04f99";
// IP Geolocation API
const ipGeolocationKey = "70f4d8c5dc604942a9f08a8f26261856";
// Timezone API
const timezoneKey = "4b975310867d44458fa5d6822ebfeb5e";

// Fetch IP and location data
async function fetchIPData() {
    try {
        // Get IP info
        const geoRes = await fetch(`https://api.abstractapi.com/v1/ip-geolocation/?api_key=${ipGeolocationKey}`);
        const geoData = await geoRes.json();
        
        ipEl.textContent = geoData.ip_address || 'N/A';
        countryEl.textContent = geoData.country || 'N/A';
        locationEl.textContent = `${geoData.city || ''}, ${geoData.region || ''}` || 'N/A';

        // Get timezone info
        const tzRes = await fetch(`https://timezone.abstractapi.com/v1/current_time/?api_key=${timezoneKey}&location=${geoData.city}`);
        const tzData = await tzRes.json();

        timezoneEl.textContent = tzData.timezone_location || 'N/A';

    } catch (error) {
        ipEl.textContent = 'Error';
        countryEl.textContent = 'Error';
        locationEl.textContent = 'Error';
        timezoneEl.textContent = 'Error';
        console.error(error);
    }
}

fetchIPData();
