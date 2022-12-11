import { Hero } from "../components/hero.component";
import { Navigation } from "../components/navigation.component";
import "./main.page.sass";

export const MainPage = () => {
  return (
    <div className="main-page">
      <Navigation />
      <Hero />
    </div>
  );
};
