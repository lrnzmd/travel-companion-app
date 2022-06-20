import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    console.log(sw, ne, "sw, ne")
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'X-RapidAPI-Key': '0c4efe6ffdmsh6f00e5da608c7cbp192db9jsnd8df1bf1e82e',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    })

    return data;

  } catch (error) {

  }
}