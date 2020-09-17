export default class uni {
  static base64ToArrayBuffer(base64) {
    return wx.base64ToArrayBuffer(base64)
  }
  static arrayBufferToBase64(arrayBuffer) {
    return wx.arrayBufferToBase64(arrayBuffer)
  }
  ///////////////////////////////////网络请求///////////////////////////////////////
  static request(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_url = uni_object.url;
    var uni_data = uni_object.data;
    var uni_header = uni_object.header;
    var uni_method = uni_object.method || "GET";
    var uni_timeout = uni_object.timeout || 30000;
    var uni_dataType = uni_object.dataType || "json";
    var uni_responseType = uni_object.responseType || "text";
    var uni_sslVerify = uni_object.sslVerify || true;
    var uni_withCredentials = uni_object.withCredentials || false;
    var uni_firstIpv4 = uni_object.firstIpv4 || false;
    var uni_success = uni_object.success;
    var uni_fail = uni_object.fail;
    var uni_complete = uni_object.complete;
    uni_object = null;
    //////////////////////////////////////////////////
    var wx_object = {};
    if (uni_url) {
      wx_object.url = uni_url
    }
    if (uni_data) {
      wx_object.data = uni_data
    }
    if (uni_header) {
      wx_object.header = uni_header
    }
    if (uni_method) {
      wx_object.method = uni_method
    }
    if (uni_responseType) {
      wx_object.responseType = uni_responseType
    }
    if (uni_timeout) {
      wx_object.timeout = uni_timeout
    }
    if (uni_dataType) {
      wx_object.dataType = uni_dataType
    }
    wx_object.success = function (wx_res) {
      if (uni_success) {
        uni_success(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx_object.fail = function (wx_res) {
      if (uni_fail) {
        uni_fail(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx.request(wx_object)
  }
  //////////////////////////
  static uploadFile(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_url = uni_object.url
    var uni_files = uni_object.files
    var uni_fileType = uni_object.fileType
    var uni_file = uni_object.file
    var uni_filePath = uni_object.filePath
    var uni_name = uni_object.name
    var uni_header = uni_object.header
    var uni_formData = uni_object.formData
    var uni_success = uni_object.success;
    var uni_fail = uni_object.fail;
    var uni_complete = uni_object.complete;
    uni_object = null;
    /////////////////
    var wx_object = {}
    if (uni_url) {
      wx_object.url = uni_url
    }
    if (uni_files) {
      wx_object.files = uni_files
    }
    if (uni_fileType) {
      wx_object.fileType = uni_fileType
    }
    if (uni_file) {
      wx_object.file = uni_file
    }
    if (uni_filePath) {
      wx_object.filePath = uni_filePath
    }
    if (uni_name) {
      wx_object.name = uni_name
    }
    if (uni_header) {
      wx_object.header = uni_header
    }
    if (uni_formData) {
      wx_object.formData = uni_formData
    }
    wx_object.success = function (wx_res) {
      if (uni_success) {
        uni_success(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx_object.fail = function (wx_res) {
      if (uni_fail) {
        uni_fail(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx.uploadFile(wx_object)
  }
  ///////////////
  static downloadFile(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_url = uni_object.url
    var uni_header = uni_object.header
    var uni_success = uni_object.success;
    var uni_fail = uni_object.fail;
    var uni_complete = uni_object.complete;
    uni_object = null;
    //////////////////////////////////////////////
    var wx_object = {};
    if (uni_url) {
      wx_object.url = uni_url
    }
    if (uni_header) {
      wx_object.header = uni_header
    }
    wx_object.success = function (wx_res) {
      var uni_res = {};
      for (var wx_res_key in wx_res) {
        var wx_res_value = wx_res[wx_res_key];
        switch (wx_res_key) {
          case "tempFilePath": //微信
            uni_res.tempFilePath = wx_res_value //快应用
            break;
          case "statusCode":
            uni_res.statusCode = wx_res_value;
            break;
          default:
            break;
        }
      }
      if (uni_success) {
        uni_success(uni_res);
      }
      if (uni_complete) {
        uni_complete(uni_res);
      }
    };
    wx_object.fail = function (wx_res) {
      if (uni_fail) {
        uni_fail(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx.downloadFile(wx_object)
  }
  //////////////////////////////////////////////////// connectSocket///////////////////////////////
  static connectSocket(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_url = uni_object.url
    var uni_header = uni_object.header
    var uni_protocols=uni_object.protocols
    var uni_success = uni_object.success;
    var uni_fail = uni_object.fail;
    var uni_complete = uni_object.complete;
    uni_object = null;
    /////////////////
    var wx_object = {}
    if (uni_url) {
      wx_object.url = uni_url
    }
    if(uni_header){
      wx_object.header=uni_header
    }
    if(uni_protocols){
      wx_object.protocols=uni_protocols
    }
    if(uni_success){
      wx_object.success=uni_success
    }
    if(uni_fail){
      wx_object.fail=uni_fail
    }
    if(uni_complete){
      wx_object.complete=uni_complete
    }
    wx_object.success = function (wx_res) {
      if (uni_success) {
        uni_success(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx_object.fail = function (wx_res) {
      if (uni_fail) {
        uni_fail(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx.connectSocket(wx_object)
  }
  ///////////////////////////////closeSocket/////////////////////////////////////////////
static closeSocke(uni_object){
 if(!uni_object){
   return
 }
 var uni_code=uni_object.code||1000
 var uni_reason=uni_object.uni_reason
 var uni_success=uni_object.success
 var uni_fail=uni_object.fail
 var uni_complete=uni_object.complete
 uni_object=null
 /////////////////////////
 var wx_object={}
 if (uni_code) {
  wx_object.code = uni_code
}
if (uni_reason) {
  wx_object.reason = uni_reason
}
if (uni_success) {
  wx_object.success = uni_success
}
if (uni_fail) {
  wx_object.fail = uni_fail
}
if (uni_complete) {
  wx_object.complete = uni_complete
}
wx_object.success = function (wx_res) {
  if (uni_success) {
    uni_success(wx_res);
  }
  if (uni_complete) {
    uni_complete(wx_res);
  }
};
wx_object.fail = function (wx_res) {
  if (uni_fail) {
    uni_fail(wx_res);
  }
  if (uni_complete) {
    uni_complete(wx_res);
  }
};
wx.colseSocket(wx_object)
}
  //////////////////////////////////页面路由/////////////////////////////////////////////////
  static navigateTo(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_url = uni_object.url
    var uni_animationType = uni_object.animationType || 'pop-out';
    var uni_animationDuration = uni_object.animationDuration || 300;
    var uni_success = uni_object.success;
    var uni_fail = uni_object.fail;
    var uni_complete = uni_object.complete;
    uni_object = null;
    ///////////////////////////////
    var wx_object = {};
    if (uni_url) {
      wx_object.url = uni_url
    }
    wx_object.success = function (wx_res) {
      if (uni_success) {
        uni_success(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx_object.fail = function (wx_res) {
      if (uni_fail) {
        uni_fail(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx.navigateTo(wx_object)
  }
  static redirectTo(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_url = uni_object.url
    var uni_success = uni_object.success;
    var uni_fail = uni_object.fail;
    var uni_complete = uni_object.complete;
    uni_object = null;
    ///////////////////////////
    var wx_object = {};
    if (uni_url) {
      wx_object.url = uni_url
    }
    wx_object.success = function (wx_res) {
      if (uni_success) {
        uni_success(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx_object.fail = function (wx_res) {
      if (uni_fail) {
        uni_fail(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx.redirectTo(wx_object)
  }
  static reLaunch(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_url = uni_object.url
    var uni_success = uni_object.success;
    var uni_fail = uni_object.fail;
    var uni_complete = uni_object.complete;
    uni_object = null;
    ///////////////
    var wx_object = {};
    if (uni_url) {
      wx_object.url = uni_url
    }
    wx_object.success = function (wx_res) {
      if (uni_success) {
        uni_success(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx_object.fail = function (wx_res) {
      if (uni_fail) {
        uni_fail(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx.reLaunch(wx_object)
  }
  static switchTab(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_url = uni_object.url
    var uni_success = uni_object.success;
    var uni_fail = uni_object.fail;
    var uni_complete = uni_object.complete;
    uni_object = null;
    //////////////////
    var wx_object = {};
    if (uni_url) {
      wx_object.url = uni_url
    }
    wx_object.success = function (wx_res) {
      if (uni_success) {
        uni_success(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx_object.fail = function (wx_res) {
      if (uni_fail) {
        uni_fail(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx.switchTab(wx_object)
  }
  static navigateBack(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_delta = uni_object.delta;
    var uni_animationType = uni_object.animationType || 'pop-out';
    var uni_animationDuration = uni_object.animationDuration || 300;
    var uni_success = uni_object.success;
    var uni_fail = uni_object.fail;
    var uni_complete = uni_object.complete;
    uni_object = null;
    ////////////////////
    var wx_object = {};
    if (uni_delta) {
      wx_object.delta = uni_delta
    }
    wx_object.success = function (wx_res) {
      if (uni_success) {
        uni_success(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx_object.fail = function (wx_res) {
      if (uni_fail) {
        uni_fail(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx.navigateBack(wx_object)
  }
  static preloadPage() {
    return console.log("preloadPage暂不支持")
  }
  ////////////////////////////////////////////////数据缓存/////////////////
  static setStorage(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_key = uni_object.key;
    var uni_data = uni_object.data;
    var uni_success = uni_object.success;
    var uni_fail = uni_object.fail;
    var uni_complete = uni_object.complete;
    uni_object = null;
    ////////////////////
    var wx_object = {};
    if (uni_key) {
      wx_object.key = uni_key
    }
    if (uni_data) {
      wx_object.data = uni_data
    }
    wx_object.success = function (wx_res) {
      if (uni_success) {
        uni_success(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx_object.fail = function (wx_res) {
      if (uni_fail) {
        uni_fail(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx.setStorage(wx_object)
  }
  static setStorageSync(key, data) {
    return wx.setStorageSync(key, data)
  }
  static getStorage(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_key = uni_object.key;
    var uni_success = uni_object.success;
    var uni_fail = uni_object.fail;
    var uni_complete = uni_object.complete;
    uni_object = null;
    ////////////////////
    var wx_object = {};
    if (uni_key) {
      wx_object.key = uni_key
    }
    wx_object.success = function (wx_res) {
      if (uni_success) {
        uni_success(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx_object.fail = function (wx_res) {
      if (uni_fail) {
        uni_fail(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx.getStorage(wx_object)
  }
  static getStorageSync(key) {
    return wx.getStorageSync(key)
  }
  static getStorageInfo(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_success = uni_object.success;
    var uni_fail = uni_object.fail;
    var uni_complete = uni_object.complete;
    uni_object = null;

    wx_object.success = function (wx_res) {
      if (uni_success) {
        uni_success(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx_object.fail = function (wx_res) {
      if (uni_fail) {
        uni_fail(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx.getSystemInfo(wx_object)
  }
  static getStorageInfoSync(key) {
    return wx.getSystemInfoSync()
  }
  static removeStorage(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_key = uni_object.key;
    var uni_success = uni_object.success;
    var uni_fail = uni_object.fail;
    var uni_complete = uni_object.complete;
    uni_object = null;
    ////////////////////
    var wx_object = {};
    if (uni_key) {
      wx_object.key = uni_key
    }
    wx_object.success = function (wx_res) {
      if (uni_success) {
        uni_success(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx_object.fail = function (wx_res) {
      if (uni_fail) {
        uni_fail(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx.removeStorage(wx_object)
  }
  static removeStorageSync(key) {
   return wx.removeStorageSync(key)
  }
  static clearStorage(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_success = uni_object.success;
    var uni_fail = uni_object.fail;
    var uni_complete = uni_object.complete;
    uni_object = null;
    ////////////////////
    var wx_object = {};
    wx_object.success = function (wx_res) {
      if (uni_success) {
        uni_success(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx_object.fail = function (wx_res) {
      if (uni_fail) {
        uni_fail(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx.clearStorage(wx_object)
  }
  static clearStorageSync() {
    return wx.clearStorageSync()
  }
  ///////////////////////////////位置////////////////////////////////////////
  static getLocation(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_type = uni_object.type;
    var uni_altitude = uni_object.altitude;
    var uni_geocode = uni_object.geocode;
    var uni_success = uni_object.success;
    var uni_fail = uni_object.fail;
    var uni_complete = uni_object.complete;
    uni_object = null;
    ////////////////////
    var wx_object = {};
    if (uni_type) {
      wx_object.type = uni_type
    }
    if (uni_altitude) {
      wx_object.altitude = uni_altitude
    }
    if (uni_geocode) {
      wx_object.geocode = uni_geocode
    }
    wx_object.success = function (wx_res) {
      if (uni_success) {
        uni_success(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx_object.fail = function (wx_res) {
      if (uni_fail) {
        uni_fail(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx.getLocation(wx_object)
  }
////////////////////////////////////////////////选择位置////////////////////////////////////////////////
  static chooseLocation(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_keyword = uni_object.keyword;
    var uni_latitude = uni_object.latitude;
    var uni_longitude = uni_object.longitude;
    var uni_success = uni_object.success;
    var uni_fail = uni_object.fail;
    var uni_complete = uni_object.complete;
    uni_object = null;
    ////////////////////
    var wx_object = {};
    if (uni_keyword) {
      wx_object.keyword = uni_keyword
    }
    if (uni_latitude) {
      wx_object.latitude = uni_latitude
    }
    if (uni_longitude) {
      wx_object.longitude = uni_longitude
    }
    wx_object.success = function (wx_res) {
      if (uni_success) {
        uni_success(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx_object.fail = function (wx_res) {
      if (uni_fail) {
        uni_fail(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx.chooseLocation(wx_object)
  }
  ///////////////////////////////////////////查看位置////////////////////////////////////////////////
  static openLocation(uni_object) {
    if (!uni_object) {
      return
    }
    var uni_latitude = uni_object.latitude;
    var uni_longitude = uni_object.longitude;
    var uni_scale = uni_object.scale || 18;
    var uni_name = uni_object.name;
    var uni_address = uni_object.address;
    var uni_success = uni_object.success;
    var uni_fail = uni_object.fail;
    var uni_complete = uni_object.complete;
    uni_object = null;
    ////////////////////
    var wx_object = {};
    if (uni_latitude) {
      wx_object.latitude = uni_latitude
    }
    if (uni_longitude) {
      wx_object.longitude = uni_longitude
    }
    if (uni_scale) {
      wx_object.scale = uni_scale
    }
    if (uni_name) {
      wx_object.name = uni_name
    }
    if (uni_address) {
      wx_object.address = uni_address
    }
    if (uni_success) {
      wx_object.success = uni_success
    }
    if (uni_fail) {
      wx_object.fail = uni_fail
    }
    if(uni_complete){
      wx_object.complete=uni_complete
    }
    wx_object.success = function (wx_res) {
      if (uni_success) {
        uni_success(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx_object.fail = function (wx_res) {
      if (uni_fail) {
        uni_fail(wx_res);
      }
      if (uni_complete) {
        uni_complete(wx_res);
      }
    };
    wx.openLocation(wx_object)
  }
  /////////////////////////////////////创建并返回 map/////////////////////////////////////////////////////////
  static createMapContext(){
    return console.log("暂时没有做！")
  }
  ///////////////////////////////////媒体/////////////////////////////////////////
  static chooseImage(uni_object){
    if(!uni_object){
      return
    }
    wx.chooseImage(wx_object)
  }
//////////////////////////////////////////////界面///--->/////showToast/////////////////////////////////////////////////////
static showToast(uni_object) {
  if (!uni_object) {
    return
  }

  var uni_title=uni_object.title;
  var uni_icon=uni_object.icon;
  var uni_image=uni_object.image;
  var uni_mask=uni_object.mask;
  var uni_duration=uni_object.duration;
  var uni_position=uni_object.position;
  var uni_success = uni_object.success;
  var uni_fail = uni_object.fail;
  var uni_complete = uni_object.complete;
  uni_object = null;
    ////////////////////
  var wx_object = {};
  if (uni_title) {
    wx_object.title = uni_title
  }
  if (uni_icon) {
    wx_object.icon = uni_icon
  }
  if (uni_image) {
    wx_object.image = uni_image
  }
  if (uni_mask) {
    wx_object.mask = uni_mask
  }
  if (uni_duration) {
    wx_object.duration = uni_duration
  }
  if (uni_position) {
    wx_object.position = uni_position
  }
  
  wx_object.success = function (wx_res) {
    if (uni_success) {
      uni_success(wx_res);
    }
    if (uni_complete) {
      uni_complete(wx_res);
    }
  };
  wx_object.fail = function (wx_res) {
    if (uni_fail) {
      uni_fail(wx_res);
    }
    if (uni_complete) {
      uni_complete(wx_res);
    }
  };
  wx.showToast(wx_object)
}
//////////////////////////////////////////////界面///--->/////hideToast/////////////////////////////////////////////////////
static hideToast(){
  return wx.hideToast()
}
//////////////////////////////////////////////界面///--->/////showLoading/////////////////////////////////////////////////////
static showLoading(uni_object){
  if(!uni_object){
    return
  }
  var uni_title=uni_object.title;
  var uni_mask=uni_object.mask;
  var uni_success = uni_object.success;
  var uni_fail = uni_object.fail;
  var uni_complete = uni_object.complete;
  uni_object=null;
  /////////////////////////////////
  var wx_object={};
  if(uni_title){
    wx_object.title=uni_title
  }
  if(uni_mask){
    wx_object.mask=uni_mask
  }
  wx_object.success = function (wx_res) {
    if (uni_success) {
      uni_success(wx_res);
    }
    if (uni_complete) {
      uni_complete(wx_res);
    }
  };
  wx_object.fail = function (wx_res) {
    if (uni_fail) {
      uni_fail(wx_res);
    }
    if (uni_complete) {
      uni_complete(wx_res);
    }
  };
  wx.showLoading(wx_object)
}
//////////////////////////////////////////////界面///--->/////hideLoading/////////////////////////////////////////////////////
static hideLoading(){
  return wx.hideLoading()
}
//////////////////////////////////////////////界面///--->/////showModal/////////////////////////////////////////////////////
static showModal(uni_object){
  if(!uni_object){
    return
  }
  var uni_title=uni_object.title;
  var uni_content=uni_object.content;
  var uni_showCancel=uni_object.showCancel;
  var uni_cancelText=uni_object.cancelText;
  var uni_cancelColor=uni_object.cancelColor;
  var uni_confirmText=uni_object.confirmText;
  var uni_confirmColor=uni_object.confirmColor;
  var uni_success = uni_object.success;
  var uni_fail = uni_object.fail;
  var uni_complete = uni_object.complete;
  uni_object=null;
  /////////////////////////////////
  var wx_object={};
  if(uni_title){
    wx_object.title=uni_title
  }
  if(uni_content){
    wx_object.content=uni_content
  }
  if(uni_showCancel){
    wx_object.showCancel=uni_showCancel
  }
  if(uni_cancelText){
    wx_object.cancelText=uni_cancelText
  }
  if(uni_cancelColor){
    wx_object.cancelColor=uni_cancelColor
  }
  if(uni_confirmText){
    wx_object.confirmText=uni_confirmText
  }
  if(uni_confirmColor){
    wx_object.confirmColor=uni_confirmColor
  }
  wx_object.success = function (wx_res) {
    if (uni_success) {
      uni_success(wx_res);
    }
    if (uni_complete) {
      uni_complete(wx_res);
    }
  };
  wx_object.fail = function (wx_res) {
    if (uni_fail) {
      uni_fail(wx_res);
    }
    if (uni_complete) {
      uni_complete(wx_res);
    }
  };
  wx.showModal(wx_object)
}
//////////////////////////////////////////////界面///--->/////showActionSheet///////////////////////////////////////////////////
static showActionSheet(uni_object){
  if(!uni_object){
    return
  }
  var uni_itemList=uni_object.itemList;
  var uni_itemColor=uni_object.itemColor;
  var uni_popover=uni_object.popover;
  var uni_success = uni_object.success;
  var uni_fail = uni_object.fail;
  var uni_complete = uni_object.complete;
  uni_object=null;
  /////////////////////////////////
  var wx_object={};
  if(uni_itemList){
    wx_object.itemList=uni_itemList
  }
  if(uni_itemColor){
    wx_object.itemColor=uni_itemColor
  }
  if(uni_popover){
    wx_object.popover=uni_popover
  }
  wx_object.success = function (wx_res) {
    if (uni_success) {
      uni_success(wx_res);
    }
    if (uni_complete) {
      uni_complete(wx_res);
    }
  };
  wx_object.fail = function (wx_res) {
    if (uni_fail) {
      uni_fail(wx_res);
    }
    if (uni_complete) {
      uni_complete(wx_res);
    }
  };
  wx.showActionSheet(wx_object)
}
//////////////////////////////////////////////界面///--->/////showActionSheet///////////////////////////////////////////////////


}