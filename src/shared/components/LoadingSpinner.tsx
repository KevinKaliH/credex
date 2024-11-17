import useLoadingSpinner from "@/shared/context/loadingSpinner.context";

const LoadingSpinner = () => {
  const visibleLoading = useLoadingSpinner((s) => s.visibleLoading);

  return (
    <div
      id="ajax-Loading"
      className="wrap-loading"
      style={{ display: visibleLoading ? "block" : "none" }}
    >
      <div className="loading loading-4"></div>
    </div>
  );
};

export default LoadingSpinner;
