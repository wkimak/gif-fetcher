import React, { Component } from 'react';

class NavLinks extends Component {
  
  state={ linkSelected: 0 }

  handleSelect = (e) => {
    const value = e.target.value, 
          tagName = e.target.tagName,
          { handleSearch } = this.props;

     if(tagName === 'LI') {
       if(value === 0) {
         handleSearch('trending', null, 12, 0);
       } else if(value === 1) {
         handleSearch('search', 'entertainment', 12, 0);
       } else if(value === 2) {
         handleSearch('search', 'sports', 12, 0);
       } else if(value === 3) {
         handleSearch('search', 'politics', 12, 0);
       } else if(value === 4) {
         handleSearch('translate', null, 12, 0);
       }

     this.setState({ linkSelected: value });
   }
  }

  render() {
    const { linkSelected } = this.state;
    return (
      <ul className='nav_links_ul' onClick={ (e) => this.handleSelect(e) }>
        <li value={0} className={ linkSelected === 0 ? 'link_active' : null }>Trending</li>
        <li value={1} className={ linkSelected === 1 ? 'link_active' : null }>Entertainment</li>
        <li value={2} className={ linkSelected === 2 ? 'link_active' : null }>Sports</li>
        <li value={3} className={ linkSelected === 3 ? 'link_active' : null }>Politics</li>
        <li value={4} className={ linkSelected === 4 ? 'link_active' : null }>Weird</li>
      </ul>
    );
  }
}




export default NavLinks;