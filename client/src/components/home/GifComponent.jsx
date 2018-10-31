import React, { Component } from 'react';
import Hover from './HoverComponent.jsx';

class Gif extends Component {

  state={ isHovered: false, isFavorite: false }

  handleMouseOver = () => {
    this.setState({ isHovered: true })
  }

  handleMouseOut = () => {
    this.setState({ isHovered: false })
  }


  render() {
    return (
      <div className='gif_container' onMouseOver={ this.handleMouseOver } onMouseLeave={ this.handleMouseOut }>
        { this.state.isHovered && this.props.userId ? 
          <Hover url={ this.props.url} 
                 userId={ this.props.userId} 
                 gifId={ this.props.gifId} 
                 postFavorite={ this.props.postFavorite } />
          : null }
        <iframe src={ this.props.url }>
        </iframe> 
      </div>
    )
  }
}



export default Gif;




