'use client';

import { createTheme } from '@mui/material';
import Button, { ButtonBase } from './components/Button';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import Accordion, { AccordionDetails, AccordionSummary } from './components/Accordion';
import Pagination, { PaginationItem } from './components/Pagination';
import Chip from './components/Chip';
import palette from './palette';
import typography from './typography';
import TextField from './components/text-fields/TextField';
import Switch from './components/Switch';
import { ListItemButton, ListItemIcon, ListItemText } from './components/List';
import Menu, { MenuItem } from './components/Menu';
import AppBar from './components/AppBar';
import Toolbar from './components/Toolbar';
import FormHelperText from './components/text-fields/FormHelperText';
import FilledInput from './components/text-fields/FilledInput';
import OutlinedInput from './components/text-fields/OutlinedInput';
import InputLabel from './components/text-fields/InputLabel';
import InputAdornment from './components/text-fields/InputAdornment';
import shadows from './shadows';
import Tooltip from './components/Tooltip';
import { Tab, Tabs } from './components/Tab';
import { CircularProgress, LinearProgress } from './components/Progress';
import { Avatar, AvatarGroup } from './components/Avatar';
import Paper from './components/Paper';
import Divider from './components/Divider';
import Select from './components/Select';
import Stack from './components/Stack';
import Table, { TableCell, TableContainer, TableSortLabel } from './components/Table';
import TablePagination from './components/TablePagination';
import type {} from '@mui/x-data-grid/themeAugmentation';
import DataGrid from './components/DataGrid';
import CssBaseline from './components/CssBaseline';
import IconButton from './components/IconButton';
import Input from './components/text-fields/Input';
import sxConfig from './sxConfig';
import Link from './components/Link';
import FormControlLabel from './components/text-fields/FormControlLabel';

export const theme = createTheme({
  palette,
  typography,
  unstable_sxConfig: sxConfig,
  components: {
    MuiAppBar: AppBar,
    MuiPaper: Paper,
    MuiDivider: Divider,
    MuiAccordion: Accordion,
    MuiAccordionSummary: AccordionSummary,
    MuiButton: Button,
    MuiButtonBase: ButtonBase,
    // input fields
    MuiTextField: TextField,
    MuiFilledInput: FilledInput,
    MuiOutlinedInput: OutlinedInput,
    MuiInputLabel: InputLabel,
    MuiInputAdornment: InputAdornment,
    MuiFormHelperText: FormHelperText,
    MuiInput: Input,
    MuiFormControlLabel: FormControlLabel,
    // ----------
    MuiSelect: Select,
    MuiStack: Stack,
    MuiCheckbox: Checkbox,
    MuiRadio: Radio,
    MuiPagination: Pagination,
    MuiPaginationItem: PaginationItem,
    MuiTablePagination: TablePagination,
    MuiChip: Chip,
    MuiSwitch: Switch,
    MuiListItemButton: ListItemButton,
    MuiListItemIcon: ListItemIcon,
    MuiListItemText: ListItemText,
    MuiMenu: Menu,
    MuiMenuItem: MenuItem,
    MuiToolbar: Toolbar,
    MuiTooltip: Tooltip,
    MuiTabs: Tabs,
    MuiTab: Tab,
    MuiCircularProgress: CircularProgress,
    MuiLinearProgress: LinearProgress,
    MuiAvatar: Avatar,
    MuiAvatarGroup: AvatarGroup,
    MuiAccordionDetails: AccordionDetails,
    MuiTableContainer: TableContainer,
    MuiTable: Table,
    MuiTableCell: TableCell,
    MuiDataGrid: DataGrid,
    MuiTableSortLabel: TableSortLabel,
    MuiCssBaseline: CssBaseline,
    MuiIconButton: IconButton,
    MuiLink: Link
  }
});

// Add custom shadows to theme
shadows.forEach((shadow, index) => {
  theme.shadows[index + 1] = shadow;
});
