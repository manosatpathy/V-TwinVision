import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import { ThemeProvider } from "./context/theme-provider";
import WeatherDashboard from "./pages/weather-dashboard";
import CityPage from "./pages/city-page";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Layout>
        <Routes>
          <Route path="/" element={<WeatherDashboard />} />
          <Route path="/city/:cityName" element={<CityPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
