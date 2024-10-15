import ACTIONS from "../constants/actions";


function OperationButton({ operation, dispatch, className = "" }) {
  return (
    <button
      className={className}
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}

export default OperationButton;
