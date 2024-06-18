"use client";

import React from "react";
import CreateSpecialistForm from "src/app/ui/signup/create-specialist-form";

export const ModalActions = {
  SIGNUP: "SIGNUP",
  CLEAR_STATE: "CLEAR_STATE",
} as const;

export type ModalActionType = (typeof ModalActions)[keyof typeof ModalActions];

export type PayloadType = File | null;

export type ActionType = {
  type: ModalActionType;
  payload?: PayloadType;
};

export interface ReducerState {
  state: React.ReactNode | null;
}

const initialState: ReducerState = {
  state: null,
};

export interface ModalContextProps {
  toggle: () => void;
  resetData: () => void;
  state: ReducerState;
  modalRef: React.RefObject<HTMLButtonElement>;
  data: PayloadType;
  dispatch: React.Dispatch<ActionType>;
  actionate: (action: ActionType) => void;
}

export const ModalContext = React.createContext<ModalContextProps | null>(null);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = React.useState<PayloadType>(null);

  const modalRef = React.useRef<HTMLButtonElement>(null);

  const toggleShowModal = () => {
    modalRef.current?.click();
  };

  const actionate = (action: ActionType) => {
    // Clear the reducer state
    dispatch({ type: ModalActions.CLEAR_STATE });
    setData(null);
    // Set the new state and open the modal
    setTimeout(() => {
      dispatch(action);
      toggleShowModal();
    }, 50);
  };

  const reducer = (state: ReducerState, action: ActionType): ReducerState => {
    console.log("Entered");

    switch (action.type) {
      case ModalActions.SIGNUP:
        return {
          ...state,
          state: <CreateSpecialistForm />,
        };
      case ModalActions.CLEAR_STATE:
        return {
          ...state,
          state: null,
        };
      default:
        return { ...state };
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = {
    toggle: toggleShowModal,
    state,
    dispatch,
    data,
    modalRef,
    actionate,
    resetData: () => {
      dispatch({ type: ModalActions.CLEAR_STATE });
      setData(null);
    },
  };
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
