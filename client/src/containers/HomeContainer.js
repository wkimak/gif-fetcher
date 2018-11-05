import { connect } from 'react-redux';
import { handleSearch, handleWeirdSearch } from '../redux/actions/gifFeedActions.js';
import { handleWeirdness } from '../redux/actions/weirdSliderActions.js';
import Home from '../components/home/HomeComponent.jsx';

const mapStateToProps = (state) => ({
  searchType: state.changeSearchType.searchType,
  translateGif: state.getGifs.translateGif,
  weirdLevel: state.handleWeirdness.weirdLevel,
  errorMessage: state.getGifs.errorMessage,
  isLoading: state.handleLoading.isLoading
})

const mapDispatchToProps = { handleSearch, handleWeirdSearch, handleWeirdness }

export default connect(mapStateToProps, mapDispatchToProps)(Home);