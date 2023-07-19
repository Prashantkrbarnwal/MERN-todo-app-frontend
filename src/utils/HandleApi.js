import axios from 'axios';

const baseUrl = "https://mern-todo-app-backend-qs81.onrender.com"

const getAllTodo = (setTodo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data--->', data);
        setTodo(data)
    })

}


const addtodo = (text, setText, setTodo) =>{

    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllTodo(setTodo)
    })
    .catch((err) => console.log(err))


}

const updatetodo = (todoId, text, setTodo,setText, setIsUpdating) =>{

    axios
    .post(`${baseUrl}/update`, {_id: todoId, text})
    .then((data) => {
        setText("")
        setIsUpdating(false)
        getAllTodo(setTodo)
    })
    .catch((err) => console.log(err))
}

const deletetodo = (_id, setTodo) =>{

    axios
    .post(`${baseUrl}/delete`, {_id })
    .then((data) => {
        console.log(data)
        getAllTodo(setTodo)
    })
    .catch((err) => console.log(err))
}

export {getAllTodo, addtodo, updatetodo, deletetodo}