import uni from '../../onekit/uni.js'
const app = getApp()

Page({
  data: {

  },

  onLoad: function () {
    // const base64 = 'CxYh'
    // const arrayBuffer = uni.base64ToArrayBuffer(base64)
    // console.log("base64ToArrayBuffer", arrayBuffer)

    // const arrayBuffer = new Uint8Array([55, 55, 55])
    // const base64 = wx.arrayBufferToBase64(arrayBuffer)
    // console.log("arrayBufferToBase64", base64)
    uni.request({
      url: 'https://unidemo.dcloud.net.cn/ajax/echo/text?name=uni-app',
      dataType: 'text',
      data: {
        noncestr: Date.now()
      },
      success: (res) => {
        console.log('request success', res)
        this.res = '请求结果 : ' + JSON.stringify(res);
      },
      fail: (err) => {
        console.log('request fail', err);
      },
      complete: (res) => {
        console.log('request complete', res);
      }
    });

  },

})
