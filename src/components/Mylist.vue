<template>
<ul class="todo-main">
    <transition-group appear name="todo" >
        <TodoItem v-for="(item) in todos" :key="item.id" :todo="item" :checktodo='checktodo' :deleteTodo='deleteTodo' :updatatodo="updatatodo"/>
    </transition-group>
    
</ul>
</template>

<script>
    import TodoItem from './Myitem.vue'
    
    export default {
        name:'TodoList',
        components:{
        TodoItem
        },
        props:['todos','checktodo','deleteTodo','updatatodo']
    }
</script>
<style scoped>  
    /*main*/
    .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
    }

    .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
    }    
    .todo-enter-active {
    animation: yeyu 0.5s linear;
    }
    .todo-leave-active {
    animation: yeyu 0.5s linear reverse;
    }

    @keyframes yeyu {
    from {
    transform: translateX(100%);
    }
    to {
    transform: translateX(0px);
    }
    }
</style>
