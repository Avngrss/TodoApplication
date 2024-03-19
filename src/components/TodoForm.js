export const TodoForm = (data) => {
  return `
    <form class="create-task-modal flex flex-col gap-3">
      <label class="w-full">
        <p class="text-sm text-white">Title</p>
        <input 
          value="${data?.title ?? ""}"
          type="text" 
          placeholder="Title" 
          name="title" 
          class="p-2 w-full" 
        />
      </label>

      <label class="w-full">
        <p class="text-sm text-white">Plan To Finish</p>
        <input 
          value="${data?.planToFinish ?? ""}"
          type="date" 
          name="planToFinish" 
          class="p-2 w-full" 
        />
      </label>

      <label class="w-full">
        <p class="text-sm text-white">Comment</p>
        <textarea 
          placeholder="Description" 
          name="description" 
          class="p-2 w-full"
        >${data?.description ?? ""}</textarea>
      </label>

    </form>
  `;
};
