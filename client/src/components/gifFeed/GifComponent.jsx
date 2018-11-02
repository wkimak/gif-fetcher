import React, { Component, Fragment } from 'react';
import Hover from '../HoverComponent.jsx';

class Gif extends Component {

  state={ isHovered: false, isVideo: false, addedAsFavorite: false }
  
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
    const { userId, gifId, stillUrl, videoUrl, postFavorite } = this.props;
    return (
      <div className='gif_container' 
           onMouseOver={ this.handleMouseOver } 
           onMouseLeave={ this.handleMouseOut }>
        { this.state.isHovered ? 
          <Hover stillUrl={ stillUrl } 
                 isVideo={ this.state.isVideo }
                 userId={ userId} 
                 gifId={ gifId}  
                 toggleVideo={ () => {
                   this.toggleVideo();
                 }}>
                { () =>  <i onClick={ () =>  postFavorite(userId, gifId, stillUrl, videoUrl) } 
                            className='fas fa-heart fa-lg'></i>
                      } 
          </Hover>       
          : null }
        <iframe src={ this.state.isVideo ? videoUrl : stillUrl }></iframe> 
      </div>
    )
  }
}



export default Gif;




