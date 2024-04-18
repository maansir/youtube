import Body from "./components/Body";
import Header from "./components/Header";
import {Provider} from 'react-redux'
import store from './components/utils/store.js'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Maincontainer from "./components/Maincontainer.jsx";
import Watchpage from "./components/Watchpage.jsx";

const routerApp = createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[
    {path:'/',
    element:<Maincontainer/>,
  },{
    path:'watch',
    element:<Watchpage/>,
  }
  ]
}])

const App = () => {
  return (
    <Provider store={store}>
    <>
      <Header/>
      <RouterProvider router={routerApp} />
    </>
    </Provider>
  )
}

export default App;