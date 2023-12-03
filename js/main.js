var elLeftModal = document.querySelector('.left__modal')
var eltModalShodow = document.querySelector('.modal__shodow')

function openModal() {
    elLeftModal.classList.add('open__Modal')
    eltModalShodow.style.display = 'block'
}
function closeModal() {
    elLeftModal.classList.remove('open__Modal')
    eltModalShodow.style.display = 'none'

}