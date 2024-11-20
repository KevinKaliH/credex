import { create } from "zustand";

interface IModalAdviseState {
  visible: boolean;
  message: string;
  title?: string;

  setVisible: (
    val: boolean,
    props: { message: string; title?: string }
  ) => void;
}

const initialStatePage: IModalAdviseState = {
  visible: false,
  message: "",
  setVisible: () => {},
};

const useModalAdvise = create<IModalAdviseState>((set) => ({
  ...initialStatePage,

  setVisible: (show, props) =>
    set({ visible: show, message: props.message, title: props.title }),
}));
export default useModalAdvise;

export const setVisibleModalGlobal = () => useModalAdvise((s) => s.setVisible);
