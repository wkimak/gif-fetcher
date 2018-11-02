import React, { Component, Fragment } from 'react';
import Hover from '../HoverComponent.jsx';

class Gif extends Component {

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
    const { userId, gifId, stillUrl, videoUrl, postFavorite } = this.props;
    return (
      <div className='gif_container' onMouseOver={ this.handleMouseOver } onMouseLeave={ this.handleMouseOut }>
        { this.state.isHovered ? 
          <Hover stillUrl={ stillUrl } 
                 userId={ userId} 
                 gifId={ gifId}  
                 toggleVideo={ () => {
                   this.toggleVideo();
                 }}>
                { () =>  <button onClick={ () => this.props.postFavorite(userId, gifId, stillUrl, videoUrl) }>
                            Save to Favorites
                         </button> 
                      } 
          </Hover>       
          : null }
        <iframe src={ this.state.isVideo ? videoUrl : stillUrl }>
        </iframe> 
      </div>
    )
  }
}



export default Gif;




