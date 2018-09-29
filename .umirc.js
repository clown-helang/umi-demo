
export default {
  outputPath: "./dist/smart-portal",
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'smart-portal',
      dll: true,
      pwa: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
  targets: {
    chrome: 58,
    ie: 9,
  },
  exportStatic:{
    htmlSuffix: true,
    dynamicRoot: true,
  },
}
