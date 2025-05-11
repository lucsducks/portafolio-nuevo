import { NotificationTypes } from "@/enums/notification-type.enum";

export default interface FormState<T> {
  errors: { [key: string]: string[] } | null;
  message: string | null;
  resultType: NotificationTypes;
  fieldsData: T;
}
