import { connect } from 'react-redux';
import FavoriteItemsComponent from '../components/favorites/FavoriteItemsComponent.jsx';
import { deleteFavorite, fetchFavorites, toggleFavoritesComponent } from '../redux/actions/favoritesActions.js';

const mapStateToProps = (state) => ({
  favoritesList: state.handleFavorites.favoritesList,
  userId: state.getUserId.userId,
  favoritesOpen: state.toggleFavoritesComponent.favoritesOpen
})

const mapDispatchToProps = { deleteFavorite, fetchFavorites, toggleFavoritesComponent  }

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteItemsComponent);