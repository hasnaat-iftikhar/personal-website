type FormFields = {
    name: string;
    company: string;
    email: string;
    phoneNumber: string;
    message: string;
};

type WorkFormState = {
    modal: {
        isActive: boolean;
    };
    currentStep: number;
    totalSteps: number;
    detail: {
        clientNeed: string;
        expectedDuration: string;
        expectedBudget: string;
        fromWhereLearnAboutMe: string;
        form: FormFields;
    };
};

type WorkFormContextType = {
    state: WorkFormState;
    handleModalActiveState: (isActive: boolean) => void;
    handleNextStep: () => void;
    handlePreviousStep: () => void;
    updateSelectedDetail: (field: string, value: string) => void;
    updateFormField: (field: string, value: string) => void;
};

type WorkFormType =
    | { type: "HANDLE_MODAL_ACTIVE_STATE"; payload: { isActive: boolean } }
    | { type: "HANDLE_NEXT_STEP" }
    | { type: "HANDLE_PREVIOUS_STEP" }
    | { type: "UPDATE_SELECTED_DETAIL"; payload:{ field: string; value: string } }
    | { type: "UPDATE_FORM_FIELD"; payload: { field: string; value: string } };

export {
    type WorkFormState,
    type WorkFormContextType,
    type WorkFormType
};
