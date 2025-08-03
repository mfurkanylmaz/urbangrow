"use client";

import * as React from "react";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { cn } from "@/lib/utils";

interface AspectRatioProps
  extends React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root> {
  /**
   * İstenilen en-boy oranı. Örn: 16/9, 4/3
   */
  ratio?: number;
  className?: string;
  children: React.ReactNode;
}

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  AspectRatioProps
>(({ ratio = 16 / 9, className, children, ...props }, ref) => {
  return (
    <AspectRatioPrimitive.Root
      ref={ref}
      ratio={ratio}
      className={cn("relative overflow-hidden rounded-lg", className)}
      {...props}
    >
      {children}
    </AspectRatioPrimitive.Root>
  );
});
AspectRatio.displayName = "AspectRatio";

export { AspectRatio };
