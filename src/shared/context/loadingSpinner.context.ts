import { create } from "zustand";

interface IPaymentFormState {
  visibleLoading: boolean;
  setVisibleLoading: (val: boolean) => void;
}

const initialStatePage: IPaymentFormState = {
  visibleLoading: false,
  setVisibleLoading: () => {},
};

const useLoadingSpinner = create<IPaymentFormState>((set) => ({
  ...initialStatePage,

  setVisibleLoading: (value: boolean) => set({ visibleLoading: value }),
}));
export default useLoadingSpinner;

export const setLoadingGlobal = () => useLoadingSpinner(s => s.setVisibleLoading);
