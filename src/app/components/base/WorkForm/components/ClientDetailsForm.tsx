// Components
import Button from "@/app/components/ui/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Hooks
import { useForm, UseFormRegister, FieldErrors } from "react-hook-form";
import { useWorkForm } from "../context/context";
import { useEffect } from "react";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const InputField = ({
  label,
  type = "text",
  register,
  name,
  validation,
  errors,
}: {
  label: string;
  type?: string;
  register: UseFormRegister<FormData>;
  name: keyof FormData;
  validation?: object;
  errors: FieldErrors<FormData>;
}) => {
  return (
    <div className="w-full">
      <input
        {...register(name, validation)}
        placeholder={label}
        type={type}
        className="w-full bg-[#EEEEEE] rounded-[8px] px-[16px] h-[48px] text-[16px] text-[#171717] focus:outline-none border"
        autoComplete="off"
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>
      )}
    </div>
  );
};

const ClientDetailsForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const { state: workFormState, updateFormField } = useWorkForm();

  useEffect(() => {
    // Sync context state with form values
    Object.entries(workFormState.detail.form).forEach(([key, value]) => {
      setValue(key as keyof FormData, value);
    });
  }, [workFormState, setValue]);

  const onSubmit = (data: FormData) => {
    Object.entries(data).forEach(([key, value]) => {
      updateFormField(key, value);
    });

    toast.success("Form submitted successfully!");
    console.log("Submitted data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 md:gap-4">
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
        <InputField
          label="Name"
          name="name"
          register={register}
          validation={{ required: "Name is required" }}
          errors={errors}
        />
        <InputField
          label="Company Name"
          name="company"
          register={register}
          validation={{ required: "Please enter company info" }}
          errors={errors}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
        <InputField
          label="Email"
          name="email"
          register={register}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email format",
            },
          }}
          errors={errors}
        />
        <InputField
          label="Phone Number"
          name="phone"
          register={register}
          validation={{
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10,15}$/,
              message: "Invalid phone number",
            },
          }}
          errors={errors}
        />
      </div>

      <div className="w-full">
        <textarea
          {...register("message", { required: "Message is required" })}
          placeholder="Message"
          className="w-full bg-[#EEEEEE] rounded-[8px] p-[16px] text-[16px] text-[#171717] focus:outline-none border"
          autoComplete="off"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" className="w-fit mx-auto text-[20px] px-[42px]">
        Submit
      </Button>
    </form>
  );
};

export default ClientDetailsForm;
