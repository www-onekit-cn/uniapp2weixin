// onekit/ui/navigator/navigator.js
Component({
  options: {
    virtualHost: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    id:{type:String,value:""},
    Class:{type:String,value:""},
    Style:{type:String,value:""},
    url:{type:String,value:""},
    openType:{type:String,value:"navigate"},
    delta:{type:Number,},
    hoverClass:{type:String,value:"navigator-hover"},
    hoverStopPropagation:{type:Boolean,value:false},
    hoverStartTime:{type:Number,value:50},
    hoverStayTime:{type:Number,value:600},
    target:{type:String,value:"self"},

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
