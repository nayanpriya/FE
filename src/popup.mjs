import "./styles.css";

export function popup(){
 document.getElementById("modal").classList.add('visible');
 let element = document.querySelector(".modal-overlay")
 if(element){
  element.classList.add('visible');
 }
 document.getElementById("close-popup").addEventListener('click',closeModal)

 

}
export function closeModal(){
  document.getElementById("modal").classList.remove('visible');
  //document.getElementById("modal").classList.add('hidden');
  let element = document.querySelector(".modal-overlay")
  if(element){
    element.classList.remove('visible');
  }
}
