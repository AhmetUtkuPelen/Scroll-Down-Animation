let text = document.querySelector('.see-me')

let textString = text.textContent

let split = textString.split('')

text.textContent = ''

for(let i = 0 ; i<split.length ; i++){

    text.innerHTML += "<span>"+split[i]+"<span>"

}

let tl = gsap.timeline()

tl.from('span',{

    y:-100,
    opacity:0,
    scrollTrigger:{
        pin:true,
        scrub:3,
        trigger:'section'
    },
    stagger:{
        amount:1
    }

})