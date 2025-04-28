import './App.css'
import ComingSoon from './pages/ComingSoon'
import '@fontsource-variable/jost';

function App() {
  return (
     <div style={styles.app}>
      <ComingSoon/>
     </div>
   ); 
}

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
  },
};

export default App
