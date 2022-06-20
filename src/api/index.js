import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async(sw, ne) => {
    try {
      console.log(sw, ne, "sw, ne")
        const {data: {data}} = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,
          },
          headers: {
            'X-RapidAPI-Key': '80674c6ac2mshfdd20c53748d7eap1563b0jsn1128a1a7de26',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        })
        
        return data;

    } catch (error) {
        
    }
}