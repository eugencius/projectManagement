import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function CreationPage({
  handleChangePage,
  handleProjectCreation,
}) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const modal = useRef();

  function saveProject() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    const newProject = {
      title,
      description,
      dueDate,
      tasks: [],
    };

    handleProjectCreation(newProject);
  }

  return (
    <>
      <Modal ref={modal} btnCaption="Okay">
        <h2 className="mb-4 text-xl font-bold text-stone-700">Invalid input</h2>
        <p className="mb-4 text-stone-600">
          Ops... Looks like you forgot to enter a value.
        </p>
        <p className="mb-4 text-stone-600">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="mx-10 flex w-3/6 flex-col justify-center">
        <menu className="flex justify-end gap-3">
          <button
            className="cursor-pointer rounded-lg px-6 py-2 text-xl duration-300 ease-out hover:bg-stone-200"
            onClick={() => {
              handleChangePage("home");
            }}
          >
            Cancel
          </button>

          <button
            className="cursor-pointer rounded-lg bg-stone-800 px-8 py-2 text-xl text-stone-50 duration-300 ease-out hover:bg-stone-900"
            onClick={saveProject}
          >
            Save
          </button>
        </menu>
        <form>
          <Input label="Title" type="text" ref={titleRef} />
          <Input label="Description" ref={descriptionRef} textarea />
          <Input label="Due Date" type="date" ref={dueDateRef} />
        </form>
      </div>
    </>
  );
}
