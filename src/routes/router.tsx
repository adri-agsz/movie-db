import {Home, Popular, Show, TopRated, Favorites } from '../pages';
import {RouteObject, createBrowserRouter} from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { ROUTES } from './constants';
import { NowPlaying } from '../pages/NowPlaying';


const routes: RouteObject[] = [
    {
        path: '/', element: <PrivateRouter />,
        children: [
            { path: ROUTES.HOME, element: <Home/>},
            { path: ROUTES.POPULAR, element: <Popular />},
            {path: ROUTES.TOP_RATED, element: <TopRated />},
            {path: ROUTES.NOW_PLAYING, element: <NowPlaying/>},
            {path: `${ROUTES.SHOW}:id`, element: <Show />},
            {path: ROUTES.MY_FAVORITES, element: <Favorites />}
        ]
    } ,   {
        path: '/admin', element: <PublicRouter />,
        children: [
            {path: 'admin', element: <Home/>}
        ]
    }

]

export const router = createBrowserRouter(routes);