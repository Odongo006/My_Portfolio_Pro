import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Henry Omondi",
    location: "Nairobi, Kenya",
    email: "henryomondi66612@gmail.com",
    availability: "Open for work",
    brand:
      "Henry Omondi is not only skilled in various technologies but has also received positive feedback for effective communication and collaboration in remote environments, making him a dedicated and adaptable software developer committed to continuous growth.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
