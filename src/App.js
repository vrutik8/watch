import './App.css';
import Head from './Components/Head';
import Body from './Components/Body';

const App = () => {
  return (
    <div>
      <h1 className='bg-green-500 text-blue-600'>Vrutik IS SMART</h1>
      <Head/>
      <Body/>
      {/* *
      *Header
      *Body
      *   Sidebar
      *       MenuItems
      *   MainContainer
      *       ButtonList
      *       VideoContainer
      *           VideoCard
      *  */}
    </div>
  )
}

export default App