import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Home from "./pages/Home";
  import About from "./pages/About";
  import Item from "./pages/Item";
  import Navbar from "./components/Navbar";
  import ItemDetails from "./pages/ItemDetails";
  import ErrorPage from "./pages/ErrorPage";
  
  function App() {
    /**** *** NESTED ROUTES****** */
    // const routes = createRoutesFromElements(
    //   <>
    //     <Route path="/" element={<Navbar />}>
    //       <Route index element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/items" element={<Items />} />
    //       <Route path="/items/:id" element={<ItemDetails />} />
    //     </Route>
    //   </>
    // );
    // const router = createBrowserRouter(routes);
  
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Navbar />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          { path: "about", element: <About /> },
          {
            path: "item",
            children: [
              { index: true, element: <Item /> },
              { path: ":id", element: <ItemDetails /> },
            ],
          },
        ],
      },
    ]);
  
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
  
  export default App;
  