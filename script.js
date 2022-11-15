let videoTiempo=document.getElementById("tiempo")

let video=document.querySelector("video")

const duracion=()=>{
    videoTiempo.innerHTML=video.duration
}

const play=()=>{
    video.play()
    console.dir(video.duration)
    
    
}

setTimeout(duracion,1000);
const pause=()=>{
   video.pause()  
}
