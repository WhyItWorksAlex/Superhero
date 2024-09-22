import {lazy, Suspense} from 'react'
import { GlobalStyle } from "./styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import {ClashPage, HistoryPage, BiographyPage} from '../pages'
import { APPROUTE } from "/src/const";

const Page404 = lazy(() => import("../pages/Page404"));

const router = createBrowserRouter([
  {
    path: APPROUTE.MAIN.to,
    element: <PageWrapper />,
    children: [
      {
        index: true,
        element: <ClashPage />,
      },
      {
        path: APPROUTE.HISTORY.to,
        element: <HistoryPage />,
      },
      {
        path: APPROUTE.INFO.to,
        element: <BiographyPage />,
      },
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
]);

function App () {

  return (
    <>
      <GlobalStyle />
      <Toaster position="bottom-right" />
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default App;
