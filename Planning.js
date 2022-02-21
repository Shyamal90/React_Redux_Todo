/*

Redux - Action Reducer Store Root Reducer Action-Type

Pages -



Store
-----
createStore applyMiddleware
logger
reduxThunk
rootReducer
*/


/* ==================================================
=====================================================
                Redux Thunks
=====================================================
=====================================================


1. What is a "thunk"?
-> The word "thunk" in a programming term that means "a piece of code that does some delayed word". Rather than execute some logic now, we can  write a function body or code that can be used to perform the word later.


*** Thunk is a pattern of writing function with logic inside that can interact with redux store's dispatch and getState method.


********
******** Redux Thunk related to store for async logic



********
********  Thunk function is a function that accepts two arguments. 
          1. Redux store Dispatch method
          2. Redux store getState method



THunk functions are not called by application code. Instead they are passed to store.dispatch()

*/

