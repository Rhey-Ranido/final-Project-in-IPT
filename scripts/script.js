
const wrapper = document.querySelector('.wrapper')

// for(i = 1; i <= 46; i++){
//     let student = document.createElement('div')
//     student.className = 'student'
//     student.textContent = `student ${i}`
//     wrapper.appendChild(student)
// }

students.forEach(student => {
    let fullname = `${student.firstname} ${student.lastname}`

    let div = document.createElement('div')

    div.className = 'student'
    div.textContent = fullname
    wrapper.appendChild(div)
    console.log(fullname)
})