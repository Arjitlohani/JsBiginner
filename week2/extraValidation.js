const addBtn = document.querySelector("#addbtn")
const removeBtn = document.querySelector("#removebtn")
const input = document.querySelector("#form")
const removeAllbtn = document.querySelector("#removeallbtn")
// addBtn.onclick = function(){
//     const formValue = input.value.trim()
//     const modifiedValue = `${formValue} : ${new Date()}`
//     if(formValue){
//         localStorage.setItem(modifiedValue.toString(), formValue.toString())
//     }else alert('Please input a value')
// }
// removeBtn.onclick = () =>{
//     const value = localStorage.getItem("ourInput")
//     if(value){
//         localStorage.removeItem(value)
//         }else alert('There is no such values')
// }
// removeAllbtn.onclick = () =>{
//     localStorage.clear()
// }
// // for session storage replace the localstorage by sessionstorage.



addBtn.onclick = () => {
    const formValue = input.value.trim()
    const modifiedValue = `${formValue} : ${new Date()}`
    if(formValue){
        // localStorage.setItem(modifiedValue.toString(),formValue.toString())
        sessionStorage.setItem(modifiedValue.toString(), formValue.toString())
    }
    else alert('Please input a value')
}

removeBtn.onclick = () =>{
    const value = sessionStorage.getItem("ourInput")
    if(value){
        // localStorage.removeItem("ourInput")
        sessionStorage.removeItem("ourInput")
    } else {
        alert('There is no such values')
    }
}

removeAllbtn.onclick = () => {
    // localStorage.clear()
    sessionStorage.clear()
}