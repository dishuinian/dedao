  const state={
    color:"#fff"
  }
  const actions={

  }
  const mutations={
    CHANGE_COLOR:(state,newColor)=>{
      state.color = newColor
    },
    fun1(){
      console.log("theme-fun1");
    }
  }
  const getters={

  }
  export default{
    namespaced:true,
    state,
    actions,
    mutations,
    getters
  }