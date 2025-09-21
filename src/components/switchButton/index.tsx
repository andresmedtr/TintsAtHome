"use client";

import { FormControlLabel, styled, Switch, SwitchProps } from "@mui/material";
import DriveEtaOutlinedIcon from "@mui/icons-material/DriveEtaOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useSwitch } from "@/hooks/useToggle";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 50,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(25px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#E52323",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 20,
    height: 20,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#040404",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));

export const SwitchButton = () => {
  const { isActive, toggle } = useSwitch();

  return (
    <div className="w-fit h-full flex flex-row items-center">
      <p
        className={`w-fit h-full transition-all duration-800 ease-in-out   ${
          isActive
            ? "text-gray-200 font-light text-sm"
            : "text-[#E52323] font-semibold 2xl:text-2xl text-lg"
        }`}>
        Window Tints
      </p>
      <FormControlLabel
        control={
          <IOSSwitch sx={{ m: 1 }} checked={isActive} onChange={toggle} />
        }
        label=""
        sx={{ margin: 0 }}
      />
      <p
        className={`w-fit h-[24px] transition-all duration-500 ease-in-out  ${
          !isActive
            ? "text-gray-200 font-light text-sm"
            : "text-[#E52323] font-semibold 2xl:text-2xl text-lg"
        }`}>
        Paint Protection Film
      </p>
    </div>
  );
};
