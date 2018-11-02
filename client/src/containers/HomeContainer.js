import { connect } from 'react-redux';
import { handleSearch, handleTranslate } from '../redux/actions/fetchGifsActions.js';
import { handleSearchType, handleWeirdness } from '../redux/actions/formControlActions.js';
import Home from '../components/home/HomeComponent.jsx';

const mapStateToProps = (state) => ({
  isError: state.handleError.isError,
  searchType: state.switchSearchType.searchType,
  translateGif: state.getGifs.translateGif,
  weirdLevel: state.handleWeirdness.weirdLevel
})

const mapDispatchToProps = { handleSearch, handleTranslate, handleSearchType, handleWeirdness }

export default connect(mapStateToProps, mapDispatchToProps)(Home);