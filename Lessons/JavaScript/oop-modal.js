class Modal{
constructor(){
    this.modal = document.querySelector(".js-modal")
}

open(){
    this.modal.style.display = 'initial';
}

close(){
    this.modal.style.display = 'none';
}

ChangeContent(title, text) {
    // Assuming you have a modal object defined elsewhere
    if (this.modal !== undefined) {
        if (title !== undefined) {
            document.querySelector(".js-modal-title").innerText = title;
            this.modal.title = title;
        }

        if (text !== undefined) {
            document.querySelector(".js-modal-text").innerText = text;
            this.modal.text = text;
        }
    } else {
        console.error("Modal object is undefined.");
    }
}
}


const openBtn = document.querySelector(".js-open-modal")
const closeBtn = document.querySelector(".js-close-modal")
const modal = new Modal("Title", "text in here") 

openBtn.addEventListener('click', function(event){
    modal.open()
    modal.ChangeContent("Title here", "My new text is here")
})

closeBtn.addEventListener('click', function(event){
    modal.close ()
})