import AppRoutes from "./routes/AppRoutes";

const App = () => {
  console.log('test',import.meta.env.VITE_API_URL)
  return <AppRoutes />;
};

export default App;
