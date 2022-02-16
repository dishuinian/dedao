<template>
   <div class="copyRight">
       <div class="content">
           <div class="power">
            <i class="iconfont icon-dedaodaxueicon-LOGO"></i>
        </div>
        <div class="support">
           <i class="iconfont icon-youzan"></i>
            <span>有赞提供技术支持</span> 
        </div>
       </div>
        
        
   </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.copyRight{
    width: 7.5rem;
    height: 4rem;
    text-align: center;
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-content: center;
    .content{
        .power{
                i{
                    font-size: .52rem;
                    color: #cacaca;
                }
        }
        .support{
            margin-top: .12rem;
            i,span{
            font-size: .24rem;
            color: #cacaca;
            }
        }
    }
   
    
    
}
</style>