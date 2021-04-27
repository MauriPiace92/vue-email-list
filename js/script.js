var app= new Vue(
    {
        el:'#root',
        data:{
            mycounter:10,
            myArray:[]
        
        },
        methods:{

        },
        mounted(){
            for (let i = 0; i < this.mycounter ; i++){
                
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {

                       const result= response.data;  

                       this.myArray.push(result.response);
                       
                       
                });
                
            }
        }
    }
);