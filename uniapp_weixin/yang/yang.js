import uni from "../onekit/uni"
Page({

  onLoad: function (options) {
    uni.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      cancelText:'取消有经济',
				cancelColor:"#4CD964",
      success: function (res) {
          if (res.confirm) {
              console.log('用户点击确定');
          } else if (res.cancel) {
              console.log('用户点击取消');
          }
      }
  });
  
   
  
  
  },
})