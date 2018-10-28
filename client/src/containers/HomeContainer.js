import { connect } from 'react-redux';
import { fetchGifs } from '../redux/actions/fetchGifs.js';
import { handleFavorite } from '../redux/actions/favoriteGifs.js';
import Home from '../components/home/HomeComponent.jsx';

const mapStateToProps = (state) => ({
   gifList: state.gifList.gifList,
   isLoading: state.isLoading.isLoading,
   isError: state.isError.isError
})

const mapDispatchToProps = { fetchGifs, handleFavorite }

export default connect(mapStateToProps, mapDispatchToProps)(Home);