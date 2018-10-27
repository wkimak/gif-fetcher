import axios from 'axios';

export const fetchGifs = async (searchTerm) => {
  return await axios.get('/api/gifs', { params: { searchTerm: searchTerm }});
}
