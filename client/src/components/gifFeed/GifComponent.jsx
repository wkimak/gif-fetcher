import React, { Component, Fragment } from 'react';
import Hover from '../misc/HoverComponent.jsx';

class Gif extends Component {

  state={ isHovered: false, isVideo: false, playIconAnimation: false }
  
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

  saveFavorite = () => {
    const { postFavorite, userId, gifId, stillUrl, videoUrl } = this.props;
    postFavorite(userId, gifId, stillUrl, videoUrl, () => {
      this.setState( () => ({ playIconAnimation: true }))

      setTimeout(() => {
        this.setState( () => ({ playIconAnimation: false }))
      }, 1000)
    })
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
                 userId={ userId } 
                 gifId={ gifId}  
                 toggleVideo={ () => {
                   this.toggleVideo();
                 }}>
                { () =>  <i onClick={ this.saveFavorite } 
                            className={ !this.state.playIconAnimation ? 'fas fa-heart fa-lg' : 'fas fa-heart fa-lg favorited_animation' }></i>
                      } 
          </Hover>       
          : null }
        <img src={ this.state.isVideo ? videoUrl : stillUrl } /> 
      </div>
    );
  }
}



export default Gif;




