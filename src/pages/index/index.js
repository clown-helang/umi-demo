import React,{ Component } from 'react';
import styles from './index.less';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { products, appScene, softwarePlant } from '../../assets/data/HomeDTO';
import { Carousel } from 'antd';
import bannerSmall from '../../assets/images/banner-small.png';
import dot from '../../assets/images/dot.png';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <NavBar />
        <div className={styles.banner}>
          <div className={styles.label}>
            <p>
              <span>慢反射</span>
              <span>不伤眼</span>
              <span>免安装</span>
            </p>
            <p>小易-智能家居助手</p>
          </div>
          <div className={styles.slide}>
            <Carousel autoplay dots={false} effect="fade">
              <div><img src={bannerSmall} /></div>
              <div><img src={bannerSmall} /></div>
              <div><img src={bannerSmall} /></div>
              <div><img src={bannerSmall} /></div>
            </Carousel>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.products}>
          <h1>产品</h1>
          <div className={styles.productContent}>
            {
              products.map((item,index)=>
                <div className={styles.item} key={index}>
                  <div className={styles.content}>
                    <div className={styles.picture}>
                      <img src={item.src} />
                    </div>
                  </div>
                  <div className={styles.title}>
                    {item.title}
                  </div>
                </div>
              )
            }
          </div>
        </div>

        <div className={styles.softwarePlant}>
          <div className={styles.label}>
            <p>{softwarePlant.title}</p>
            <p>{softwarePlant.description}</p>
          </div>
          {
            softwarePlant.specialties.map((item,index)=>(
              <div key={index} className={`${styles.specialty} ${styles[`specialty_${index}`]}`}>
                <div className={styles.title}>{item}</div>
                <img src={dot}/>
              </div>
            ))
          }
        </div>

        <div className={styles.applicationsScene}>
          <h1>应用场景</h1>
          <div className={styles.appContent}>
            {
              appScene.map((item,index)=>
                <div className={styles.item} key={index}>
                  <div className={styles.content}>
                    <div className={styles.picture}>
                      <img src={item.src}/>
                      <div className={styles.description}>
                        <span>{item.description}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.title}>
                    {item.title}
                  </div>
                </div>
              )
            }
          </div>

        </div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>

    </div>
  );
}

export default Home;
