Component({
  externalClasses: ['uk-class'],
  properties: {
    name: {
      type: String,
      value: ''
    },
    size: {
      type: Number,
      value: 32
    },
    color: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: ''
    },
    bold:{
      type:Boolean,
      value:false
    },
    visible:{
      type: Boolean,
      value: true
    }
  }
});
