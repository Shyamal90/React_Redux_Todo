const initialState = {
    todoList : [{
        id:1,
        taskName: "Buying Apple",
        status: false
    }]
}


const todoReducer = (state = initialState , action) => {
    switch(action.type)
    {
        default: return state;
    }
}


export default todoReducer;