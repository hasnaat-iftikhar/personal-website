"use client";

import React, { createContext, FC, ReactNode, useContext, useReducer } from "react";
import { workFormReducer } from "./reducer";
import { WorkFormContextType, WorkFormState } from "./type";

const initialState: WorkFormState = {
    modal: {
        isActive: false
    },
    currentStep: 1,
    totalSteps: 5,
    detail: {
        clientNeed: "",
        expectedDuration: "",
        expectedBudget: "",
        fromWhereLearnAboutMe: "",
        form: {
            name: "",
            company: "",
            email: "",
            phoneNumber: "",
            message: ""
        }
    }
};

const WorkFormContext = createContext<WorkFormContextType | undefined>(undefined);

export const WorkFormProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(workFormReducer, initialState);

    const handleModalActiveState = (isActive: boolean) => {
        dispatch({
            type: "HANDLE_MODAL_ACTIVE_STATE",
            payload: {
                isActive: isActive
            }
        })
    };

    const handleNextStep = () => {
        if (state.currentStep < state.totalSteps) {
            dispatch({ type: "HANDLE_NEXT_STEP" });
        }
    };

    const handlePreviousStep = () => {
        if (state.currentStep > 1) {
            dispatch({ type: "HANDLE_PREVIOUS_STEP" });
        }
    };

    const updateFormField = (field: string, value: string) => {
        dispatch({
            type: "UPDATE_FORM_FIELD",
            payload: { field, value }
        });
    };

    const updateSelectedDetail = (field: string, value: string) => {
        dispatch({
            type: "UPDATE_SELECTED_DETAIL",
            payload: { field, value }
        });
    }

    return (
        <WorkFormContext.Provider
            value={{
                state,
                handleNextStep,
                handlePreviousStep,
                updateFormField,
                updateSelectedDetail,
                handleModalActiveState
            }}
        >
            {children}
        </WorkFormContext.Provider>
    );
};

export const useWorkForm = (): WorkFormContextType => {
    const context = useContext(WorkFormContext);
    if (!context) {
        throw new Error("useWorkForm must be used within a WorkFormProvider");
    }
    return context;
};
