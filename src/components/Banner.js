import React from 'react';
import Swiper from 'swiper';
import Banner1 from '../images/banner01.jpg';
import Banner2 from '../images/banner02.jpg';
import Video from '../images/video_preview.png';

class Banner extends React.Component {
  componentDidMount(){
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      autoplay : 3000,
      paginationClickable: true,
      autoplayDisableOnInteraction : false,
      pagination: '.swiper-pagination',
    })
  }
  handleClick(){
    alert('视频播放的模态窗没有做')
  }
  render () {
    return(
      <div className="swiper-container">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={Banner1} />
              <div className='download'>
                <a className="download-btn" href="http://og5nosq49.bkt.clouddn.com/bige-setup-1.0-beta.exe">立刻下载</a>
                <div className="desc">支持设备win7/win8/win10</div>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={Banner2} />
              <div className="jd-action">
                <a className="jd-btn" href="https://z.jd.com/project_details.action?projectId=69625">去京东支持</a>
                <div className="desc">现已登陆京东众筹欢迎体验</div>
                <a id="video_preview" href="#" onClick={this.handleClick.bind(this)}>
                  <img src={Video}/>
                </a>
              </div>
            </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}

export default Banner;
