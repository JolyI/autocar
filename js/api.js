baseUrl = 'http://127.0.0.1:8080'; // common.js也有 如需改动 需同步
// ===============用户管理===================
const _apiUserSave = baseUrl + '/user/save'
const _apiUserLogin = baseUrl + '/user/login'
const _apiUserList = baseUrl + '/user/list'
const _apiUserUpdate = baseUrl + '/user/update'
const _apiUserDelete = baseUrl + '/user/'

// ===============车队管理===================
// 车队列表
const _apiTeamList = baseUrl + '/team/list'
    // 编辑车队信息
const _apiTeamUpdate = baseUrl + '/team/update'
    // 新增车队
const _apiTeamSave = baseUrl + '/team/save'
    // 删除车队
const _apiTeamDelete = baseUrl + '/team/'
    // 查询车队成员
const _apiTeamUser = baseUrl + '/user/listByTeamId'


// ===============信息管理===================
const _apiInfoList = baseUrl + '/info/list'
const _apiInfoSave = baseUrl + '/info/save'
const _apiInfoUpdate = baseUrl + '/info/update'
const _apiInfoDelete = baseUrl + '/info/'


// ===============审核管理===================
const _apiInfoReviewList = baseUrl + '/review/list'
const _apiInfoReviewUpdate = baseUrl + '/review/update'
const _apiInfoReviewSave = baseUrl + '/review/save'


// ===============任务管理===================
const _apitaskList = baseUrl + '/task/list'
    // 删除任务
const _apitaskDelete = baseUrl + '/task/'
    // 添加任务
const _apitaskAdd = baseUrl + '/task/save'
    // 修改任务
const _apitaskUpdate = baseUrl + '/task/update'


// ===============博客管理===================
const _apiBlogist = baseUrl + '/content/list'
const _apiBlogpage = baseUrl + '/content/page'
const _apiBlogSave = baseUrl + '/content/save'
const _apiBlogDetail = baseUrl + '/content/'


// ===============评论管理===================
const _apiCommentSave = baseUrl + '/comment/save'
const _apiCommentList = baseUrl + '/comment/list'