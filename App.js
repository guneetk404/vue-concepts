Vue.component('greeting',{
    template: '<h3> hey there {{name}}! <button @click="changename">click</button> reuseable components</h3>',
    data:function(){
        return {
        name:'guneet'
        }
    },
    methods:{
        changename:function(){
            this.name='guneetsingh'
        },
    }

});


new Vue({
    el:'#vue-app',
    data:{
        output:'',
    },
    methods:{   
        readRefs:function(){
            console.log(this.$refs);
            this.output= this.$refs.input.value;
        }
    },
    computed:{

    }



});







var one = new Vue({
    el:'#vue-app-one',
    data: {
    title:'vue-app-1',
    characters:['pahul','harsh','deepak','guneet'],
    ninjas:[
     {name:'guneet',age:25},   
     {name:'runeet',age:25},   
     {name:'luneet',age:25}  
    ]
    },
    methods:{
        
    },
    computed:{
        compclasses :function(){
          return{  
            available:this.available,
            nearby:this.nearby
            }
        }
    }
});

var two = new Vue({
    el:'#vue-app-two',
    data:{
        title:'vue-app-two'
    },
    methods:{
        changetitle:function(){ 
            one.title = "title changed";
        }
    },
    computed:{
    
    }
});
