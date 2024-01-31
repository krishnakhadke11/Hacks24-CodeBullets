import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home/Home';
import Channels from './components/Channels/Channel'
import Engagement from './components/engagement/Engagement';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='channels' element={<Channels />} />
      <Route path='engagement' element={<Engagement/>}/>
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
