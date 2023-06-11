import TopSection from "./sections/TopSection";
import MainLayout from "./main-layout";
import About from "./sections/AboutSection";

function App() {
  return (
    <>
      <MainLayout>
        <TopSection />
        <About />
      </MainLayout>
    </>
  );
}

export default App;
