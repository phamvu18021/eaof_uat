import { Box } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const ScrollView = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5 // Kích hoạt khi 50% của phần tử hiển thị trong viewport
  });

  useEffect(() => {
    // Kiểm tra xem trongView và isVisible đều là true
    if (inView && !isVisible) {
      setIsVisible(true); // Nếu không thì hiển thị
    }
  }, [inView, isVisible]);
  return <Box ref={ref}>{isVisible && <>{children}</>}</Box>;
};

export const ScrollViews = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5 // Kích hoạt khi 50% của phần tử hiển thị trong viewport
  });

  useEffect(() => {
    // Kiểm tra xem inView và isVisible đều là true
    if (inView2 && !isVisible) {
      setIsVisible(true); // Nếu không thì hiển thị
    }
  }, [inView2, isVisible]);

  return <Box ref={ref2}>{isVisible && <>{children}</>}</Box>;
};
