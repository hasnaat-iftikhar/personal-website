import { WorkFormState, WorkFormType } from "./type";

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
                    form: {
                        ...state.detail.form,
                        [action.payload.field]: action.payload.value
                    }
                }
            };
        case "UPDATE_SELECTED_DETAIL":
            return {
                ...state,
                detail: {
                    ...state.detail,
                    [action.payload.field]: action.payload.value
                }
            }
        case "HANDLE_MODAL_ACTIVE_STATE":
            return {
                ...state,
                modal: {
                    isActive: action.payload.isActive
                }
            }
        default:
            return state;
    }
};
