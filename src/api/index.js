import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    url: URL,
    params: {
      bl_latitude: '38.030513',
      tr_latitude: '38.244437',
      bl_longitude: '13.182476',
      tr_longitude: '13.740076',
    },
    headers: {
      'X-RapidAPI-Key': '80674c6ac2mshfdd20c53748d7eap1563b0jsn1128a1a7de26',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

export const getPlacesData = async() => {
    try {
        const {data: {data}} = await axios.get(URL, options)
        
        return data;

    } catch (error) {
        
    }
}