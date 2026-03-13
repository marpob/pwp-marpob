import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router'
import RootLayout from "./layouts/root-layout.tsx";
import  Home from "./routes/home/home.tsx";
import {Navigation} from "./components/navigation.tsx";
import Tennis from "./routes/tennis/tennis.tsx";
import WebDevelopment from "./routes/webdevelop/web-development.tsx";
import { LanguageProvider } from "./context/LanguageContext.tsx";
// import App from "./context/LanguageContext.tsx";
// import About from "./routes/about/about.tsx";
// import {FooterBlack} from "./components/footer.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <LanguageProvider>
        <BrowserRouter>
            <Navigation/>
          <Routes>
            <Route element={<RootLayout />} >
              <Route  index element={<Home />}/>
                {/*<Route path={'/:lan'} element={<Home/>}/>*/}
              <Route path={'/tennis/'} element={<Tennis/>}/>
              <Route path={'/web-development'} element={<WebDevelopment/>}/>
                {/*<Route path={'/LanguageContext'} element={<LanguageProvider/>}/>*/}
            </Route>
          </Routes>
            {/*<FooterBlack/>*/}
        </BrowserRouter>
      </LanguageProvider>
  </StrictMode>,
)
