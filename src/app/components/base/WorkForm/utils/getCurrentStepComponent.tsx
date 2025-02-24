import ClientBudget from "../components/ClientBudget";
import ClientDetailsForm from "../components/ClientDetailsForm";
import ClientHearAboutMe from "../components/ClientHearAboutMe";
import ClientNeed from "../components/ClientNeed";
import ClientSelectedDuration from "../components/ClientSelectedDuration";

export const getCurrentStepComponent = (currentStep: number) => {
    switch(currentStep) {
        case 1:
            return <ClientNeed />
        case 2:
            return <ClientSelectedDuration />
        case 3:
            return <ClientBudget />
        case 4:
            return <ClientHearAboutMe />
        case 5:
            return <ClientDetailsForm />
        default:
            return null;
    }
};