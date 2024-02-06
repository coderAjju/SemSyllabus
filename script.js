Draggable.create("#downloadBtn", {
    type: "x,y",
    bounded:'.main'
    // bounds: document.getElementById("container"),
})

document.querySelector("#downloadBtn").addEventListener("click",()=>{
    document.querySelector(".bn13").setAttribute('download',"4BCA1 syllabus")
})