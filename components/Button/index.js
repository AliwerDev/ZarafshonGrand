import { Button } from "@mui/material";

export default function MainButton({ children, second, ...props }) {
  return (
    <Button
      sx={{
        py: 2,
        px: 10,
        color: "#fff",
        fontSize: "0.9em",
        transition: "0.3s",
        borderRadius: 10,
        boxShadow: "4px 4px 50px rgb(208 170 59 / 40%)",
        background: !second
          ? "linear-gradient(320.24deg, #815a23 10.8%, #ac8035 24.75%, #d9af56 38.2%, #e1c96a 52.66%, #d9af56 66.61%, #ac8035 80.06%, #a17631 92.93%, #eadd81 106.48%, #815a23 106.48%)"
          : "#AA8876",
        "&:hover": { background: "#fff", color: "#000" },
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

