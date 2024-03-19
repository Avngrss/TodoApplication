export const TodoForm = () => {
  return `
    <form class="create-task-modal flex flex-col gap-3">
      <label class="w-full">
        <p class="text-sm text-white">Title</p>
        <input 
          type="text" 
          placeholder="Title" 
          name="title" 
          class="p-2 w-full" 
        />
      </label>

      <label class="w-full">
        <p class="text-sm text-white">Plan To Finish</p>
        <input 
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
        ></textarea>
      </label>

    </form>
  `;
};
