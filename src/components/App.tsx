import TopSection from "./sections/TopSection";
import MainLayout from "./main-layout";
import About from "./sections/AboutSection";
import Competition from "./sections/Competition";
import CFooter from './sections/Footer'
import './css/home.css'

function App() {
  return (
    <div>
      <MainLayout>
        <TopSection />
        <About />
        <Competition/>
        <CFooter/>
      </MainLayout>
    </div>
  );
}

export default App;
