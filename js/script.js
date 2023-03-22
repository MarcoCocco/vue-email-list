
const { createApp } = Vue

createApp({
    data() {
        return {
            emailList: []
        }
    },

    methods: {
        createEmailList() {
            //ho usato il metodo .all per fare 10 chiamate contemporanee
            //mappando le risposte per recuperare solo gli indirizzi email
            //che verranno poi inseriti contemporaneamente nell'emailList (Bonus)
            axios.all([
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail'),
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail'),
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail'),
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail'),
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail'),
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail'),
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail'),
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail'),
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail'),
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail'),
                ]).then((res) => {
                    this.emailList = res.map((res) => res.data.response);
                });
        },
    }

}).mount('#app')