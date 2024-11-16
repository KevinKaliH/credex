import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const PaymentFormPage = lazy(() => import("./modules/Payment/page/PaymentForm.page"));
const PaymentBillPage = lazy(() => import("./modules/PaymentBill/page/PaymentBill.page"));

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
        <PaymentBillPage />
      </Suspense>
    ),
  },
]);

export default router;
