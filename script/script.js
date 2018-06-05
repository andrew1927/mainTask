let app = new Vue({
    el: "#app",
    data: {
        show: true,
        selectedFile: null,
        fileReader: new FileReader(),
        addedSrc: 6,
        srcPopup: null,
        arr: [
            {
                name: "img1",
                type: 'portrait',
                src: "images/img1.png",
                likes: 4,
                dislikes: 0,
                comments: [
                    {
                    nickname: "Anon93",
                    date: new Date(),
                    comment: "lorem ipsut terra"
                    }
                ]
            },
            {
                name: "img2",
                type: 'portrait',
                src: "images/img2.png",
                likes: 4,
                dislikes: 0,
                comments: [
                    {
                        nickname: "Anon93",
                        date: new Date(),
                        comment: "lorem ipsut terra"
                    }
                ]
            },
            {
                name: "img3",
                type: 'portrait',
                src: "images/img3.png",
                likes: 4,
                dislikes: 0,
                comments: [
                    {
                        nickname: "Anon93",
                        date: new Date(),
                        comment: "lorem ipsut terra"
                    }
                ]
            },
            {
                name: "img4",
                type: 'portrait',
                src: "images/img4.png",
                likes: 4,
                dislikes: 0,
                comments: [
                    {
                        nickname: "Anon93",
                        date: new Date(),
                        comment: "lorem ipsut terra"
                    }
                ]
            },
            {
                name: "img5",
                type: 'portrait',
                src: "images/img5.png",
                likes: 4,
                dislikes: 0,
                comments: [
                    {
                        nickname: "Anon93",
                        date: new Date(),
                        comment: "lorem ipsut terra"
                    }
                ]
            },
            {
                name: "img6",
                type: 'portrait',
                src: "images/img6.png",
                likes: 4,
                dislikes: 0,
                comments: [
                    {
                        nickname: "Anon93",
                        date: new Date(),
                        comment: "lorem ipsut terra"
                    }
                ]
            },
            {
                name: "img7",
                type: 'portrait',
                src: "images/img7.png",
                likes: 4,
                dislikes: 0,
                comments: [
                    {
                        nickname: "Anon93",
                        date: new Date(),
                        comment: "lorem ipsut terra"
                    }
                ]
            },
            {
                name: "img8",
                type: 'portrait',
                src: "images/img8.png",
                likes: 4,
                dislikes: 0,
                comments: [
                    {
                        nickname: "Anon93",
                        date: new Date(),
                        comment: "lorem ipsut terra"
                    }
                ]
            }
        ]
    },
    methods: {
        uploadImage() {
            this.selectedFile = event.target.files[0];
            this.fileReader.readAsDataURL(this.selectedFile);
            this.fileReader.onload = this.imageHandler;
        },
        imageHandler(event2){
            this.addedSrc = event2.target.result;
            class Image {
                constructor (name,src) {
                    this.name = name;
                    this.src = src;
                    this.type = "portrait";
                    this.likes = 0;
                    this.dislikes = 0;
                }
            }

            let image = new Image(this.selectedFile.name,this.addedSrc);
            this.arr.push(image);
            console.log(image);
            console.log(this.arr);
        },
        showPopup(index){
            this.show = !this.show;
            this.srcPopup = this.arr[index].src;
        }
    }
});

