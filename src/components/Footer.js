import React from 'react';

import Qun1 from '../images/qun01.png';
import Qun2 from '../images/qun02.png';
import Logo from '../images/logo.png';

class Footer extends React.Component {
  render () {
    return(
      <div className='footer'>
        <div className='container'>
          <div className="qun qun1">
            <div className="item">
              <img src={Qun1}/>
              <div className="desc">扫一扫关注<br/>官方qq群<br/><b>368054984</b></div>
            </div>
            <div className="summary">讨论群区1<br/></div>
          </div>
          <div className="qun qun2">
            <div className="item">
              <img src={Qun2}/>
              <div className="desc">扫一扫关注<br/>官方qq群2<br/><b>491729754</b></div>
            </div>
            <div className="summary">讨论群区2</div>
          </div>
          <div className="power-by">
            <img src={Logo}/>
            <span>锐角网络出品</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
