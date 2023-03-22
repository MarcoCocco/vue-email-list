
const { createApp } = Vue

createApp({
    data() {
        return {
            emailList: [],
            singleEmail: null,
        }
    },

    methods: {
        createEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                this.singleEmail = res.data.response;
                this.emailList.push(this.singleEmail);
            });
        },

        createEmailList() {
            for (let i = 0; i < 10; i++) {
                this.createEmail();
            }
        },
    }

}).mount('#app')