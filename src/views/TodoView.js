import { View } from "./View";

export class TodoView extends View {
  openCreateTaskModal(callback) {
    this.el.addEventListener("click", (evt) => {
      if (evt.target.closest(".open-create-task-modal")) {
        callback();
      }
    });
  }

  onDelete(callback) {
    this.el.addEventListener("click", (evt) => {
      if (evt.target.closest(".delete-btn")) {
        callback(evt.target.dataset.id);
      }
    });
  }

  onEditTask(callback) {
    this.el.addEventListener("click", (evt) => {
      if (evt.target.closest(".edit-btn")) {
        callback(evt.target.dataset.id);
      }
    });
  }

  onChahgeCheckox(callback) {
    this.el.addEventListener("change", (evt) => {
      if (evt.target.matches(".check")) {
        callback(evt.target.dataset.id, evt.target.checked);
      }
    });
  }

  renderTasks(tasks) {
    return tasks
      .map((item) => {
        const isChecked = item.isCompleted ? "checked" : "";
        const isExpired = new Date() > new Date(item.planToFinish);
        const background = isExpired ? "bg-red-400/30" : "bg-slate-500";

        return `
          <div class="rounded ${background} p-2 border border-slate-500">
            <div class="flex justify-between items-center">

              <div class="flex gap-2">
                <input type="checkbox" class="check" data-id="${
                  item.id
                }" ${isChecked} />
                <h3 class="${
                  item.isCompleted ? "line-through" : ""
                } "text-lg text-white line-clamp-2">${item.title}</h3>
              </div>

              <div class="flex gap-2">
                <button data-id="${
                  item.id
                }" class="bg-sky-500 px-2 rounded edit-btn text-white">Edit</button>
                <button data-id="${
                  item.id
                }" class="delete-btn bg-red-500 px-2 text-white rounded">Delete</button>
              </div>

            </div>
            
            <p class="text-sm text-white line-clamp-2">${item.description}</p>
          </div>
        `;
      })
      .join(" ");
  }

  render({ todoModel }) {
    const { data } = todoModel;
    return `
      <div class="mt-16">
          <div class="flex justify-between items-center">
              <p class="text-sky-500">Total Tasks ${data.length}</p>
              <button class="bg-sky-500 p-2 text-white rounded open-create-task-modal">Create Task</button>
          </div>

          <div class="mt-5 flex flex-col gap-6">
            ${this.renderTasks(data)}
          </div>

      </div>
    `;
  }
}
