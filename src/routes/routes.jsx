import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Events from "../pages/Events";
import Feed from "../pages/Feed";
import UserName from "../pages/UserName";










const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: '/events', element: <Events /> },
            { path: '/feed', element: <Feed /> },
            { path: '/user', element: <UserName /> },
        ]
    },
])

export default routes
