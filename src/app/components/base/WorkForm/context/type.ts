type WorkFormState = {
    modal: {
        isActive: boolean;
    };
    currentStep: number;
    totalSteps: number;
    detail: {
        clientNeed: string;
        projectOverview: {
            projectTitle: string;
            briefDescription: string;
        };
        contactDetails: {
            name: string;
            company: string;
            email: string;
            phoneNumber: string;
        };
    };
};

type WorkFormContextType = {
    state: WorkFormState;
    handleModalActiveState: (isActive: boolean) => void;
    handleNextStep: () => void;
    handlePreviousStep: () => void;
    updateSelectedDetail: (section: string, field: string, value: string) => void;
    updateFormField: (field: string, value: string) => void;
};

type WorkFormType =
    | { type: "HANDLE_MODAL_ACTIVE_STATE"; payload: { isActive: boolean } }
    | { type: "HANDLE_NEXT_STEP" }
    | { type: "HANDLE_PREVIOUS_STEP" }
    | { type: "UPDATE_SELECTED_DETAIL"; payload: { section: string; field: string; value: string } }
    | { type: "UPDATE_FORM_FIELD"; payload: { field: string; value: string } };

export type {
     WorkFormState,
     WorkFormContextType,
     WorkFormType
};