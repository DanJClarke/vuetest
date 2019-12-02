Vue.component('message', {
    props: ['title', 'body'],

    data() {

console.log('test');

        return {
            isVisible: true,
        };
    },

    template: `
        <article class="message" v-show="isVisible">
        <div class="message-header">
            <p>{{ title }}</p>
            <button class="delete" @click="isVisible = false" aria-label="delete"></button>
        </div>
        <div class="message-body">
            {{ body }} 
        </div>
    </article>
    `
});

Vue.component('modal', {
    template:`
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <slot></slot>
                </div>
            </div>
            <button class="modal-close is-large" @click="$emit('close')" aria-label="close"></button>
        </div>
    `

    }   
);






new Vue({
    el: '#root',

    data:{
        showModal: false
    }
})