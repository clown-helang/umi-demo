import { footerLinks } from '../../assets/data/HomeDTO'
import styles from './index.less'
import router from 'umi/router';

export default function (){
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.links}>
            {
              footerLinks.map((item,index) => (
                <div key={index} className={styles.item}>
                  <h3>{item.title}</h3>
                  <ul>
                    {
                      item.children.map((i,key)=>(
                        <li key={key}>{i.title}</li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>
          <div className={styles.contact}>
            <div className={styles.QRCode}>

            </div>
            <div className={styles.address}>
              <p>
                <span className={styles.icon}>
                  <i className="iconfont">&#xe60c;</i>
                </span>
                <span className={styles.text}>
                  北京经济技术开发区科创十四街5号
                </span>
              </p>
              <p>
                <span className={styles.icon}>
                  <i className="iconfont">&#xe614;</i>
                </span>
                <span className={styles.text}>
                  +86-10-53012890
                </span>
              </p>
              <p>
                <span className={styles.icon}>
                  <i className="iconfont">&#xe6af;</i>
                </span>
                <span className={styles.text}>
                  dss@startimes.com.cn
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          CopyRight &copy; 2011 StarTimes All Right Reserved
        </div>
      </div>
    </div>
  )
}
