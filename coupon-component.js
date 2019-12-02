Vue.component('coupon', {
    template:`
        <input placeholder="Enter your coupon code" @blur="onCouponApplied">
    `,
    methods:{
        onCouponApplied(){
            this.$emit('applied'); // This emits an even that can be picked up by the parent ( in this case the root) and then runs the code in the parent method
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
    }
})