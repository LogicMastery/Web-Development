class Modal{
constructor(title="Default title", text="Default text"){
    this.modal = document.querySelector(".js-modal")
    this.title = title
    this.text = text
}

open(){
    this.modal.style.display = 'initial';
}

close(){
    this.modal.style.display = 'none';
}

ChangeContent(){
    if(this.title !== undefined){

        this.modal = document.querySelector(".js-modal-title").innerText = this.title
    }

    if(this.text !== undefined){

        this.modal = document.querySelector(".js-modal-text").innerText = this.text
    }
}
}

const openBtn = document.querySelector(".js-open-modal")
const closeBtn = document.querySelector(".js-close-modal")
const modal = new Modal("New Title", "New Text in here") 

openBtn.addEventListener('click', function(event){
    modal.open()
    modal.ChangeContent()
})

closeBtn.addEventListener('click', function(event){
    modal.close ()
})