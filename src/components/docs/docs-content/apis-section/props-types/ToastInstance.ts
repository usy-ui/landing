import { FunctionComponent, ReactNode } from "react";
import { CSSProperties } from "styled-components";

type ToastType = "success" | "info" | "warning" | "error" | "basic";
type PushToastParams = {
  type: ToastType;
  statusIcon?: FunctionComponent<{ className: string; color?: string }>;
  title?: string | ReactNode;
  content: string | ReactNode;
  timeout?: number;
  styles?: CSSProperties;
  onClose?: () => void;
};
type ToastParams = Omit<PushToastParams, "type">;

interface ToastInstance {
  basic: (params: ToastParams) => void;
  success: (params: ToastParams) => void;
  info: (params: ToastParams) => void;
  warning: (params: ToastParams) => void;
  error: (params: ToastParams) => void;
}
