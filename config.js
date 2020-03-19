var elementHost = 'https://static.uookk.com/'
var DataPath = {
  element: {
    elementHost,
    // 登录地址，用于建立会话
    loginUrl: `${host}/weapp/login`,
    // 测试的请求地址，用于测试会话
    requestUrl: `${host}/weapp/user`,
    // 上传图片接口
    uploadUrl: `${host}/weapp/upload`,
    // 封面获取接口
    bookCoverUrl: `${elementHost}/demo/images/`,
    // 背景图获取接口
    backgroundUrl: `${elementHost}/demo/images/wb`,
    // 贴纸素材获取接口
    stickerUrl: `${elementHost}/demo/`,
  }
}

module.exports = {
  config: DataPath,
  HttpHost: elementHost,                                       // 请求域名 格式： https://您的域名 
  ElementHost: elementHost,                             // 素材主机
  HEADER: { 'content-type': 'application/json' },       // 请求头
  SERVER_DEBUG: true,                                   // Socket调试模式
  PINGINTERVAL: 3000,                                   // 心跳间隔
  TOKENNAME: 'Authori-zation',                          // 回话密钥名称 请勿修改此配置
  base_shopid: '6127270aaadb357f9a26d80285d983d7',
}