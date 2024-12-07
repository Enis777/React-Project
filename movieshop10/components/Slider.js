export default function Slider(setting){
    let slides = setting.slides;
    let active_slide = setting.active_slide;
    let container = setting.container;
    let delay = setting.delay;

    container.innerHTML =`<img src="${slides[active_slide]}" alt="Slide"/>`

setInterval(()=>{
    if(active_slide > (slides.length-1))active_slide = 0;
    container.innerHTML = `<img src="${slides[active_slide]}"alt ="Slide"/>`
    active_slide++;
} ,delay*1000)


}