export const INITIAL_STATE = {
  tasks: {
    data: [],
  },
  modal: {
    template: null,
    data: {
      isOpen: false,
      title: "",
      btnSuccess: {
        caption: "Success",
      },
      btnReject: {
        caption: "Reject",
      },
      onSuccess: () => null,
      onReject: () => null,
    },
  },
};
