import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
  try {
    console.log(sw, ne, "sw, ne")
    const { data: { data } } = await axios.get(URL, {
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