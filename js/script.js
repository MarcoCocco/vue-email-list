
const { createApp } = Vue

createApp({
    data() {
        return {
            emailList: [],
            singleEmail: null,
        }
    },

    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
            this.singleEmail = res.data.response;
            this.emailList.push(this.singleEmail);
        });
    },

}).mount('#app')