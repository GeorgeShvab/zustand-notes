import { FC, useRef } from "react";

import { TextareaProps } from "@/components/textarea/Textarea.types";

import cn from "@/utils/cn/cn";

import "@/components/textarea/styles.scss";

const Textarea: FC<TextareaProps> = ({ className, isError, ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const hasScrollbar =
    textareaRef.current &&
    textareaRef.current.scrollHeight > textareaRef.current.clientHeight;

  return (
    <div
      className={cn(
        "textarea",
        isError && "textarea_error",
        hasScrollbar && "textarea_scrollable",
        className
      )}
    >
      <textarea
        name="content"
        className="textarea__element pretty-scrollbar"
        placeholder="Content"
        ref={textareaRef}
        {...props}
      />
    </div>
  );
};

export default Textarea;
