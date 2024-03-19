import { INITIAL_STATE } from "./src/constants/initialState";
import { ModalController } from "./src/controllers/ModalController";
import { TodoController } from "./src/controllers/TodoController";
import { ModalModel } from "./src/models/ModalModel";
import { TodoModel } from "./src/models/TodoModel";
import { ModalView } from "./src/views/ModalView";
import { TodoView } from "./src/views/TodoView";
import "./style.css";

const root = document.querySelector("#root");

// ContainerElements
const todoContainer = document.createElement("div");
const modalContainer = document.createElement("div");
// ContainerElements

root.append(todoContainer, modalContainer);

// ----------------------------

// Models
const todoModel = new TodoModel(INITIAL_STATE.tasks);
const modalModel = new ModalModel(INITIAL_STATE.modal);
// Models

// ----------------------------

// Views
const todoView = new TodoView(todoContainer, { todoModel });
const modalView = new ModalView(modalContainer, { modalModel });
// Views

// ----------------------------

// Controllers
new TodoController({ todoModel, modalModel }, todoView);
new ModalController({ modalModel }, modalView);
// Controllers
