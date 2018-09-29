module.exports = {
  menus:[
    {
      label: '首页',
      route: '/'
    },
    {
      label: '产品',
      route: '#/products'
    },
    {
      label: '行业方案',
      route: '#/industrySolution'
    },
    {
      label: '关于我们',
      route: '#/aboutUs'
    },
  ],
  products:[
    {
      title: '超短焦距智能投影',
      src: require('../images/projection.png')
    },
    {
      title: '小易音响',
      src: require('../images/audio.png')
    },
    {
      title: 'OTT机顶盒',
      src: require('../images/TV.png')
    }
  ],
  appScene:[
    {
      title: '企业办公',
      src: require('../images/scene1.png'),
      description: '可移动，超方便，办公室，会议室都能用'
    },
    {
      title: '智慧家庭',
      src: require('../images/scene2.png'),
      description: ''
    },
    {
      title: '智慧酒店',
      src: require('../images/scene3.png'),
      description: ''
    },
    {
      title: '雪亮工程',
      src: require('../images/scene4.png'),
      description: ''
    }
  ],
  footerLinks:[
    {
      title: '我们的产品',
      route: '/',
      children:[
        {
          title: '智能投影',
          route: '/'
        },
        {
          title: '智能网关',
          route: '/'
        },
        {
          title: '智能音响',
          route: '/'
        }
      ],
    },
    {
      title: '我们的方案',
      route: '/',
      children:[
        {
          title: '智慧酒店解决方案',
          route: '/'
        },
        {
          title: '智慧医院解决方案',
          route: '/'
        },
        {
          title: '智慧校园解决方案',
          route: '/'
        }
      ],
    },
    {
      title: '关于我们',
      route: '/',
      children:[
        {
          title: '商务合作',
          route: '/'
        },
        {
          title: '大客户',
          route: '/'
        },
        {
          title: '代理商',
          route: '/'
        },
      ],
    },
    {
      title: '光电解决方案',
      route: '/',
      children:[
        {
          title: '概述',
          route: '/'
        },
        {
          title: '案例',
          route: '/'
        },
        {
          title: '服务',
          route: '/'
        },
      ],
    }
  ],
  softwarePlant:{
    title: '融合媒体SAAS平台',
    description: 'Star 是一款采用公有云， 私有云相结合，多终端，多格式，多网络的视频服务平台',
    specialties:['直播', '点播', '个性化', '高密度', '低成本', '多终端']
  }
};
