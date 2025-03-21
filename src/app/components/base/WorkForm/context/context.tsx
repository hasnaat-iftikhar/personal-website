"use client";

import React, { createContext, type FC, type ReactNode, useContext, useReducer } from "react";
import { workFormReducer } from "./reducer";
import type { WorkFormContextType, WorkFormState } from "./type";

const initialState: WorkFormState = {
    modal: {
        isActive: false
    },
    currentStep: 1,
    totalSteps: 3,
    detail: {
        clientNeed: "",
        projectOverview: {
            projectTitle: "",
            briefDescription: ""
        },
        contactDetails: {
            name: "",
            company: "",
            email: "",
            phoneNumber: ""
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
        });
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

    const updateSelectedDetail = (section: string, field: string, value: string) => {
        dispatch({
            type: "UPDATE_SELECTED_DETAIL",
            payload: { section, field, value }
        });
    };

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