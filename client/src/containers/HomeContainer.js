import { connect } from 'react-redux';
import { fetchGifs, handleSearch } from '../redux/actions/fetchGifsActions.js';
import { postFavorite, fetchFavorites } from '../redux/actions/favoriteActions.js';
import Home from '../components/home/HomeComponent.jsx';


const mapStateToProps = (state) => ({
   gifList: state.getGifs.gifList,
   isLoading: state.handleLoading.isLoading,
   isError: state.handleError.isError,
   userId: state.getUserId.userId,
   searchTerm: state.getGifs.searchTerm,
   offset: state.getGifs.offset
})


const mapDispatchToProps = { fetchGifs, handleSearch, postFavorite, fetchFavorites }

export default connect(mapStateToProps, mapDispatchToProps)(Home);