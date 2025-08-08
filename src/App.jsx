import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Path from "./routes/Path";
import { Toaster } from "react-hot-toast";
import NavBar from "./components/ui/NavBar";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" reverseOrder={false} />
      <NavBar />
      <Path />
    </QueryClientProvider>
  );
};

export default App;
