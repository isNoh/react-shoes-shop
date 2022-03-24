import create from "zustand";

export const CartStore = create((set) => ({
  id: "-",
  name: "멋진 신발",
  quant: 10,
  modal: true,

  btnClickplus() {
    set((state) => ({ quant: state.quant + 1 }));
  },

  btnClickminus() {
    set((state) => ({ quant: state.quant - 1 }));
  },

  btnModalFalse() {
    set(() => ({ modal: false }));
  },
}));

export const DetailStore = create(() => ({
  ownCart: [],
}));
