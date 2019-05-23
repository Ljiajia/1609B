// order子模块的状态
const state = {
    feedOrder: false    //默认给个false
}

// order子模块的派生数据
const getters = {

}

// order子模块的同步改变
const mutations = {
    // 更新feedOrder的状态
    setFeedOrder(state, payload){
        console.log('payload...', payload)
        state.feedOrder = payload
    }
}

// order子模块的异步改变
const actions = {

}

export default {
    // 使用命名空间
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}