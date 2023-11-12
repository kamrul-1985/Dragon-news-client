import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Component/Main/Main";
// import Home from "../Component/Home/Home";
import Category from "../Component/Home/Category/Category";
import NewsLayOut from "../Component/Main/NewsLayout";
import News from "../Component/Home/News/News";
import LogInLayOut from "../LayOuts/LOgInLayout";
import LogIn from "../Component/LogIn/LogIn";
import Register from "../Component/LogIn/Register";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
      {
            path:"/",
            element: <LogInLayOut></LogInLayOut>,
            children:[
                  {
                        path:"/",
                        element: <Navigate to="/category/0"></Navigate>
                  },
                  {
                        path:"/login",
                        element:<LogIn></LogIn>
                  },
                  {
                        path:"/register",
                        element:<Register></Register>
                  },
            ]
      },
      {
            path:"category",
            element:<Main></Main>,
            children: [

                  {
                        path:":id",
                        element: <Category></Category>,
                        loader: ({params})=> fetch(`http://localhost:7000/categories/${params.id}`)
                  },
                 
            ]
      },

      {
            path:"/news",
            element: <NewsLayOut> </NewsLayOut>,
            children:[
                  {
                        path:":id",
                        element: <PrivetRoute><News></News></PrivetRoute>,
                        loader: ({params}) => fetch(`http://localhost:7000/news/${params.id}`)                       
                  }
            ]
      },
])
export default router;