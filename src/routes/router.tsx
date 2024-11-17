import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Unauthorized from "@/shared/pages/Unauthorized";
import LoadingPageRoute from "@/shared/components/LoadingPageRoute";
import { EnumAppRoutes } from "@/shared/utils/urlPaths.utl";
import RootPage from "@/modules/Root/Root.page";

const PaymentFormPage = lazy(
  () => import("@/modules/Payment/page/PaymentForm.page")
);
const PaymentBillPage = lazy(
  () => import("@/modules/PaymentBill/page/PaymentBill.page")
);

const router = createBrowserRouter([
  {
    path: EnumAppRoutes.base,
    element: <RootPage />,
  },
  {
    path: EnumAppRoutes.search,
    element: (
      <LoadingPageRoute>
        <PaymentFormPage />
      </LoadingPageRoute>
    ),
  },
  {
    path: EnumAppRoutes.bill,
    element: (
      <LoadingPageRoute>
        <PaymentBillPage />
      </LoadingPageRoute>
    ),
  },
  {
    path: EnumAppRoutes.unauthorized,
    element: <Unauthorized />,
  },
  {
    path: "*",
    element: <Navigate to="unauthorized" replace />,
  },
]);

export default router;