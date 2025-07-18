import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/authSlice'; 
import profileReducer from '../slices/ProfileSlice'
import  cartReducer from "../slices/cartSlice"
import courseReducer from '../slices/courseSlice'
import viewCourseReducer from '../slices/viewCourseSlice'
const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    profile: profileReducer,
    course: courseReducer,
    viewCourse:viewCourseReducer,
  },
})

export default store;



