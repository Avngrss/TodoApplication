import { MODAL_TEMPLATES } from "../constants/modalTemplates";
import { STORAGE_KEYS } from "../constants/storageKeys";
import { storageService } from "../services/Storage";
import { extractFormData } from "../utils/extractFormData";

export class TodoController {
  constructor(models, view) {
    this.view = view;
    this.todoModel = models.todoModel;
    this.modalModel = models.modalModel;

    this.initTasks();
    this.openCreateTaskModal();
    this.deleteTask();
  }

  initTasks() {
    this.todoModel.initTasks(storageService.getItem(STORAGE_KEYS.tasks) ?? []);
  }

  deleteTask() {
    this.view.onDelete((id) => {
      this.todoModel.delete(id);
    });
  }

  openCreateTaskModal() {
    this.view.openCreateTaskModal(() => {
      this.modalModel.open(MODAL_TEMPLATES.todoFormTemplate, {
        isOpen: true,
        title: "Create Task",
        btnSuccess: {
          caption: "Create",
        },
        btnReject: {
          caption: "Cancel",
        },
        onSuccess: (modelEl) => {
          const formData = new FormData(
            modelEl.querySelector(".create-task-modal")
          );
          this.todoModel.create(extractFormData(formData));
          this.modalModel.close();
        },
        onReject: () => {
          this.modalModel.close();
        },
      });
    });
  }
}
