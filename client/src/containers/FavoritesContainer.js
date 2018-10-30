import { connect } from 'react-redux';
import FavoriteItemsComponent from '../components/favorites/FavoriteItemsComponent.jsx';
import { deleteFavorite, fetchFavorites } from '../redux/actions/favoriteActions.js';

const mapStateToProps = (state) => ({
  favoritesList: state.favoritesList.favoritesList,
  userId: state.userId.userId,
  favoritesOpen: state.favoritesOpen.favoritesOpen
})

const mapDispatchToProps = { deleteFavorite, fetchFavorites }

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteItemsComponent);