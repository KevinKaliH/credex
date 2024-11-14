import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const PaymentFormPage = lazy(() => import("./modules/Payment/views/PaymentFormPage"));
const PaymentBill = lazy(() => import("./modules/Payment/views/PaymentBill"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<>Loading...</>}>
        <PaymentFormPage />
      </Suspense>
    ),
  },
  {
    path: "/bill",
    element: (
      <Suspense fallback={<>loading...</>}>
        <PaymentBill />
      </Suspense>
    ),
  },
]);

export default router;
