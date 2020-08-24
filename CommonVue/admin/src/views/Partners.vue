<template>
   <el-row>
   <el-col :span = "22">人数总计({{number}})</el-col>
   <el-col :span = "2" class="partners">
       <el-dropdown size="small" placement="bottom" trigger="click" 
           @command="addPartners" style="margin-left: 20px;">
           <el-button class="addPartners" size="mini">添加成员
             <i class="el-icon-arrow-down el-icon--right"></i>
           </el-button>
           <el-dropdown-menu slot="dropdown">
             <el-dropdown-item command="smsInvite">短信邀请</el-dropdown-item>
             <el-dropdown-item command="linkInvite">链接邀请</el-dropdown-item>
           </el-dropdown-menu>
        </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
        number : 10,
      }
  },
  methods :{
    addPartners(command){
      switch(command){
        case "smsInvite":
          alert('短信');
          break;
        case "linkInvite":
          alert('链接');
          break;
        default:
          break;
      }
    }
  }
}
</script>

