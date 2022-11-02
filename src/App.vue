<template>
  <div id="app">
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <TodoHeader @addtodos='addtodos' />
                <TodoList :todos="todos" :checktodo="checktodo" :deleteTodo="deleteTodo" :updatatodo="updatatodo"/>
                <TodoFooter :todos="todos" :checkalltodo='checkalltodo' :cleanalltodo='cleanalltodo'/>
            </div>
        </div>
    </div>
  </div>
    <!-- <propS student='ggx' school='kmgzy' :age='18'></propS>
    <propS></propS>
    <img alt="Vue logo" src="./assets/logo.png" ref="img">
    <p ref="p">这是一个练习</p>
    <h2>vue inspect > output.js</h2><h2>显示出output.js配置文件</h2>
    <button @click="dj">点击</button>
    <HelloWorld ref="hello" msg="框架的总结练习"/> -->
  
</template>

<script>
import TodoHeader from './components/Myheader.vue'
    import TodoFooter from './components/Myfooter.vue'
    import TodoList from './components/Mylist.vue'
    export default {
        name:'App',
        data(){
            return{
                // todos:[
                //     {id:"001",title:"抽烟",done:true},
                //     {id:"002",title:"喝酒",done:false},
                //     {id:"003",title:"烫头",done:true}
                // ]
                todos:JSON.parse(localStorage.getItem("todos"))||[]
            }
        },
        components:{
            TodoHeader,
            TodoFooter,
            TodoList
        },
        methods: {
            addtodos(x){
                this.todos.unshift(x);
            },
            checktodo(id){
                this.todos.map((todo)=>{
                    if(todo.id === id){
                        todo.done = !todo.done;
                    }
                })
            },
            updatatodo(id,title){
                this.todos.map((todo)=>{
                    if(todo.id === id){
                        todo.title = title;
                    }
                })
            },
            deleteTodo(id){
                this.todos = this.todos.filter( todo => todo.id !== id )
            },
            checkalltodo(done){ 
                this.todos.forEach((todo)=>{
                todo.done = done
                })
            },
            cleanalltodo(){
                this.todos=this.todos.filter((todo)=>{
                    return !todo.done
                })
            }
            
        },
        watch:{
            todos:{
                deep:true,
                handler(value){
                    localStorage.setItem("todos",JSON.stringify(value));
                }
            }
        },
        // mounted(todo,e){
        //     this.$bus.$on('updatatodo',todo.id,e.target.value)
        // }
    }
// import HelloWorld from './components/HelloWorld.vue'
// import propS from './components/pro_ps.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld,
//     propS,
//   },
//   methods: {
//     dj(){
//       console.log(this.$refs.img);
//       console.log(this.$refs.hello)
//       alert(this.$refs.img);
//       console.log(this.$refs)
//     },
//   },
// }
</script>

<style>
    body {
    background: #fff;
    }

    .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    }

    .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
    }
    .btn-edit{
    color: #fff;
    background-color: #2977ca;
    border: 1px solid #082a5b;
    margin-right: 5px;
    }

    .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
    }

    .btn:focus {
    outline: none;
    }

    .todo-container {
    width: 600px;
    margin: 0 auto;
    }
    .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    }
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

