<template>
    <el-row type="flex" justify="center">
       <el-col :span="16" >
       	   <el-table :data="this.tableData" style="width: 100%">
	         <el-table-column prop="id" label="id" ></el-table-column>
	         <el-table-column prop="name" label="name"   ></el-table-column>
	         <el-table-column prop="description" label="description"  ></el-table-column>
	         <el-table-column prop="loginStatus" label="loginStatus"  ></el-table-column>
	         <el-table-column fixed="right" label="操作"  >
	         	<template slot-scope="scope">
			        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
			        <el-button type="text" size="small">编辑</el-button>
                </template>
	         </el-table-column>
	       </el-table>
       </el-col>
    </el-row>

</template>

<script>

export default {
	name:"UserTable",
	created(){
		this.$store.dispatch("findAllUser");
	},
	computed:{
		tableData(){

			return this.$store.state.UserTable.userList;
		}
	}
}
</script>

<style scoped>
.cell{
	text-align: left;
}
	


</style>