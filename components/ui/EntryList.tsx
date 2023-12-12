import { IconButton, List, ListItem, ListItemText, Paper } from "@mui/material";

export const EntryList = () => {
  return (
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 250px)",
          overflow: "scroll",
          backgroundColor: "transparent",
        }}
      >
        <List>
          <ListItem
            disableGutters
            secondaryAction={
              <IconButton aria-label="comment">
              </IconButton>
            }
          >
            <ListItemText primary={`Line item ${1}`} />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
};
