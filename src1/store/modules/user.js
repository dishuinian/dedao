const user = {
  namespaced:true,
  state:{
    adminName:'小张',
    score:[]
  },
  mutations:{
    CHANGE_ADMIN_NAME:(state,newAdminName)=>{
      state.adminName = newAdminName
    },
    CHANGE_SCORE:(state,payload)=>{
      state.score = payload
    }
  },
  actions:{
    changeScore({commit}){
      setTimeout(() => {
        let data = [45,67,89]
        commit("CHANGE_SCORE",data)
      }, 3000);
    }
  },
  getters:{
    goodScore: state => state.score.filter(item => item > 60)
  }
}
export default user