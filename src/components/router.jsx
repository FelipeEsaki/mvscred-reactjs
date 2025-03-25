import { createBrowserRouter } from "react-router-dom";
import QuemSomos from "./quemSomos/quemSomos";
import Servicos from "./servicos/servicos";
import Home from "./Home/home";
import Simulacao from "./simulacao/simulacao";
import Contato from "./contato/contato";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/quemSomos',
        element: <QuemSomos/>
    },
    {
        path: '/servicos',
        element: <Servicos/>
    },
    {
        path: '/simulacao',
        element: <Simulacao/>
    },  
    {
        path: '/contato',
        element: <Contato/>
    }
])

export default router