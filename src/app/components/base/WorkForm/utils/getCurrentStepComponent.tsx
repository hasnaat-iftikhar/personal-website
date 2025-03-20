import ClientDetailsForm from "../components/ClientDetailsForm";
import ClientNeed from "../components/ClientNeed";
import ProjectOverview from "../components/ProjectOverview";

export const getCurrentStepComponent = (currentStep: number) => {
    switch (currentStep) {
        case 1:
            return <ClientNeed />;
        case 2:
            return <ProjectOverview />;
        case 3:
            return <ClientDetailsForm />;
        default:
            return null;
    }
};