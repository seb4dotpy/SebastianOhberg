new Vue({ //Show information
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