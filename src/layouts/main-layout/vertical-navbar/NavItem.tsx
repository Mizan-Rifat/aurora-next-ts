import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useSettingsContext } from 'providers/SettingsProvider';
import { SubMenuItem } from 'routes/sitemap';
import { MouseEvent, useEffect, useMemo, useState } from 'react';
import NavItemPopper from './NavItemPopper';
import { useNavbarVertical } from './NavbarVericalProvider';
import NavItemCollapse from './NavItemCollapse';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import IconifyIcon from 'components/base/IconifyIcon';
import paths from 'routes/paths';
import { usePathname } from 'next/navigation';
import { Link } from '@mui/material';

interface NavItemProps {
  item: SubMenuItem;
  level: number;
}

const NavItem = ({ item, level }: NavItemProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const [openPopperMenu, setOpenPopperMenu] = useState(false);
  const pathname = usePathname();

  const { setOpenItems, openItems } = useNavbarVertical();
  const { currentBreakpoint } = useBreakpoints();
  const {
    config: { navbarVerticalCollapsed }
  } = useSettingsContext();

  const hasNestedItems = useMemo(() => Object.prototype.hasOwnProperty.call(item, 'items'), [item]);

  const expandIcon = (
    <IconifyIcon
      icon="material-symbols:expand-more-rounded"
      sx={[
        {
          fontSize: 12,
          transition: theme =>
            theme.transitions.create('transform', {
              duration: theme.transitions.duration.shorter
            })
        },
        openItems[level] === item.pathName && {
          transform: 'rotate(180deg)'
        },
        navbarVerticalCollapsed && {
          transform: 'translateY(1px) rotate(270deg)',
          position: 'absolute',
          right: 0
        }
      ]}
    />
  );

  const toggleCollapseItem = () => {
    if (hasNestedItems) {
      if (openItems[level] === item.pathName) {
        setOpenItems(openItems.slice(0, level));
      } else {
        const updatedOpenItems = [...openItems];
        updatedOpenItems[level] = item.pathName;
        setOpenItems(updatedOpenItems);
      }
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenPopperMenu(false);
  };

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenPopperMenu(true);
  };

  const isNestedItemOpen = (items: SubMenuItem[] = []) => {
    const checkLink = (children: SubMenuItem) => {
      if (`${children.path}` === pathname) {
        return true;
      }
      return children.items && children.items.some(checkLink);
    };
    return items.some(checkLink);
  };

  useEffect(() => {
    if (isNestedItemOpen(item.items)) {
      if (currentBreakpoint !== 'md') {
        toggleCollapseItem();
      } else {
        setOpenItems([]);
      }
    }
  }, [currentBreakpoint]);

  return (
    <>
      <ListItem key={item.pathName} disablePadding>
        <ListItemButton
          className={item.name}
          component={item.items ? 'div' : Link}
          href={item.path}
          underline="none"
          onClick={!navbarVerticalCollapsed ? toggleCollapseItem : undefined}
          onMouseEnter={navbarVerticalCollapsed ? handleMouseEnter : undefined}
          onMouseLeave={navbarVerticalCollapsed ? handleClose : undefined}
          aria-expanded={openPopperMenu}
          selected={
            pathname !== paths.comingSoon &&
            (pathname === item.path ||
              (navbarVerticalCollapsed && isNestedItemOpen(item.items)) ||
              (openItems[level] !== item.pathName && isNestedItemOpen(item.items)))
          }
          sx={[
            !item.active && {
              color: 'text.disabled'
            },
            navbarVerticalCollapsed && {
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              textAlign: 'center',
              p: 1
            },
            (!navbarVerticalCollapsed || level !== 0) &&
              (theme => ({
                minWidth: 180,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                textAlign: 'left',
                p: theme.spacing(0.75, 2)
              })),
            openPopperMenu && {
              backgroundColor: 'action.hover'
            }
          ]}
        >
          {item.icon && (
            <ListItemIcon
              sx={{
                '& .iconify': {
                  fontSize: navbarVerticalCollapsed ? 24 : 14
                }
              }}
            >
              <IconifyIcon icon={item.icon} />
            </ListItemIcon>
          )}
          <Box
            sx={{
              flex: 1,
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <ListItemText
              sx={{
                '& .MuiListItemText-primary': {
                  fontSize: navbarVerticalCollapsed && level === 0 ? 12 : 14
                }
              }}
            >
              {item.name}
            </ListItemText>
            {hasNestedItems && expandIcon}
          </Box>

          {hasNestedItems && navbarVerticalCollapsed && (
            <NavItemPopper
              handleClose={handleClose}
              anchorEl={anchorEl as HTMLElement}
              open={!!anchorEl && openPopperMenu}
              // open={true}
              level={level + 1}
            >
              <List dense disablePadding>
                {item.items!.map(nestedItem => (
                  <NavItem key={nestedItem.pathName} item={nestedItem} level={level + 1} />
                ))}
              </List>
            </NavItemPopper>
          )}
        </ListItemButton>
      </ListItem>

      {hasNestedItems && !navbarVerticalCollapsed && <NavItemCollapse item={item} level={level} />}
    </>
  );
};

export default NavItem;
