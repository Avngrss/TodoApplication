import { INITIAL_STATE } from "../constants/initialState";
import { Model } from "./Model";

export class ModalModel extends Model {
  open(template, data) {
    this.setState({ template, data });
  }

  close() {
    this.setState(INITIAL_STATE.modal);
  }
}
