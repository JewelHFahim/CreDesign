import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
