import { TodoForm } from "../components/TodoForm";
import { KEYBOARD } from "../constants/keyboard";
import { MODAL_TEMPLATES } from "../constants/modalTemplates";
import { View } from "./View";

export class ModalView extends View {
  getTemplate(template, formData) {
    const templates = {
      [MODAL_TEMPLATES.todoFormTemplate]: TodoForm(formData),
    };

    return templates[template];
  }

  onSuccess() {
    this.el.addEventListener("click", (evt) => {
      if (evt.target.closest(".success-btn")) {
        const state = this.models.modalModel.getState();
        state.data.onSuccess(this.el);
      }
    });
  }

  onReject() {
    this.el.addEventListener("click", (evt) => {
      if (
        evt.target.closest(".close-modal") ||
        !evt.target.closest(".modal-content")
      ) {
        const state = this.models.modalModel.getState();
        state.data.onReject(this.el);
      }
    });
  }

  onRejectEsc() {
    window.addEventListener("keydown", (evt) => {
      if (evt.key === KEYBOARD.escape) {
        const state = this.models.modalModel.getState();
        state.data.onReject(this.el);
      }
    });
  }

  render({ modalModel }) {
    const { template, data } = modalModel;
    const templateMarkup = this.getTemplate(template, data.formData);

    if (!data.isOpen) return "";

    return `
      <div class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center bg-black/[0.5]">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
          <!-- Modal content -->
          <div class="relative bg-slate-700 rounded-lg shadow modal-content">
            <!-- Modal header -->

            <div class="flex items-center justify-between p-4 border-b border-slate-500 rounded-t">
              <h3 class="text-xl font-semibold text-white">
                ${data.title}
              </h3>
              <button class="close-modal text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                x
              </button>
            </div>

            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
              ${templateMarkup}
            </div>

            <!-- Modal footer -->
            <div class="flex items-center p-4 md:p-5 border-t border-slate-500 rounded-b">
              <button class="success-btn text-white bg-sky-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">${data.btnSuccess.caption}</button>
              <button class="close-modal py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200">${data.btnReject.caption}</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
