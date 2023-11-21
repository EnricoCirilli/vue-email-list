const { createApp } = Vue;

createApp({
    
data()
{
    return{
       emails: [],
    }
    
},

// "mounted hook" può essere utilizzato per eseguire il codice dopo che il componente ha terminato il rendering iniziale e creato i nodi DOM
mounted(){

    for (i = 0; i < 10; i++) {
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(
            email => {
            console.log(email.data.response);
            this.emails.push(email.data.response);
        })
        
    }
    
}

}).mount("#app")