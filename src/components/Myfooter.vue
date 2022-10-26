<template>
  <div class="todo-footer" v-show="total">
      <label> 
      <input type="checkbox" @change="checkall" :checked='isall'/>
      </label>
      <span>
      <span>已完成{{doneall}}</span> / 全部{{total}}
      </span>
      <button @click='cleanall' class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
        name:'TodoFooter',
        props:['todos','checkalltodo','cleanalltodo'],
        computed:{
            doneall(){
                let i = 0;
                this.todos.map((todo)=>{
                    if(todo.done) i++
                })
                return i;
                /*const x =this.todos.reduce((pre,current)=>{
                console.log('@',pre,current)
                return pre + (current.done ? 1 : 0)
                },0)
                return x*/
            },
            total(){
                return this.todos.length;
            },
            isall(){
                return this.doneall ===this.total && this.total>0
            },
            
        },
        methods:{
            checkall(e){
                this.checkalltodo(e.target.checked)
            },
            cleanall(){
                if(confirm("是否删除已完成的任务?"))
                this.cleanalltodo()
            }
        },
    }
</script>
<style scoped>
    /*footer*/
    .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
    }

    .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    }

    .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    }

    .todo-footer button {
    float: right;
    margin-top: 5px;
    }    
</style>