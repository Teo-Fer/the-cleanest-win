import './App.css'
import ComingSoon from './pages/ComingSoon'

import '@fontsource-variable/jost';
import Background from './components/Background'




function App() {
  const targetDate = new Date('2025-04-28T09:00:00'); // Cambia esta fecha a la que desees  
  return (
     <div style={styles.app}>
      {/* <Background/> */}
      <ComingSoon targetDate={targetDate}/>  
       {/* <Footer /> */}
     </div>
   );
}

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
};

export default App
