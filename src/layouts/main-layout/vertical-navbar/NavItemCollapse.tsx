import { Collapse, List } from '@mui/material';
import NavItem from './NavItem';
import { SubMenuItem } from 'routes/sitemap';
import { useNavbarVertical } from './NavbarVericalProvider';

interface NavItemCollapseProps {
  item: SubMenuItem;
  level: number;
}

const NavItemCollapse = ({ item, level }: NavItemCollapseProps) => {
  const { openItems } = useNavbarVertical();

  return (
    <Collapse in={openItems[level] === item.pathName} timeout="auto" unmountOnExit>
      <List dense disablePadding sx={{ pl: level === 0 ? 4 : 2 }}>
        {item.items!.map((nestedItem) => (
          <NavItem key={nestedItem.pathName} item={nestedItem} level={level + 1} />
        ))}
      </List>
    </Collapse>
  );
};

export default NavItemCollapse;
