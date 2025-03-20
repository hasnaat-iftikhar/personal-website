import type { WorkFormState, WorkFormType } from "./type";

export const workFormReducer = (state: WorkFormState, action: WorkFormType): WorkFormState => {
    switch (action.type) {
        case "HANDLE_NEXT_STEP":
            return {
                ...state,
                currentStep: state.currentStep + 1
            };
        case "HANDLE_PREVIOUS_STEP":
            return {
                ...state,
                currentStep: state.currentStep - 1
            };
        case "UPDATE_FORM_FIELD":
            return {
                ...state,
                detail: {
                    ...state.detail,
                    contactDetails: {
                        ...state.detail.contactDetails,
                        [action.payload.field]: action.payload.value
                    }
                }
            };
        case "UPDATE_SELECTED_DETAIL": {
            const { section, field, value } = action.payload;
            return {
                ...state,
                detail: {
                    ...state.detail,
                    [section]: {
                        ...(state.detail[section as keyof typeof state.detail] as Record<string, string>),
                        [field]: value
                    }
                }
            };
        }
        case "HANDLE_MODAL_ACTIVE_STATE":
            return {
                ...state,
                modal: {
                    isActive: action.payload.isActive
                }
            };
        default:
            return state;
    }
};
