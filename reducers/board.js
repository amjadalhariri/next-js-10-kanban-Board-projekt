import { BOARD_OPEN } from "components/constants";

export default (board = true, action) => {
  return action.type === BOARD_OPEN ? !board : board;
};
