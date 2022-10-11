import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { SelectField } from "../components/SelectField";
import { TextFieldComp } from "../components/TextFieldComp";
import { useAxios } from "../hooks/useAxios";
import { useHistory } from "react-router-dom";

export const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const history = useHistory();

  if (loading) {
    <Box mt={20}>
      <CircularProgress />
    </Box>;
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Some went wrong
      </Typography>
    );
  }

  const handledSubmit = (e) => {
    e.preventDefault();
    history.push("/questions");
  };

  const difficultiesOption = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];
  return (
    <form onSubmit={handledSubmit}>
      {response && (
        <SelectField options={response.trivia_categories} label="Category" />
      )}
      <SelectField options={difficultiesOption} label="Difficulty" />
      <SelectField options={typeOptions} label="Type" />
      <TextFieldComp />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Get Started
        </Button>
      </Box>
    </form>
  );
};
