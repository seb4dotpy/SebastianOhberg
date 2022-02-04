new Vue ({

    el: '#nav-app',

    data () {
        return{

            showNav : false
        }
    },

    methods: {

        toggleNav(){
            this.showNav = !this.showNav;
        }
    }

})

new Vue({
    el: '#projects-app',

    data () {
        return {
            showParagraphA : false,
            showParagraphB : false,
            showAboutMe : false
        }
    },

    methods: {
        toggleParagraphA (){
            this.showParagraphA = !this.showParagraphA
        },
        toggleParagraphB (){
            this.showParagraphB = !this.showParagraphB
        },
        toggleAboutMe (){
            this.showAboutMe = !this.showAboutMe
        }
     }
    
})