export const INITIAL_STATE = {
  filterControls: {
    sorbBy: sorbBy[0],
    filters: [],
  },
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
