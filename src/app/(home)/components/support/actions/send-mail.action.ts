"use server";

import { sendEmail } from "@/lib/sendEmail";
import { z } from "zod";
import { NotificationTypes } from "../../../../../../enums/notification-type.enum";
import { DataFormFields } from "../interfaces/data-form-fields.interface";
import FormState from "../../../../../../interfaces/form-state.interface";

const schemaSendEmail = z.object({
  name: z.string().min(1, "Este campo es obligatorio"),
  email: z
    .string()
    .min(1, "Este campo es obligatorio")
    .email("Ingrese un correo válido"),
  message: z
    .string()
    .min(1, "Este campo es obligatorio")
    .max(500, "El mensaje no puede tener más de 500 caracteres"),
});

export async function sendEmailAction(
  prevState: FormState<DataFormFields>,
  formData: FormData
) {
  const validatedFields = schemaSendEmail.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  console.log("Message", message);

  if (!validatedFields.success)
    return {
      ...prevState,
      message: null,
      errors: validatedFields.error.flatten().fieldErrors,
      fieldsData: {
        name: name,
        email: email,
        message: message,
      },
    };

  const responseData = await sendEmail({
    sender: {
      email: email,
      name: name,
    },
    htmlContent: message,
  });

  if (responseData.error)
    return {
      ...prevState,
      errors: null,
      message: responseData.message,
      resultType: NotificationTypes.ERROR,
      fieldsData: {
        name: name,
        email: email,
        message: message,
      },
    };

  return {
    ...prevState,
    message: responseData.message,
    resultType: NotificationTypes.SUCCESS,
    fieldsData: {
      name: "",
      email: "",
      message: "",
    },
  };
}
