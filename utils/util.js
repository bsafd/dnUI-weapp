//公共js，主要做表单验证，以及基本方法封装
const utils = {
  // 除法函数，用来得到精确的除法结果
  //说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
  //调用：$h.Div(arg1,arg2)
  //返回值：arg1除以arg2的精确结果
  Div: function (arg1, arg2) {
    arg1 = parseFloat(arg1);
    arg2 = parseFloat(arg2);
    var t1 = 0, t2 = 0, r1, r2;
    try { t1 = arg1.toString().split(".")[1].length; } catch (e) { }
    try { t2 = arg2.toString().split(".")[1].length; } catch (e) { }
    r1 = Number(arg1.toString().replace(".", ""));
    r2 = Number(arg2.toString().replace(".", ""));
    return this.Mul(r1 / r2, Math.pow(10, t2 - t1));
  },
  //加法函数，用来得到精确的加法结果
  //说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
  //调用：count.Add(arg1,arg2)
  //返回值：arg1加上arg2的精确结果
  Add: function (arg1, arg2) {
    arg2 = parseFloat(arg2);
    var r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(100, Math.max(r1, r2));
    return (this.Mul(arg1, m) + this.Mul(arg2, m)) / m;
  },
  //减法函数，用来得到精确的减法结果
  //说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的减法结果。
  //调用：$h.Sub(arg1,arg2)
  //返回值：arg1减去arg2的精确结果
  Sub: function (arg1, arg2) {
    arg1 = parseFloat(arg1);
    arg2 = parseFloat(arg2);
    var r1, r2, m, n;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((this.Mul(arg1, m) - this.Mul(arg2, m)) / m).toFixed(n);
  },
  //乘法函数，用来得到精确的乘法结果
  //说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
  //调用：$h.Mul(arg1,arg2)
  //返回值：arg1乘以arg2的精确结果
  Mul: function (arg1, arg2) {
    arg1 = parseFloat(arg1);
    arg2 = parseFloat(arg2);
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try { m += s1.split(".")[1].length } catch (e) { }
    try { m += s2.split(".")[1].length } catch (e) { }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
  },
  /**
   * 移除数组中的某个数组并组成新的数组返回
   * @param array array 需要移除的数组
   * @param int index 需要移除的数组的键值
   * @param string | int 值
   * @return array
   * 
  */
  ArrayRemove: function(array, index, value) {
    const valueArray = [];
    if (array instanceof Array) {
      for (let i = 0; i < array.length; i++) {
        if (typeof index == 'number' && array[index] != i) {
          valueArray.push(array[i]);
        } else if (typeof index == 'string' && array[i][index] != value) {
          valueArray.push(array[i]);
        }
      }
    }
    return valueArray;
  },
  percentage:function(number1, number2) {
    // 小数点后两位百分比
    return (Math.round(number1 / (number1 + number2) * 10000) / 100.00 + "%");
  },
  // 异步加载取值
  promisic: function (func) {
    return function (params = {}) {
      return new Promise((resolve, reject) => {
        const args = Object.assign(params, {
          success: (res) => {
            resolve(res);
          },
          fail: (error) => {
            reject(error);
          }
        });
        func(args);
      });
    };
  },
  /**
 * 处理富文本里的图片宽度自适应
 * 1.去掉img标签里的style、width、height属性
 * 2.img标签添加style属性：max-width:100%;height:auto
 * 3.修改所有style里的width属性为max-width:100%
 * 4.去掉<br/>标签
 * @param html
 * @returns {void|string|*}
 */
  formatRichText: function (html) {
      let newContent = html.replace(/<img[^>]*>/gi, function (match, capture) {
        match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
        match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
        match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
        return match;
      });
    newContent = newContent.replace(/style="[^"]+"/gi, function (match, capture) {
      match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;');
      return match;
    });
    newContent = newContent.replace(/<br[^>]*\/>/gi, '');
    newContent = newContent.replace(/\<img/gi, '<img style="max-width:100%;height:auto;display:block;margin-top:0;margin-bottom:0;"');
    return newContent;
  },
  base64src: function(base64data) {
    let FILE_BASE_NAME = 'tmp_base64src';
    return new Promise((resolve, reject) => {
      if (!wx.getFileSystemManager) {
        reject(new Error('微信版本过低'))
        return
      }
      let fsm = wx.getFileSystemManager();

      const [, format, bodyData] = /data:image\/(\w+);base64,(.*)/.exec(base64data) || [];
      if (!format) {
        reject(new Error('ERROR_BASE64SRC_PARSE'));
      }
      const filePath = `${wx.env.USER_DATA_PATH}/${FILE_BASE_NAME}.${format}`;
      const buffer = wx.base64ToArrayBuffer(bodyData);
      fsm.writeFile({
        filePath,
        data: buffer,
        encoding: 'binary',
        success() {
          resolve(filePath);
        },
        fail() {
          reject(new Error('ERROR_BASE64SRC_WRITE'));
        },
      });
    });
  },
  /**
  * opt  object | string
  * to_url object | string
  * 例:
  * this.Tips('/pages/test/test'); 跳转不提示
  * this.Tips({title:'提示'},'/pages/test/test'); 提示并跳转
  * this.Tips({title:'提示'},{tab:1,url:'/pages/index/index'}); 提示并跳转值table上
  * tab=1 一定时间后跳转至 table上
  * tab=2 一定时间后跳转至非 table上
  * tab=3 一定时间后返回上页面
  * tab=4 关闭所有页面跳转至非table上
  * tab=5 关闭当前页面跳转至table上
  */
  Tips: function (opt, to_url) {
    if (typeof opt == 'string') {
      to_url = opt;
      opt = {};
    }
    var title = opt.title || '', icon = opt.icon || 'none', endtime = opt.endtime || 2000;
    if (title) wx.showToast({ title: title, icon: icon, duration: endtime })
    if (to_url != undefined) {
      if (typeof to_url == 'object') {
        var tab = to_url.tab || 1, url = to_url.url || '';
        switch (tab) {
          case 1:
            //一定时间后跳转至 table
            setTimeout(function () {
              wx.switchTab({
                url: url
              })
            }, endtime);
            break;
          case 2:
            //跳转至非table页面
            setTimeout(function () {
              wx.navigateTo({
                url: url,
              })
            }, endtime);
            break;
          case 3:
            //返回上页面
            setTimeout(function () {
              wx.navigateBack({
                delta: parseInt(url),
              })
            }, endtime);
            break;
          case 4:
            //关闭当前所有页面跳转至非tab页面
            setTimeout(function () {
              wx.reLaunch({
                url: url,
              })
            }, endtime);
            break;
          case 5:
            //关闭当前页面跳转至非tab页面
            setTimeout(function () {
              wx.redirectTo({
                url: url,
              })
            }, endtime);
            break;
        }

      } else if (typeof to_url == 'function') {
        setTimeout(function () {
          to_url && to_url();
        }, endtime);
      } else {
        //没有提示时跳转不延迟
        setTimeout(function () {
          wx.navigateTo({
            url: to_url,
          })
        }, title ? endtime : 0);
      }
    }
  },
  isNullOrEmpty: function(value) {
    //是否为空
    return (value === null || value === '' || value === undefined) ? true : false;
  },
  trim: function(value) {
    //去空格
    return value.replace(/(^\s*)|(\s*$)/g, "");
  },
  isMobile: function(value) {
    //是否为手机号
    return /^(?:13\d|14\d|15\d|16\d|17\d|18\d|19\d)\d{5}(\d{3}|\*{3})$/.test(value);
  },
  isFloat: function(value) {
    //金额，只允许保留两位小数
    return /^([0-9]*[.]?[0-9])[0-9]{0,1}$/.test(value);
  },
  isNum: function(value) {
    //是否全为数字
    return /^[0-9]+$/.test(value);
  },
  formatNum: function(num) {
    //格式化手机号码
    if (utils.isMobile(num)) {
      num = num.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    }
    return num;
  },
  interfaceUrl: function() {
    //接口地址
    return "https://static.uookk.com/";
  },
  toast: function(text, duration, success) {
    wx.showToast({
      title: text,
      icon: success ? 'success' : 'none',
      duration: duration || 2000
    })
  },
  preventMultiple: function(fn, gapTime) {
    if (gapTime == null || gapTime == undefined) {
      gapTime = 200;
    }
    let lastTime = null;
    return function() {
      let now = +new Date();
      if (!lastTime || now - lastTime > gapTime) {
        fn.apply(this, arguments);
        lastTime = now;
      }
    }
  },
  request: function(url, postData, method, type, hideLoading) {
    //接口请求
    if (!hideLoading) {
      wx.showLoading({
        title: '请稍候...',
        mask: true
      })
    }
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.interfaceUrl() + url,
        data: postData,
        header: {
          'content-type': type ? 'application/x-www-form-urlencoded' : 'application/json'
        },
        method: method, //'GET','POST'
        dataType: 'json',
        success: (res) => {
          !hideLoading && wx.hideLoading()
          resolve(res.data)
        },
        fail: (res) => {
          !hideLoading && this.toast("网络不给力，请稍后再试~")
          //wx.hideLoading()
          reject(res)
        }
      })
    })
  },
  uploadFile: function(src) {
    const that = this
    wx.showLoading({
      title: '请稍候...',
      mask: true
    })
    return new Promise((resolve, reject) => {
      const uploadTask = wx.uploadFile({
        url: 'http://39.108.124.252:8081/fileServce/file/ ', //测试地址,暂不使用
        filePath: src,
        name: 'file',
        header: {
          'content-type': 'multipart/form-data'
        },
        formData: {},
        success: function(res) {
          wx.hideLoading()
          let d = JSON.parse(res.data)
          if (d.code === 1) {
            let fileObj = JSON.parse(d.data)[0];
            //文件上传成功后把图片路径数据提交到服务器，数据提交成功后，再进行下张图片的上传
            resolve(fileObj)
          } else {
            that.toast(res.message);
          }
        },
        fail: function(res) {
          reject(res)
          wx.hideLoading();
          that.toast(res.message);
        }
      })
    })
  }
}

module.exports = {
  isNullOrEmpty: utils.isNullOrEmpty,
  trim: utils.trim,
  isMobile: utils.isMobile,
  isFloat: utils.isFloat,
  isNum: utils.isNum,
  interfaceUrl: utils.interfaceUrl,
  toast: utils.toast,
  request: utils.request,
  uploadFile: utils.uploadFile,
  formatNum: utils.formatNum
}