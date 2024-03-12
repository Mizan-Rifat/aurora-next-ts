import {
  Divider,
  Grid,
  TextField,
  Box,
  Typography,
  Stack,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
} from '@mui/material';
import google_logo from 'assets/icons/google_logo.webp';
import apple_logo from 'assets/icons/apple_logo.webp';
import paths from 'routes/paths';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import PasswordTextField from 'components/common/PasswordTextField';

interface LoginFormValues {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email('Please provide a valid email address.')
      .required('This field is required'),
    password: yup.string().required('This field is required'),
  })
  .required();

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      // TODO: Replace this promise with functional login action
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log({ data });
          resolve(data);
        }, 1000);
      });
    } catch (error) {
      // TODO: Show a toast message with the error message
      console.error(error);
    }
  };

  return (
    <Stack
      height={1}
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      pt={{ md: 10 }}
      pb={10}
    >
      <div />
      <Grid container maxWidth="35rem" rowGap={4} p={{ xs: 3, sm: 5 }} mb={5}>
        <Grid item xs={12}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
            spacing={1}
          >
            <Typography variant="h4">Log in</Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Don&apos;t have an account?
              <Link href={paths.signup} sx={{ ml: 1 }}>
                Sign up
              </Link>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction={{ xs: 'column', lg: 'row' }}
            gap={2}
            alignItems="center"
            flexWrap="wrap"
          >
            <Button
              fullWidth
              variant="soft"
              color="primary"
              size="large"
              sx={{ flex: 1, whiteSpace: 'nowrap' }}
              startIcon={<img src={google_logo} alt="icon" />}
            >
              Sign in with google
            </Button>
            <Button
              fullWidth
              variant="soft"
              color="primary"
              size="large"
              sx={{ flex: 1, whiteSpace: 'nowrap' }}
              startIcon={<img src={apple_logo} alt="icon" />}
            >
              Sign in with apple
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ color: 'text.secondary' }}>or use email</Divider>
        </Grid>
        <Grid item xs={12}>
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
              <Grid item xs={12} mb={3}>
                <TextField
                  fullWidth
                  size="large"
                  id="email"
                  type="email"
                  label="Email"
                  error={!!errors.email}
                  helperText={<>{errors.email?.message}</>}
                  {...register('email')}
                />
              </Grid>
              <Grid item xs={12} mb={2.5}>
                <PasswordTextField
                  fullWidth
                  size="large"
                  id="password"
                  label="Password"
                  error={!!errors.password}
                  helperText={<>{errors.password?.message}</>}
                  {...register('password')}
                />
              </Grid>
              <Grid item xs={12} mb={6}>
                <Stack justifyContent="space-between" alignItems="center" spacing={1}>
                  <FormControlLabel
                    control={<Checkbox name="checked" color="primary" size="small" />}
                    label={
                      <Typography variant="subtitle2" color="text.secondary">
                        Remember this device
                      </Typography>
                    }
                  />
                  <Link href={paths.forgotPassword} variant="subtitle2">
                    Forgot Password?
                  </Link>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <LoadingButton
                  fullWidth
                  type="submit"
                  size="large"
                  variant="contained"
                  loading={isSubmitting}
                >
                  Log in
                </LoadingButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Link href="#!" variant="subtitle2">
        Trouble signing in?
      </Link>
    </Stack>
  );
};

export default LoginForm;
