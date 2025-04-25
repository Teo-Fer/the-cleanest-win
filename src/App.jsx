import './App.css'
import ComingSoon from './pages/ComingSoon'
import '@fontsource-variable/jost';
import ParticlesBg from 'particles-bg'


function App() {
  const targetDate = new Date('2025-04-28T09:00:00'); // Cambia esta fecha a la que desees
  return (
     <div style={styles.app}>
      <ComingSoon targetDate={targetDate}/>
      <ParticlesBg color="#0070be" num={100} type="cobweb" bg={true} />
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
