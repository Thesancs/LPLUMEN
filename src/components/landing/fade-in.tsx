"use client";

import { cn } from "@/lib/utils";
import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  noVertical?: boolean;
}

export function FadeIn({
  children,
  className,
  as: Component = "div",
  noVertical = false,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Component
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-in-out",
        isVisible ? "opacity-100" : "opacity-0",
        !noVertical && (isVisible ? "translate-y-0" : "translate-y-8"),
        className
      )}
    >
      {children}
    </Component>
  );
}
