import { MantineProvider } from "@mantine/core";
import "./App.css";
import { Wheel } from "./components/Wheel";
import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider>
      <>
        <div>
          <h1>Wheel of (mis)Fortune !</h1>
        </div>

        <Wheel />
      </>
    </MantineProvider>
  );
}

export default App;
