import { FC } from "react";

import Portal from "@/containers/portal/Portal";
import { SnackbarContainerProps } from "@/containers/snackbar-container/SnackbarContainer.types";

import Snackbar from "@/components/snackbar/Snackbar";

import useAnimation from "@/hooks/use-animation/useAnimation";
import useTimeout from "@/hooks/use-timeout/useTimeout";
import useSnackbarStore from "@/store/snackbar-store/snackbarStore";
import cn from "@/utils/cn/cn";

import "@/containers/snackbar-container/styles.scss";

const SnackbarContainer: FC<SnackbarContainerProps> = ({ children }) => {
  const { isOpen, severity, message, close } = useSnackbarStore();

  const { isMounted, isVisible } = useAnimation(isOpen);

  useTimeout(() => isOpen && close(), 5000, [isOpen]);

  const className = cn(
    "snackbar-animation",
    isVisible && "snackbar-animation_active"
  );

  const snackbarEl = isMounted ? (
    <Portal key="portal">
      <Snackbar className={className} severity={severity!}>
        {message}
      </Snackbar>
    </Portal>
  ) : null;

  return [children, snackbarEl];
};

export default SnackbarContainer;
