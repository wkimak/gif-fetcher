import { connect } from 'react-redux';
import { fetchGifs } from '../redux/actions/fetchGifsActions.js';
import { postFavorite, fetchFavorites } from '../redux/actions/favoriteActions.js';
import Home from '../components/home/HomeComponent.jsx';


const mapStateToProps = (state) => ({
   gifList: state.getGifs.gifList,
   isLoading: state.handleLoading.isLoading,
   isError: state.handleError.isError,
   userId: state.getUserId.userId,
})


const mapDispatchToProps = { fetchGifs, postFavorite, fetchFavorites }

export default connect(mapStateToProps, mapDispatchToProps)(Home);