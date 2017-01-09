import React from 'react';
import Logo from '../images/bigger-logo.png';
class Header extends React.Component {
  render () {
    return(
      <div className='top-nav'>
        <div className='container'>
          <a className='logo'>
            <img src={Logo} />
          </a>
          <div className='center'>
            <span className='left'>
              <b>精准内容</b>
              <b>拒绝广告</b>
            </span>
            <span className='right'>
              <b>简单易用</b>
              <b>自由操作</b>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
