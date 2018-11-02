import React, { Component } from 'react';
import Hover from '../HoverComponent.jsx';


class FavoriteComponent extends Component {

  state={ isHovered: false, isVideo: false }
  
  toggleVideo = () => {
    this.setState({
      isVideo: !this.state.isVideo
    })
  }

  handleMouseOver = () => {
    this.setState({ isHovered: true })
  }

  handleMouseOut = () => {
    this.setState({ isHovered: false })
  }

  render() {
    const { stillUrl, videoUrl, deleteFavorite, userId, gifId, index } = this.props;
    return (
      <div className='favorite_container' onMouseOver={ this.handleMouseOver } onMouseLeave={ this.handleMouseOut }>
        { this.state.isHovered && userId ? 
          <Hover stillUrl={ stillUrl} 
                 userId={ userId} 
                 gifId={ gifId}  
                 toggleVideo={ this.toggleVideo }>
                { () => <i onClick={ () => deleteFavorite(userId, gifId, index) } className="fas fa-trash-alt fa-lg"></i> } 
          </Hover>       
          : null }
        <iframe className='favorite_iframe' src={ this.state.isVideo ? videoUrl : stillUrl }></iframe>
        
      </div>
    );
  }
}

export default FavoriteComponent;