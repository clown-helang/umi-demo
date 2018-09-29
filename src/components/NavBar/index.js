import React,{ Component } from 'react';
import { menus } from '../../assets/data/HomeDTO'
import styles from './index.less'
import router from 'umi/router';

export default class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      route: '/',
      showBgColor: false,
    }
  }

  componentDidMount(){
    this.setState({
      route: window.location.pathname
    });
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll')
  }

  handleScroll = () => {
    let scrollTop = window.pageYOffset;
    if(scrollTop > 25){
      this.setState({
        showBgColor: true
      })
    } else {
      this.setState({
        showBgColor: false
      })
    }
  };

  render(){
    const { showBgColor } = this.state;

    return (
      <div className={`${styles.container} ${showBgColor ? styles.fixed : ''}`}>
        <div className={styles.navBar}>
          <div className={styles.logo}>

          </div>
          <div className={styles.menus}>
            <ul>
              {
                menus.map((item,index) =>
                  <li className={this.state.route === item.route?styles.active:null} key={index} onClick={() => router.push(item.route)}>
                    {item.label}
                  </li>)
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
