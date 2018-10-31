import { connect } from 'react-redux';
import { fetchGifs } from '../redux/actions/fetchGifsActions.js';
import { postFavorite, fetchFavorites } from '../redux/actions/favoriteActions.js';
import Home from '../components/home/HomeComponent.jsx';


const mapStateToProps = (state) => ({
   gifList: state.gifList.gifList,
   isLoading: state.isLoading.isLoading,
   isError: state.isError.isError,
   userId: state.userId.userId,
})


const mapDispatchToProps = { fetchGifs, postFavorite }

export default connect(mapStateToProps, mapDispatchToProps)(Home);