import IconifyIcon from 'components/base/IconifyIcon';
import { PropsWithChildren, useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  Avatar,
  Box,
  Breadcrumbs,
  Chip,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import SearchTextField from './SearchTextField';
import SimpleBar from 'simplebar-react';
import searchResult from 'data/search-result';
import { getFileExtensionFromUrl, getFileNameFromUrl } from 'helpers/utils';

const SearchResult = ({ handleClose }: { handleClose: () => void }) => {
  const { breadcrumbs, contacts, files, tags } = searchResult;

  return (
    <>
      <SearchField handleClose={handleClose} />
      <SimpleBar style={{ maxHeight: 600, minHeight: 0, width: '100%' }}>
        <Box sx={{ px: 3, py: 1.25 }}>
          <Link component="button" variant="caption" fontWeight="medium" underline="none">
            Advanced search
          </Link>
        </Box>
        <Divider />
        <Box>
          <Stack justifyContent="space-between" sx={{ py: 2, px: 3 }}>
            <Typography variant="caption" fontWeight="medium" color="text.disabled">
              Recent
            </Typography>

            <Link component="button" variant="caption" fontWeight="medium" underline="none">
              Clear history
            </Link>
          </Stack>

          <List
            dense
            sx={{
              pt: 0,
              pb: 2,
              listStyleType: 'disc',
              listStylePosition: 'inside',
              color: 'grey.300',
            }}
          >
            {breadcrumbs.map((breadcrumb) => (
              <ListItem
                key={breadcrumb[0].label}
                sx={{
                  px: 3,
                  display: 'list-item',
                  '&:hover': {
                    backgroundColor: 'action.selected',
                  },
                }}
              >
                <Breadcrumbs
                  aria-label="breadcrumb"
                  maxItems={2}
                  sx={{
                    py: 0.5,
                    typography: 'caption',
                    color: 'text.secondary',
                    marginLeft: -0.5,
                    display: 'inline-block',
                    fontWeight: 'medium',
                    '@supports (-moz-appearance:none)': {
                      marginLeft: 0.5,
                    },
                  }}
                >
                  {breadcrumb.map((breadcrumbItem) => (
                    <div key={breadcrumbItem.label}>
                      <Link
                        color="inherit"
                        underline="none"
                        href={breadcrumbItem.active ? '#!' : breadcrumbItem.href}
                        sx={[
                          !!breadcrumbItem.active && {
                            color: 'text.primary',
                          },
                        ]}
                      >
                        {breadcrumbItem.label}
                      </Link>

                      {breadcrumbItem.active && (
                        <Link underline="none" href={breadcrumbItem.href} marginLeft={0.5}>
                          <IconifyIcon
                            icon="material-symbols:open-in-new-rounded"
                            fontSize={16}
                            sx={{ verticalAlign: 'bottom' }}
                          />
                        </Link>
                      )}
                    </div>
                  ))}
                </Breadcrumbs>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider />
        <ResultItemSection title="Files">
          <List sx={{ pt: 0, pb: 2 }}>
            {files.map((file) => (
              <ListItem
                disablePadding
                key={file.name}
                sx={{
                  '& .MuiListItemSecondaryAction-root': {
                    display: 'none',
                  },
                  '&:hover': {
                    '& .MuiListItemSecondaryAction-root': {
                      display: 'block',
                    },
                  },
                }}
                secondaryAction={
                  <IconButton edge="end" aria-label="download" sx={{ mr: 1 }}>
                    <IconifyIcon
                      icon="material-symbols-light:download-rounded"
                      // fontSize={32}
                      color="primary.main"
                    />
                  </IconButton>
                }
              >
                <ListItemButton sx={{ gap: 1, py: 1, px: 3, borderRadius: 0 }}>
                  <ListItemIcon>
                    {file.icon && (
                      <IconifyIcon icon={file.icon} fontSize={32} color="primary.main" />
                    )}
                    {file.image && <img src={file.image} alt={file.name} height={30} width={30} />}
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      my: 0,
                      '& .MuiListItemText-primary': {
                        // lineClamp: 1,
                        // display: 'flex',
                      },
                    }}
                    secondary={file.path}
                    primaryTypographyProps={{
                      variant: 'subtitle2',
                      color: 'text.secondary',
                      mb: 0.25,
                      sx: { display: 'flex' },
                    }}
                    secondaryTypographyProps={{
                      variant: 'caption',
                      color: 'text.disabled',
                      fontWeight: 'medium',
                      component: 'p',
                    }}
                  >
                    {getFileNameFromUrl(file.name).slice(0, 25)}
                    {file.name.length > 25 && '..'}.{getFileExtensionFromUrl(file.name)}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </ResultItemSection>

        <ResultItemSection title="Contacts">
          <Box sx={{ px: 3, mb: 2 }}>
            <Stack gap={1} flexWrap="wrap">
              {contacts.map((contact) => (
                <Chip
                  key={contact.name}
                  avatar={<Avatar alt={contact.name} src={contact.avatar} />}
                  label={contact.name}
                  variant="soft"
                  color="default"
                  component={Link}
                  underline="none"
                  href="#!"
                  sx={{ cursor: 'pointer' }}
                />
              ))}
              <Button
                color="primary"
                variant="text"
                size="small"
                endIcon={<IconifyIcon icon="material-symbols:chevron-right-rounded" />}
              >
                See All Contacts
              </Button>
            </Stack>
          </Box>
        </ResultItemSection>

        <ResultItemSection title="Popular tags">
          <Box sx={{ px: 3, mb: 2 }}>
            <Stack gap={1} flexWrap="wrap">
              {tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  variant="soft"
                  color="default"
                  component={Link}
                  underline="none"
                  href="#!"
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Stack>
          </Box>
        </ResultItemSection>
        <Box sx={{ px: 3, py: 2 }}>
          <Typography component="p" variant="caption" fontWeight="medium" color="text.disabled">
            Not the results you expected? <Link href="#!">Give feedback</Link> or{' '}
            <Link href="#!">learn more</Link>
          </Typography>
        </Box>
      </SimpleBar>
    </>
  );
};

const SearchField = ({ handleClose }: { handleClose: () => void }) => {
  const initialFocusRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (initialFocusRef.current) {
      initialFocusRef.current.focus();
    }
  });
  return (
    <SearchTextField
      fullWidth
      sx={{ '& .MuiInputBase-root': { borderRadius: 0 } }}
      inputProps={{
        ref: initialFocusRef,
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" onClick={handleClose}>
              <IconifyIcon icon="material-symbols:close-rounded" color="grey.500" />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const ResultItemSection = ({
  title,
  children,
  bottomDivider = true,
}: PropsWithChildren<{ title: string; bottomDivider?: boolean }>) => {
  return (
    <Box>
      <Box sx={{ my: 2, px: 3 }}>
        <Typography variant="caption" component="h6" fontWeight="medium" color="text.disabled">
          {title}
        </Typography>
      </Box>
      {children}
      {bottomDivider && <Divider />}
    </Box>
  );
};

export default SearchResult;
