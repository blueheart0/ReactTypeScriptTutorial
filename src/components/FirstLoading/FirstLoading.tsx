import React from "react";
import { Box, useTheme } from "@mui/material";

type Props = {
  msg: string;
};

const FirstLoading: React.FC<Props> = props => {
  const { msg } = props;
  const theme = useTheme();

  console.log(theme);
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "left"
      }}
    >
      {msg}
    </Box>
  );
};
export default FirstLoading;
