
let boxes1 = document.querySelector(".container").children

const GetRandomColor = ()=>{
    let r = Math.ceil(0 + Math.random()*255)
    let g = Math.ceil(0 + Math.random()*255)
    let b = Math.ceil(0 + Math.random()*255)
    return `rgb(${r},${g},${b})`
}

Array.from(boxes1).forEach(e=>{
    e.style.backgroundColor = GetRandomColor()
    e.style.backgroundColor = GetRandomColor()
})