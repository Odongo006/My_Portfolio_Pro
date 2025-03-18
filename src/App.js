import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Henry Odongo",
    location: "Nairobi, Kenya",
    email: "henryomondi6612@gmail.com",
    availability: "Open for work",
    brand:
      "I help ambitious business owners and startup founders break free from inefficiencies, confusion, and lost opportunities by using technology to drive growth. With the right digital solutions, you can scale your business effortlessly, attract more customers, and maximize profits—without the frustration of trial and error. If you're tired of struggling and ready to take control, let’s build something extraordinary together.",
    CTA: "You're just one smart decision away from transforming your business. Let’s create a tech-driven strategy that unlocks your full potential—Book a free consultation now!",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
