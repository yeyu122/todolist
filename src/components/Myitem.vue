<template>
  <li>
    <label>
        <input type="checkbox" :checked='todo.done' @change="handlecheck(todo.id)"/>
        <span v-show="!todo.isedit">{{todo.title}}</span>
        <input v-show="todo.isedit" type="text" :value="todo.title" @blur="handleblur(todo,$event)" ref="inputitle">
    </label>
    <button class="btn btn-danger" style="" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handleupdata(todo)" v-show="!todo.isedit">编辑</button>
  </li>
</template>  

<script>
    export default {
        name:'TodoItem',
        props: ['todo','checktodo','deleteTodo','updatatodo'],
        methods: {
          handlecheck(id){
            this.checktodo(id)
          },
          handleDelete(id){
            if(confirm('确定删除吗')){
              this.deleteTodo(id)
            }
      },
      handleupdata(todo){
        // if(todo.hasOwnproperty('isedit')){
        //     todo.isedit = true;
        // }else{
        //     this.$set(todo,'isedit',true);
        //     console.log(todo)
        // }
        this.$set(todo,'isedit',true);
        // setTimeout(() => {
        //   this.$refs.inputitle.focus()
        // }, 200);
        todo.isedit = true;
        this.$nextTick(function(){
          this.$refs.inputitle.focus()
        })
          // todo.isedit = true;
      },
      handleblur(todo,e){
        if(!e.target.value.trim()){
            return alert("请输入非空格字符")
        }
        todo.isedit = false;
        this.updatatodo(todo.id,e.target.value);
        console.log(e.target.value);
        // this.$bus.$emit('updatatodo',todo.id,e.target.value)
      }   
        }
    }
</script>
<style scoped>
    /*item*/
    li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
    }

    li label {
    float: left;
    cursor: pointer;
    }

    li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
    }

    li button {
    float: right;
    display: none;
    margin-top: 3px;
    }

    li:before {
    content: initial;
    }

    li:last-child {
    border-bottom: none;
    }    
    li:hover{
      background-color:bisque;
    }
    li:hover button{
      display:block;
    }
</style>