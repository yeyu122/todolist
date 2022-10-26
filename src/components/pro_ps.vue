<template>
    <div ref="">
        <h1>学校名称:{{school}}</h1>
        <h1>学生姓名:{{student}}</h1>
        <h1>学生年龄:{{myage}}</h1>
        <button @click='addage'>点击</button>
    </div>
</template>

<script>
export default {
    name: 'propS',
    data(){
        return{
            myage:this.age,
        }
    },
    methods: {
        addage(){
            this.myage++;
        }
    },
    // props
    // 方法一较为常见
    // props:['school','student','age'],
    //方法二可以限制数据类型
    props:{
        school:{
            type:String,
            default:"文山学院",
            require:true//必要的
        },
        student:{
            type:String,
            default:"yeyu",
        },
        age: {
            type:Number,
            default:11,
        }
    }
}
</script>
    

<style scoped>
button{
        width:100px;
    }
</style>