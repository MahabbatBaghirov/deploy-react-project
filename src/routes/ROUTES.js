import Grid from "../pages/Admin/Grid";
import AdminRoot from "../pages/Admin/AdminRoot";
import Employees from "../pages/User/Employees";
import Home from "../pages/User/Home";
import MainRoot from "../pages/User/MainRoot";
import AdminAddEmployee from "../pages/Admin/AddEmployee";
import NotFound from "../pages/User/NotFound";
import EmployeeDetail from "../pages/User/EmployeeDetail";
import Favorites from "../pages/User/Favorites";



export const ROUTES = [
    {
        path: "/",
        element: <MainRoot/>,
        children: [
            {
                path:"",
                element: <Home/>
            },
            {
                path:"employees",
                element: <Employees/>
            },
            {
                path:"*",
                element: <NotFound/>
            },
            {
                path:"employees/:id",
                element: <EmployeeDetail/>
            },
            {
                path:"favorites",
                element: <Favorites/>
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminRoot/>,
        children: [
            {
                path: "",
                element: <Grid/>
            },
            {
                path: "add-employee",
                element: <AdminAddEmployee/>
            },
            {
                path:"*",
                element: <NotFound/>
            }
        ]
    }
]