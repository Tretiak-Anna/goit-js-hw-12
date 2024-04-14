import axios from 'axios';

const API_KEY = '43244566-bb96021fc186f0172f7edc4d3';
const baseURL = 'https://pixabay.com/api/';

export async function fetchImages(searchQuery, page) {
  try {
    const response = await axios(baseURL, {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: 15,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
