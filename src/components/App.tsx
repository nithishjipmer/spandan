import TopSection from "./sections/TopSection";
import MainLayout from "./main-layout";
import About from "./sections/AboutSection";

function App() {
  return (
    <>
      <MainLayout>
        <TopSection />
        <About />
        <Competition />
      </MainLayout>
    </>
  );
}

export default App;
