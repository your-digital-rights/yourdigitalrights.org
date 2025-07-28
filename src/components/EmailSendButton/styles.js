import { styled } from '@mui/material/styles';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';

export const BorderButtonGroup = styled(ButtonGroup)(() => ({
  borderRadius: "24px 24px 24px 24px",
}));

export const BorderButton = styled(Button)(() => ({
  borderRadius: "24px 24px 24px 24px",
}));

export const MenuItemIcon = styled('div')(() => ({
  marginRight: "10px",
}));

export const StyledPopper = styled(Popper)(() => ({
  zIndex: "5",
}));