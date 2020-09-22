export default class uni {
 
  ///////////////// basic ///应用级事件/////////////////////////////
  static base64ToArrayBuffer(base64) {
    return wx.base64ToArrayBuffer(base64);
  }
  static arrayBufferToBase64(arrayBuffer) {
    return wx.arrayBufferToBase64(arrayBuffer);
  }
  static getUpdateManager(object) {
    return wx.getUpdateManager(object);
  }
  static getLaunchOptionsSync(object) {
    return wx.getLaunchOptionsSync(object);
  }
 
  static onPageNotFound(object) {
    return wx.onPageNotFound(object);
  }
  static onError(object) {
    return wx.onError(object);
  }
  static onAppShow(object) {
    return wx.onAppShow(object);
  }
  static onAppHide(object) {
    return wx.onAppHide(object);
  }
  static offPageNotFound(object) {
    return wx.offPageNotFound(object);
  }
  static offError(object) {
    return wx.offError(object);
  }

  static offAppShow(object) {
    return wx.offAppShow(object);
  }
  
  static offAppHide(object) {
    return wx.offAppHide(object);
  }

  static setEnableDebug(object) {
    return wx.setEnableDebug(object);
  }
  static getLogManager(object) {
    return wx.getLogManager(object);
  }
//
  static writeBLECharacteristicValue(object) {
    return wx.writeBLECharacteristicValue(object);
  }
  static readBLECharacteristicValue(object) {
    return wx.readBLECharacteristicValue(object);
  }
  static onBLEConnectionStateChange(object) {
    return wx.onBLEConnectionStateChange(object);
  }
  static onBLECharacteristicValueChange(object) {
    return wx.onBLECharacteristicValueChange(object);
  }
  static notifyBLECharacteristicValueChange(object) {
    return wx.notifyBLECharacteristicValueChange(object);
  }
  static getBLEDeviceServices(object) {
    return wx.getBLEDeviceServices(object);
  }
  static getBLEDeviceCharacteristics(object) {
    return wx.getBLEDeviceCharacteristics(object);
  }
  static createBLEConnection(object) {
    return wx.createBLEConnection(object);
  }
  static closeBLEConnection(object) {
    return wx.closeBLEConnection(object);
  }
 
  //

 
  /////////////////// Ext //////////////
  static getExtConfigSync(object) {
    return wx.getExtConfigSync(object)
  }
  static getExtConfig(object) {
    return wx.getExtConfig(object)
  }
  //////////////////// File //////////
  static getFileSystemManager(object) {
    return wx.getFileSystemManager(object)
  }
  static getFileInfo(object) {
    return wx.getFileInfo(object)
  }
  static removeSavedFile(object) {
    return wx.removeSavedFile(object)
  }
  static getSavedFileInfo(object) {
    return wx.getSavedFileInfo(object)
  }
  static getSavedFileList(object) {
    return wx.getSavedFileList(object)
  }
  static openDocument(object) {
    return wx.openDocument(object)
  }
  static saveFile(object) {
    return wx.saveFile(object);
  } 
  //////////////// Network ///////////////
  static request(object) {
    return wx.request(object);
  }
  static downloadFile(object) {
    return wx.downloadFile(object)
  }
  static uploadFile(object) {
    return wx.uploadFile(object)
  }
  //////////////////////////////websocket///////////////////////////////////////
  static connectSocket(object) {
    // ////////未完成///////////请把method放到header///////////////////////////
    return wx.connectSocket(object)
  }
  static onSocketError(object) {
    return wx.onSocketError(object)
  }
  static onSocketMessage(object) {
    return wx.onSocketMessage(object)
  }
  static onSocketClose(object) {
    return wx.onSocketClose(object)
  }
  static onSocketOpen(object) {
    return wx.connectSocket(object)
  }
  static sendSocketMessage(object) {
    return wx.sendSocketMessage(object)
  }
  static closeSocket(object) {
    return wx.closeSocket(object)
  }

  ////////////////////////////////mDNS////////////////////////////////////////////
  static stopLocalServiceDiscovery(object) {
    return wx.stopLocalServiceDiscovery(object);
  }
  static startLocalServiceDiscovery(object) {
    return wx.startLocalServiceDiscovery(object);
  }
  static onLocalServiceResolveFail(callback) {
    return wx.onLocalServiceResolveFail(callback);
  }
  static onLocalServiceLost(callback) {
    return wx.onLocalServiceLost(callback);
  }
  static onLocalServiceFound(callback) {
    return wx.onLocalServiceFound(callback);
  }
  static onLocalServiceDiscoveryStop(callback) {
    return wx.onLocalServiceDiscoveryStop(callback);
  }
  static offLocalServiceResolveFail(callback) {
    return wx.offLocalServiceResolveFail(callback);
  }
  static offLocalServiceLost(callback) {
    return wx.offLocalServiceLost(callback);
  }
  static offLocalServiceFound(callback) {
    return wx.offLocalServiceFound(callback);
  }
  static offLocalServiceDiscoveryStop(callback) {
    return wx.offLocalServiceDiscoveryStop(callback);
  }
  ///////////////////////////UDP通信////////////////////////////////////////
  static createUDPSocket(){
    return wx.createUDPSocket();
  }
  ///////// Open Interface ///////////////////////////////////////////////
  static checkSession() {
    var now = new Date().getTime();
    return getApp().onekitwx._jscode && getApp().onekitwx._login && now <= getApp().onekitwx._login + 1000 * 60 * 60 * 24 * 3;
  }
  static checkSession(object) {
    if (uni.checkSession()) {
      if (object.success) {
        object.success();
      }
      if (object.complete) {
        object.complete();
      }

    } else {
      if (object.fail) {
        object.fail();
      }
      if (object.complete) {
        object.complete();
      }
    }
  }
  static login = function(object) {
    var that = this;
    if (!object) {
      return wx.login(object);
    }
    var object2 = {};
    object2.success = function(res) {
      getApp().onekitwx._code = res.code;
      getApp().onekitwx._login = new Date().getTime();
      var result = {
        code: res.code
      };
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    }
    object2.fail = function(res) {
      if (object.fail) {
        object.fail(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    }
    if (uni.checkSession()) {
      object2.success({
        code: getApp().onekitwx._code
      });
    } else {
      wx.login(object2);
    }
  };
  static requestPolymerPayment = function(object) {
   uni.login({
      success(res) {
        var code = res.code;
        var url = getApp().onekitwx.server + "orderinfo";
        wx.request({
          url: url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: "POST",
          data: {
            orderInfo: JSON.stringify(object.orderInfo),
            code: code
          },
          success(res) {
            wx.requestPayment({
              appId: res.data.appId,
              timeStamp: res.data.timeStamp,
              nonceStr: res.data.nonceStr,
              package: res.data.package,
              signType: res.data.signType,
              paySign: res.data.paySign,
            })
            if (object.success) {
              object.success(res);
            }
            if (object.complete) {
              object.complete(res);
            }
          },
          fail(res) {
            if (object.fail) {
              object.fail(res);
            }
          }
        })
      }
    });

  }
  static getUserInfo(data, callback, isAPI) {
    console.log(data);
   uni.login({
      success(res) {
        var code = res.code;
        var url = getApp().onekitwx.server + "userinfo";
        wx.request({
          url: url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: "POST",
          data: {
            isAPI,
            withCredentials: true,
            data: JSON.stringify(data),
            code: code
          },
          success(res) {
            callback(res.data);
          },
          fail(res) {
            console.error(res)
          }
        })
      }
    })

  }
  static getUserInfo(object) {
    getApp().onekitwx.getuserinfo = (data) => {
     uni._getUserInfo(data, (res) => {
        if (object.success) {
          object.success(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }, true);
    }
    wx.navigateTo({
      url: '/onekitwx/page/getuserinfo/getuserinfo'
    })
  }
  static getOpenData = function(object) {
    function success(opendata) {
      var opendata = opendata.userInfo;
      getApp().onekitwx.opendata = opendata;
      getApp().onekitwx.opendataCallbacks = [];
      for (var cb = 0; cb < getApp().onekitwx.opendataCallbacks.length; cb++) {
        getApp().onekitwx.opendataCallbacks[cb](opendata);
      }
      if (object.success) {
        object.success(opendata);
      }
      if (object.complete) {
        object.complete(opendata);
      }
    }
    var opendata = getApp().onekitwx.opendata;
    if (opendata) {
      if (Object.keys(opendata) > 0) {
        object.success(opendata);
      } else {
        if (object.success) {
          getApp().onekitwx.opendataCallbacks.push(object.success);
        }
      }
      return;
    }
    getApp().onekitwx.opendata = {};
   uni.login({
      success(res) {
        var code = res.code;
       uni.getUserInfo({
          success(res) {
            var url = getApp().onekitwx.server + "userinfo";
            my.httpRequest({
              url: url,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: "POST",
              data: {
                withCredentials: false,
                isAPI: false,
                code: code
              },
              success(res) {
                success(res.data);
              },
              fail(res) {
                console.log(res);
              }
            });
          }
        });
      }
    })

  };
  static getPhoneNumber = function(data, callback) {
   uni.login({
      success(res) {
        var code = res.code;
        var url = getApp().onekitwx.server + "phonenumber";
        wx.request({
          url: url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: "POST",
          data: {
            code,
            data: JSON.stringify(data)
          },
          success(res) {
            callback(res.data);
          }
        })
      }
    });
  }
  static navigateToMiniProgram(object) {
    return wx.navigateToMiniProgram(object)
  }
  static navigateBackMiniProgram(object) {
    return wx.navigateBackMiniProgram(object)
  }
  static getAccountInfoSync(object) {
    return wx.getAccountInfoSync(object)
  }

  static reportMonitor(object) {
    return wx.reportMonitor(object)
  }
  static reportAnalytics(object, eventName) {
    return wx.reportAnalytics(object, eventName)
  }
  static requestPayment(object) {
    return wx.requestPayment(object);
  }
  static authorize(object) {
    return wx.authorize(object)
  }
  static openSetting(object) {
    return wx.openSetting(object)
  }
  static getSetting(object) {
    return wx.getSetting(object)
  }
  static chooseAddress(object) {
    return wx.chooseAddress(object)
  }
  static openCard(object) {
    return wx.openCard(object);
  }
  static chooseInvoiceTitle(object) {
    return wx.chooseInvoiceTitle(object)
  }
  static addCard = function(object) {
    return wx.addCard(object);
  }
  
  static chooseInvoice(object) {
    return wx.chooseInvoice(object)
  }

  static getWeRunData(object) {
    return wx.getWeRunData(object)
  }
  static reportMonitor(name, value) {
    var js_code = getApp().onekit.jscode;
    wx.httpRequest({
      url: "http://192.168.0.106:8080/onekit_adapter/reportMonitor",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      data: {
        js_code: js_code,
        name: name,
        number: value
      },
      success: (res) => {
        console.log("success")
        console.log(res.data);
      },
      fail: function(res) {
        console.log(res);
      },
      complete: function(res) {
        console.log(res)
      }

    });
  };
  ////////// Router ///////////////////////////////////////////
  static navigateTo(object) {
    return wx.navigateTo(object);
  }
  static redirectTo(object) {
    return wx.redirectTo(object);
  }
  static reLaunch(object) {
    return wx.reLaunch(object);
  }
  static switchTab(object) {
    return wx.switchTab(object);
  }
  static navigateBack(object) {
    return wx.navigateBack(object);
  }
 
  ///////////// Share /////////////
  static updateShareMenu(object) {
    return wx.updateShareMenu(object)
  }
  static showShareMenu(object) {
    return wx.showShareMenu(object);
  }
  static hideShareMenu(object) {
    return wx.hideShareMenu(object)
  }
  static getShareInfo(object) {
    return wx.getShareInfo(object)
  }
  static share(object){
    console.alert("本平台不支持")
  }
  static shareWithSystem(object){
        console.alert("本平台不支持")

  }
  ////////数据缓存/////// Storage //////////////
  static setStorage(object) {
    return wx.setStorage(object)
  }
  static setStorageSync(key, value) {
    return wx.setStorageSync(key, value)
  }
  static getStorage(object) {
    return wx.getStorage(object)
  }
  static getStorageSync(key) {
    return wx.getStorageSync(key);
  }
  static getStorageInfo(object) {
    return wx.getStorageInfo(object)
  }
  static getStorageInfoSync(object) {
    return wx.getStorageInfoSync(object)
  }
  static removeStorage(object) {
    return wx.removeStorage(object)
  }
  static removeStorageSync(object) {
    return wx.removeStorageSync(object)
  }
  static clearStorage(object) {
    return wx.clearStorage(object)
  }
  static clearStorageSync(object) {
    return wx.clearStorageSync(object)
  }
    /////////位置/// Location ///////////////
    static getLocation(object) {
      return wx.getLocation(object)
    }
    static chooseLocation(object) {
      return wx.chooseLocation(object)
    }
    static openLocation(object) {
      return wx.openLocation(object)
    }
    static createMapContext(object) {
      return wx.createMapContext(object)
    }
 ///////////////////////媒体///////////// Media //////////////////////////////////////
                ///////////////////图片/////image///////////////////////////////
 static chooseImage(object) {
  return wx.chooseImage(object);
}
static previewImage(object) {
  return wx.previewImage(object)
}
static getImageInfo(object) {
  return wx.getImageInfo(object)
}
static saveImageToPhotosAlbum(object) {
  return wx.saveImageToPhotosAlbum(object)
}
 static compressImage(object) {
  return wx.compressImage(object)
}
static chooseMessageFile(object){
  return wx.chooseMessageFile(object)
}
                    /////////////////////////////录音/////////////////////////////////////////
static getRecorderManager(object) {
  return wx.getRecorderManager(object)
}
                    ////////////////////////背景音频///////////////////////////////
static getBackgroundAudioManager(object) {
  return wx.getBackgroundAudioManager(object)
}
                    ////////////////////////音频组件控制///////////////////////////////
static createInnerAudioContext(object) {
  return wx.createInnerAudioContext(object)
}
                    ////////////////////////视频///////////////////////////////

static chooseVideo(object) {
  return wx.chooseVideo(object)
}
static chooseMedia(object) {
  return wx.chooseMedia(object)
}
static saveVideoToPhotosAlbum(object) {
  return wx.saveVideoToPhotosAlbum(object)
}
static getVideoInfo(object){
  return wx.getVideoInfo(object)
}
static compressVideo(object){
  return wx.compressVideo(object)
}
static openVideoEditor(object){
  return wx.openVideoEditor(object)
}
                    ////////////////////////视频，相机，直播组件控制///////////////////////////////
static createVideoContext(object) {
  return wx.createVideoContext(object)
}
static createCameraContext(cameraId,ui) {
  return new CameraContext(wx.createCameraContext(cameraId));
} 
static createLivePlayerContext(playerId,ui) {
  return new LivePlayerContext(wx.createLivePlayerContext(playerId));
}
static createLivePusherContext(object) {
  return wx.createLivePusherContext(object)
}
static createMediaContainer(){
  return wx.createMediaContainer()
}
/////////////////////////系统信息//////////////////////////////
static getSystemInfo(object) {
  return wx.getSystemInfo(object);
}
static getSystemInfoSync() {
  return wx.getSystemInfoSync();
}
static canIUse(object) {
  return true;
}
//////////////////////////////内存/////////////////////////////
static onMemoryWarning(object) {
  return wx.onMemoryWarning(object);
}
/////////////////////////////网络状态/////////////////////////////
static getNetworkType = function(object) {
  return wx.getNetworkType(object);
}
static _network = function(res) {
  return wx._network(object);
}
static onNetworkStatusChange(callback) {
  return wx.onNetworkStatusChange(callback);
}
/////////////////////系统主题////////////////////

//////////////////////加速度计////////////////////
static onAccelerometerChange(callback) {
  return wx.onAccelerometerChange(callback);
}
static stopAccelerometer(object) {
  return wx.stopAccelerometer(object);
}
static startAccelerometer(object) {
  return wx.startAccelerometer(object);
}
//////////////////////罗盘////////////////////
static onCompassChange(callback) {
  return wx.onCompassChange(callback);
}
static stopCompass(object) {
  return wx.stopCompass(object);
}
static startCompass(object) {
  return wx.startCompass(object);
}
//////////////////////陀螺仪////////////////////
static onGyroscopeChange(object) {
  return wx.onGyroscopeChange(object);
}
static stopGyroscope(object) {
  return wx.stopGyroscope(object);
}
static startGyroscope(object) {
  return wx.startGyroscope(object);
}
//////////////////////电话////////////////////
static makePhoneCall = function(object) {
  return wx.makePhoneCall(object);
}
//
static scanCode = function(object) {
  return wx.scanCode(object);
}
//
static getClipboardData(object) {
  return wx.getClipboardData(object);
}
static setClipboardData(object) {
  return wx.setClipboardData(object);
}
//
static setScreenBrightness(object) {
  return wx.setScreenBrightness(object);
}
static setKeepScreenOn(object) {
  return wx.setKeepScreenOn(object);
}
static getScreenBrightness(object) {
  return wx.getScreenBrightness(object);
}
//
static onUserCaptureScreen(object) {
  return wx.onUserCaptureScreen(object);
}
//
static vibrate(object){
  return wx.vibrateShort(object);
  }

static vibrateLong(object) {
  return wx.vibrateLong(object);
}
static vibrateShort(object) {
  return wx.vibrateShort(object);
}
//
static addPhoneContact(object) {
  return wx.addPhoneContact(object);
}
///////蓝牙//////
static stopBluetoothDevicesDiscovery(object) { 
   return wx.stopBluetoothDevicesDiscovery(object);
  }
static startBluetoothDevicesDiscovery(object) {
  return wx.startBluetoothDevicesDiscovery(object);
}
static openBluetoothAdapter(object) { 
   return wx.openBluetoothAdapter(object); }
static onBluetoothDeviceFound(object) {
  return wx.onBluetoothDeviceFound(object);
}
static onBluetoothAdapterStateChange(object) {
  return wx.onBluetoothAdapterStateChange(object);
}
static getConnectedBluetoothDevices(object) {
  return wx.getConnectedBluetoothDevices(object);
}
static getBluetoothDevices(object) {
  return wx.getBluetoothDevices(object);
}
static getBluetoothAdapterState(object) {
  return wx.getBluetoothAdapterState(object);
}
static closeBluetoothAdapter(object) {
  return wx.closeBluetoothAdapter(object);
}
////低功耗蓝牙/////
static setBLEMTU(object){
  return wx.setBLEMTU(object)
}
static writeBLECharacteristicValue(object){
  return wx.writeBLECharacteristicValue(object)
}
static readBLECharacteristicValue(object){
  return wx.readBLECharacteristicValue(object)
}
static onBLEConnectionStateChange(object){
  return wx.onBLEConnectionStateChange(object)
}
static onBLECharacteristicValueChange(object){
  return wx.onBLECharacteristicValueChange(object)
}
static notifyBLECharacteristicValueChange(object){
  return wx.notifyBLECharacteristicValueChange(object)
}
static getBLEDeviceServices(object){
  return wx.getBLEDeviceServices(object)
}
static getBLEDeviceRSSI(object){
  return wx.getBLEDeviceRSSI(object)
}
static getBLEDeviceCharacteristics(object){
  return wx.getBLEDeviceCharacteristics(object)
}
static createBLEConnection(object){
  return wx.createBLEConnection(object)
}
static closeBLEConnection(object){
  return wx.closeBLEConnection(object)
}

 ////////////// iBeacon //////////////////
 static onBeaconServiceChange(object) {
  return wx.onBeaconServiceChange(object);
}
static onBeaconUpdate(object) {
  return wx.onBeaconUpdate(object);
}
static getBeacons(object) {
  return wx.getBeacons(object);
}
static stopBeaconDiscovery(object) {
  return wx.stopBeaconDiscovery(object);
}
static startBeaconDiscovery(object) {
  return wx.startBeaconDiscovery(object);
}
//////////////Wi-Fi/////////////
static stopWifi(object) {
  return wx.stopWifi(object);
}
static startWifi(object) {
  return wx.startWifi(object);
}
static setWifiList(object) {
  return wx.setWifiList(object);
}
static onWifiConnected(object) {
  return wx.onWifiConnected(object);
}
static onGetWifiList(object) {
  return wx.onGetWifiList(object);
}
static offWifiConnected(callback){
  return wx.offWifiConnected(callback)
}
static offGetWifiList(callback){
  return wx.offGetWifiList(callback)
}
static getWifiList(object) {
  return wx.getWifiList(object);
}
static getConnectedWifi(object) {
  return wx.getConnectedWifi(object);
}
static connectWifi(object) {
  return wx.connectWifi(object);
}
/////////////////电量/////////////////
static getBatteryInfoSync(object) {
  return wx.getBatteryInfoSync(object);
}
static getBatteryInfo(result) {
  return wx.getBatteryInfo(object);
}
static getBatteryInfo(object) {
  return wx.getBatteryInfo(object);
}
/////////////////////NFC/////////
 static stopHCE(object) {
  return wx.stopHCE(object);
}
static startHCE(object) {
  return wx.startHCE(object);
}
static sendHCEMessage(object) {
  return wx.sendHCEMessage(object);
}
static onHCEMessage(object) {
  return wx.onHCEMessage(object);
}
static offHCEMessage(callback){
return wx.offHCEMessage(callback)
}
static getNFCAdapter(){
  return wx.getNFCAdapter()
}
static getHCEState(object) {
  return wx.getHCEState(object);
}
///////////////////////////

static onDeviceMotionChange(object) {
  return wx.onDeviceMotionChange(object);
}
static stopDeviceMotionListening(object) {
  return wx.stopDeviceMotionListening(object);
}
static startDeviceMotionListening(object) {
  return wx.startDeviceMotionListening(object);
}
static offDeviceMotionChange(callback) {
  return wx.offDeviceMotionChange(callback);
}
////////生物认证////////
static startSoterAuthentication(object) {
  return wx.startSoterAuthentication(object)
}
static checkIsSupportSoterAuthentication(object) {
  return wx.checkIsSupportSoterAuthentication(object)
}
static checkIsSoterEnrolledInDevice(object) {
  return wx.checkIsSoterEnrolledInDevice(object)
}
  ////////////// Worker ///////////////
  static createWorker(path) {
    return new WORKER(path);
  }
  /////////////////键盘////////////////////
  static hideKeyboard(object) {
    return wx.hideKeyboard(object)
  }
  static onKeyboardHeightChange(callback){
    return wx.onKeyboardHeightChange(callback)
  }
//////////////////////设备完////////////////////


  ////////////// UI ////////////////
  static showActionSheet(object) {
    return wx.showActionSheet(object);
  }
 static redirectTo(object) { return wx.redirectTo(object) }
   static redirectTo(object) { return wx.redirectTo(object) }

  static hideLoading() {
    return wx.hideLoading()
  }
  static showLoading(object) {
    return wx.showLoading(object);
  }
  static hideToast() {
    return wx.hideToast();
  }
  static showToast(object) {
    return wx.showToast(object);
  }
  static showModal(object) {
    return wx.showModal(object);
  }
  //////////////////////////////////////
  static setNavigationBarColor(object) {
    return wx.setNavigationBarColor(object)
  }
  static hideNavigationBarLoading(object) {
    return wx.hideNavigationBarLoading(object)
  }
  static showNavigationBarLoading(object) {
    return wx.showNavigationBarLoading(object)
  }
  static hideHomeButton(object){
    return wx.hideHomeButton(object)
  }
  static onTabBarMidButtonTap(CALLBACK){
  console.alert("本平台暂不支持onTabBarMidButtonTap")
}
///////////////////////////////////
static setTabBarItem(object) {
  return wx.setTabBarItem(object)
}
static setTabBarStyle(object) {
  return wx.setTabBarStyle(object)
}
static hideTabBar(object) {
  return wx.hideTabBar(object)
}
static showTabBar(object) {
  return wx.showTabBar(object)
}
static removeTabBarBadge(object) {
  return wx.removeTabBarBadge(object)
}
static setTabBarBadge(object) {
  return wx.setTabBarBadge(object)
}
static hideTabBarRedDot(object) {
  return wx.hideTabBarRedDot(object)
}
static showTabBarRedDot(object) {
  return wx.showTabBarRedDot(object)
}
///////////////////////////////////////////////
static setBackgroundTextStyle(object) {
    return wx.setBackgroundTextStyle(object)
  }
  static setBackgroundColor(object) {
    return wx.setBackgroundColor(object)
  }
   /////////////////// animation //////////////////////////
   static createAnimation(object) {
    return wx.createAnimation(object);
  }
/////////////////////滚动//////////////////
static pageScrollTo(object) {
  return wx.pageScrollTo(object)
}
//////////////////窗口////////////////////////
static offWindowResize(object) {
  return wx.offWindowResize(object)
}
static onWindowResize(object) {
  return wx.onWindowResize(object)
}
/////////////////字体/////////////////////////
static loadFontFace(object) {
  return wx.loadFontFace(object)
}
/////////////////下拉/////////////////////////
static PullDownRefresh() {
  return wx.startPullDownRefresh();
}
static stopPullDownRefresh() {
  return wx.stopPullDownRefresh();
}
static startPullDownRefresh(object) {
  return wx.startPullDownRefresh(object);
}
//////////////////////////////////////////
static createOffscreenCanvas() {
  return wx.createOffscreenCanvas();
}
static createContext() {
  return new Context();
}
static createCanvasContext(canvasId,ui) {
  return new CanvasContext(wx.createCanvasContext(canvasId));
}
static canvasToTempFilePath(object) {
  return wx.canvasToTempFilePath(object);
}
static canvasPutImageData(object) {
  return wx.canvasPutImageData(object)
};
static canvasGetImageData(object) {
  return wx.canvasGetImageData(object)
};
////////////////////////广告//////////////////
static createRewardedVideoAd(object){
  return wx.createRewardedVideoAd(object)
}
static createInterstitialAd(object){
  return wx.createInterstitialAd(object)
}
////////////////////////////////
static requestSubscribeMessage(object){
  return requestSubscribeMessage(object)
}
//////////////////////////////////////////
  static setNavigationBarTitle(object) {
    return wx.setNavigationBarTitle(object);
  };

  
  static setTopBarText(object) {
    return wx.setTopBarText(object)
  }
  static nextTick(object) {
    return wx.nextTick(object)
  }
  static getMenuButtonBoundingClientRect(object) {
    return wx.getMenuButtonBoundingClientRect(object)
  }
 

static stopVoice(object) {
  return wx.stopVoice(object)
}
static pauseVoice(object) {
  return wx.pauseVoice(object)
}
static playVoice(object) {
  return wx.playVoice(object)
}
static setInnerAudioOption(object) {
  return wx.setInnerAudioOption(object)
}
static getAvailableAudioSources(object) {
  return wx.getAvailableAudioSources(object)
}

static createAudioContext(object) {
  return wx.createAudioContext(object)
}
static onBackgroundAudioStop(object) {
  return wx.onBackgroundAudioStop(object)
}
static onBackgroundAudioPause(object) {
  return wx.onBackgroundAudioPause(object)
}
static onBackgroundAudioPlay(object) {
  return wx.onBackgroundAudioPlay(object)
}
static stopBackgroundAudio(object) {
  return wx.stopBackgroundAudio(object)
}
static seekBackgroundAudio(object) {
  return wx.seekBackgroundAudio(object)
}
static pauseBackgroundAudio(object) {
  return wx.pauseBackgroundAudio(object)
}
static playBackgroundAudio(object) {
  return wx.playBackgroundAudio(object)
}
static getBackgroundAudioPlayerState(object) {
  return wx.getBackgroundAudioPlayerState(object)
}



static createInnerAudioContext(audioId,ui) {
  return new InnerAudioContext(wx.createInnerAudioContext(audioId));
}

static createVideoContext(videoId,ui) { 
  return new VideoContext(wx.createVideoContext(videoId)); 
}





  ////////////// WXML ///////////////
  static createSelectorQuery(object) {
    return wx.createSelectorQuery(object)
  }
  static createIntersectionObserver(object) {
    return wx.createIntersectionObserver(object)
  }
  ///////////////////////////

  ///////////////////////////////////
  static createARCameraContext(object) {
    throw new Error("createARCameraContext�ݲ�֧��!!")
  }
}
uni.ai = {};
for (var api of ["ocrIdCard", "ocrBankCard", "ocrDrivingLicense", "ocrVehicleLicense", "textReview", "textToAudio", "imageAudit", "advancedGeneralIdentify", "objectDetectIdentify", "carClassify", "dishClassify", "logoClassify", "animalClassify", "plantClassify", "getVoiceRecognizer", "faceDetect", "faceMatch", "faceSearch", "facePersonVerify", "facePersonIdmatch", "faceLivenessSessioncode", "nlpLexerCustom"]) {
  ai_init(api);
}

function ai_init(api) {
 uni.ai[api] = (object) => {
    return uni_ai.run(api, object);
  }
}

function getSubNVueById(subNvueId){
  
}
function getCurrentSubNVue(){

}
function requireNativePlugin(PluginName){
  
}
static getProvider(object){
  console.alert("本平台不支持getProvider")
}