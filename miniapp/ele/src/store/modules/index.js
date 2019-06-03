import {getCateList} from "@/api/index"

const state = {
  list: [1,2,3,4]
}

const mutations = {

}

const actions = {
  async getCateList(){
    let data = await getCateList();
    console.log('data...', data);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
