import { Box, Grid, List, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface TimerProps {
  time: string;
}

export const Timer = ({ time }: TimerProps) => {
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState<number>(0);
  const [hr, setHr] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [sec, setSec] = useState<number>(0);

  useEffect(() => {
    const datePattern = /(\d{2})\/(\d{2})\/(\d{4})/;
    const matchArray = time.match(datePattern);

    if (matchArray) {
      const [, day, month, year] = matchArray;
      const formattedDate = `${year}-${month}-${day}T00:00:00.000Z`;
      const targetDate: Date = new Date(formattedDate);

      const intervalId = setInterval(() => {
        const currentDate: Date = new Date();
        const timeDifference: number =
          targetDate.getTime() - currentDate.getTime();

        if (timeDifference <= 0) {
          clearInterval(intervalId);
          setDays(0);
          setHr(0);
          setMin(0);
          setSec(0);
          setLoading(false);
        } else {
          const remainingSeconds: number = Math.floor(timeDifference / 1000);
          const remainingMinutes: number = Math.floor(remainingSeconds / 60);
          const remainingHours: number = Math.floor(remainingMinutes / 60);

          setDays(Math.floor(remainingHours / 24));
          setHr(remainingHours % 24);
          setMin(remainingMinutes % 60);
          setSec(remainingSeconds % 60);
          setLoading(false);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      console.error("Invalid date format. Please use the format DD/MM/YYYY.");
      setLoading(false);
    }
  }, [time]);

  if (loading) {
    return (
      <Grid placeItems={"center"} height={"10vh"}>
        Dữ liệu đang được chúng tôi cập nhập
      </Grid>
    );
  }

  return (
    <List
      display="flex"
      pt="10px"
      fontSize="26px"
      fontWeight="700"
      textAlign="center"
      color="red"
    >
      <Box pr="20px">
        <Text>{days}</Text>
        <Text>Ngày</Text>
      </Box>
      <Box pr="20px">
        <Text>{hr}</Text>
        <Text>Giờ</Text>
      </Box>
      <Box pr="20px">
        <Text>{min}</Text>
        <Text>Phút</Text>
      </Box>
      <Box pr="20px">
        <Text>{sec}</Text>
        <Text>Giây</Text>
      </Box>
    </List>
  );
};
