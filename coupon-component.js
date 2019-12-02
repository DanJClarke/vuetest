//window.Event = new Vue();

window.Event = new class{
    constructor(){
        this.vue = new Vue();
    }

    fire(event, data=null){
        this.vue.$emit(event, data);
    } 

    listen(event, callback){
        this.vue.$on(event, callback);
    }
}


Vue.component('coupon', {
    template:`
        <input placeholder="Enter your coupon code" @blur="onCouponApplied">
    `,
    methods:{
        onCouponApplied(){
           // Event.$emit('applied');
            Event.fire('applied'); // This emits an even that can be picked up by the parent ( in this case the root) and then runs the code in the parent method
        }
    }
});

new Vue({
    el: '#root',

    data: {
        couponApplied: false
    },

    methods:{
        onCouponApplied(){
            this.couponApplied = true; // Parent listens to an event and parent responds to the event
        }
    },
    created(){
        //Event.$on('applied', () => alert('Handleing it!'));
        Event.listen('applied', () => alert('Handleing it!'));
    }
})