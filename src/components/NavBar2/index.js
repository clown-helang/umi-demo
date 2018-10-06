import styles from './index.less';
import icon from '../../assets/images/icon.png';

export default function () {
  return (
    <div className={styles["index-nav"]}>
      <div className={`${styles["index-nav-frame"]} ${styles["clearfix"]}`}>
        <div className={styles["nav-line"]}>

        </div>
        <div className={styles["nav-small"]} tabIndex="-1">
          <div className={styles["nav-small-focus"]} tabIndex="-1">

          </div>
          <img src={icon}/>
        </div>
        <div className={`${styles['index-nav-frame-line']} ${styles["active"]}`} tabIndex="-1">
          首页
        </div>
        <div className={styles["index-nav-frame-line"]} tabIndex="-1">
          产品
          <div className={styles["index-nav-frame-line-center"]}>
            <div className={styles["index-nav-frame-line-li"]}>
              第二页面1
            </div>
          </div>
          <div className={styles["index-nav-frame-line-focus"]} tabIndex="-1">

          </div>
        </div>
        <div className={styles["index-nav-frame-line"]} tabIndex="-1">
          行业方案
          <div className={styles["index-nav-frame-line-center"]}>
            <div className={styles["index-nav-frame-line-li"]}>
              第三页面1
            </div>
            <div className={styles["index-nav-frame-line-li"]}>
              第三页面2
            </div>
            <div className={styles["index-nav-frame-line-li"]}>
              第三页面3
            </div>
          </div>
          <div className={styles["index-nav-frame-line-focus"]} tabIndex="-1">

          </div>
        </div>
        <div className={styles["index-nav-frame-line"]} tabIndex="-1">
          关于我们
          <div className={styles["index-nav-frame-line-center"]}>
            <div className={styles["index-nav-frame-line-li"]}>
              第四页面1
            </div>
            <div className={styles["index-nav-frame-line-li"]}>
              第四页面2
            </div>
          </div>
          <div className={styles["index-nav-frame-line-focus"]} tabIndex="-1">

          </div>
        </div>
      </div>
    </div>
  )
}
