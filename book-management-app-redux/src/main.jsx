import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
// import BookList from "./components/BookList.jsx";
// import BookDetails from "./components/BookDetails.jsx";
import Home from "./components/Home.jsx";
import BookInfo from "./components/BookInfo.jsx";
import AddBook from "./components/AddBook.jsx";
import BookAllCategory from "./components/BookAllCategory.jsx";
import bookStore from "./utils/bookStore.js";
import {Provider} from 'react-redux'
// import Search from "./components/Search.jsx";

// createing Browser router

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

       {
        path:"/",
        element: <Home />
      },

      // {

      //   path: "/",
      //   element: <BookList />,
      // },
      

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
       {
        path: "/book-details/:id",
        element: <BookInfo />,
      },
    
     
      { path: "/addBook", 
        element: <AddBook />
       }, // <-- Add this line

        { path: "/book-category",
           element: <BookAllCategory /> }, // <-- Add this line
      // ...other routes...
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}

  <StrictMode>
    <Provider store={bookStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
    {/* <RouterProvider router={appRouter} /> */}
  </StrictMode>
);
