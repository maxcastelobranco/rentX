import { Control, FieldErrors } from "react-hook-form";

export interface BaseControllerProps {
  control: Control;
  errors: FieldErrors;
}
