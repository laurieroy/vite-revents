import ModalWrapper from "@/app/common/modals/ModalWrapper";
import { Button, Form } from "semantic-ui-react";
import { useForm, FieldValues } from "react-hook-form";
import { useAppDispatch } from "@/app/store/store";
import { closeModal } from "@/app/common/modals/modalSlice";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting, isValid },
  } = useForm({ mode: "onTouched" });
  const dispatch = useAppDispatch();

  function onSubmit(data: FieldValues) {
    console.log(data);
    dispatch(closeModal());
  }

  return (
    <ModalWrapper header={"Sign into Re-vents"}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Input
          defaultValue=""
          placeholder="jane@email.com"
          {...register("email", {
            required: true,
            pattern:
              /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
          })}
          error={
            (errors.email?.type === "required" && "Email is required") ||
            (errors.email?.type === "pattern" && "Email is invalid")
          }
        />
        <Form.Input
          type="password"
          defaultValue=""
          placeholder="password"
          {...register("password", { required: true })}
          error={errors.password && "Password is required"}
        />
      </Form>
      <Button
        type="submit"
        fluid
        size="large"
        color="teal"
        content="Login"
        loading={isSubmitting}
        disabled={!isValid || !isDirty || isSubmitting}
      />
    </ModalWrapper>
  );
}
