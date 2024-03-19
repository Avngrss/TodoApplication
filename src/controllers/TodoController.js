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
    this.openEditTaskModal();
    this.onChahgeCheckox();
  }

  initTasks() {
    this.todoModel.initTasks(storageService.getItem(STORAGE_KEYS.tasks) ?? []);
  }

  deleteTask() {
    this.view.onDelete((id) => {
      this.todoModel.delete(id);
    });
  }

  openEditTaskModal() {
    this.view.onEditTask((id) => {
      const state = this.todoModel.getState();
      const currentTask = state.data.find((item) => item.id === item.id);
      this.modalModel.open(MODAL_TEMPLATES.todoFormTemplate, {
        isOpen: true,
        title: "Edit Task",
        btnSuccess: {
          caption: "Edit",
        },
        btnReject: {
          caption: "Cancel",
        },

        formData: currentTask,
        onSuccess: (modelEl) => {
          const formData = new FormData(
            modelEl.querySelector(".create-task-modal")
          );
          this.todoModel.update(id, extractFormData(formData)),
            this.modalModel.close();
        },
        onReject: () => {
          this.modalModel.close();
        },
      });
    });
  }

  onChahgeCheckox() {
    this.view.onChahgeCheckox((id, isCompleted) => {
      this.todoModel.update(id, {
        isCompleted,
      });
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
