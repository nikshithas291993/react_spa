import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Colors } from "../../public/styles/theme";
import { ActionIconsContainerDesktop , ActionIconsContainerMobile ,MyList} from "../../public/styles/appbar";

export default function Actions({ matches }) {

  const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;

  return (
    <Component>
      <MyList type="row">
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <a style={{ textDecoration: 'none' }} href="/cart"><ShoppingCartIcon /></a> 
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon 
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.white,
            }}
          >
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <a href="/signin"><ListItemIcon 
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.white,
            }}
          >
            <PersonIcon />
          </ListItemIcon></a>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component>
  );
}
