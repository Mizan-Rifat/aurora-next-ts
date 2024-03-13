import { usePathname } from 'next/navigation';
import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react';
import { SubMenuItem } from 'routes/sitemap';

interface NavbarVerticalContextInterface {
  openItems: string[];
  setOpenItems: Dispatch<SetStateAction<string[]>>;
  isNestedItemOpen: (items?: SubMenuItem[]) => boolean;
}

const NavbarVerticalContext = createContext({} as NavbarVerticalContextInterface);

const NavbarVerticalProvider = ({ children }: PropsWithChildren) => {
  const [openItems, setOpenItems] = useState([]);

  const pathname = usePathname();

  const isNestedItemOpen = (items: SubMenuItem[] = []) => {
    const checkLink = (children: SubMenuItem) => {
      if (`${children.path}` === pathname) {
        return true;
      }
      return children.items && children.items.some(checkLink);
    };
    return items.some(checkLink);
  };

  return (
    <NavbarVerticalContext.Provider value={{ openItems, setOpenItems, isNestedItemOpen }}>
      {children}
    </NavbarVerticalContext.Provider>
  );
};

export const useNavbarVertical = () => useContext(NavbarVerticalContext);

export default NavbarVerticalProvider;
