import { connect } from 'react-redux';
import FavoriteItemsComponent from '../components/favorites/FavoriteItemsComponent.jsx';
import { deleteFavorite } from '../redux/actions/favoriteGifs.js';

const mapStateToProps = (state) => ({
  favoritesList: state.favoritesList.favoritesList,
  userId: state.userId.userId
})

const mapDispatchToProps = { deleteFavorite }

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteItemsComponent);