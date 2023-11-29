import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./scenes/global/Navigation";
import Sidebar from "./scenes/global/Sidebar";
import Musicboard from "./scenes/musicboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Navigation setIsSidebar={setIsSidebar} />
        <CssBaseline />
        <div className="app mt-20 ">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Routes>
              <Route path="/*" element={<Musicboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
