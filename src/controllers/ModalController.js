export class ModalController {
  constructor(models, view) {
    view.onSuccess();
    view.onReject();
    view.onRejectEsc();
  }
}
