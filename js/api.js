baseUrl = 'http://127.0.0.1:8080'; // common.js也有 如需改动 需同步
// ===============用户管理===================
const _apiUserSave = baseUrl + '/user/save'
const _apiUserLogin = baseUrl + '/user/login'
const _apiUserList = baseUrl + '/user/list'

// ===============车队管理===================
// 车队列表
const _apiTeamList = baseUrl + '/team/list'

// ===============信息管理===================
const _apiInfoList = baseUrl + '/info/list'


// ===============任务管理===================
const _apitaskList = baseUrl + '/task/list'
    // 删除任务
const _apitaskDelete = baseUrl + '/task/'
    // 添加任务
const _apitaskAdd = baseUrl + '/task/save'
    // 修改任务
const _apitaskUpdate = baseUrl + '/task/update'