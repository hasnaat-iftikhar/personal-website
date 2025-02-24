import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ErrorToastProps = {
    errors: Record<string, any>;
};

const ErrorToast: React.FC<ErrorToastProps> = ({ errors }) => {
    React.useEffect(() => {
        Object.values(errors).forEach((error) => {
            if (error?.message) {
                toast.error(error.message, {
                    closeButton: false,
                });
            }
        });
    }, [errors]);

    return <ToastContainer position="top-right" autoClose={2000} />;
};

export default ErrorToast;