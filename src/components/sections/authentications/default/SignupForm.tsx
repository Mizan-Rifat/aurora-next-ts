import { Divider, Grid, TextField, Box, Typography, Stack, Button, Link } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import google_logo from 'assets/icons/google_logo.webp';
import apple_logo from 'assets/icons/apple_logo.webp';
import PasswordTextField from 'components/common/PasswordTextField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import paths from 'routes/paths';

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
}

const schema = yup
  .object({
    name: yup.string().required('This field is required'),
    email: yup
      .string()
      .email('Please provide a valid email address.')
      .required('This field is required'),
    password: yup.string().required('This field is required'),
  })
  .required();

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: SignupFormValues) => {
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
      <Grid
        container
        height={1}
        maxWidth="35rem"
        rowGap={4}
        alignContent={{ md: 'center' }}
        p={{ xs: 3, sm: 5 }}
        mb={5}
      >
        <Grid item xs={12}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
            spacing={1}
          >
            <Typography variant="h4">Sign up</Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Already have an account?
              <Link href={paths.login} sx={{ ml: 1 }}>
                Log in
              </Link>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
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
                  id="name"
                  type="text"
                  label="Name"
                  variant="filled"
                  error={!!errors.name}
                  helperText={<>{errors.name?.message}</>}
                  {...register('name')}
                />
              </Grid>
              <Grid item xs={12} mb={3}>
                <TextField
                  fullWidth
                  size="large"
                  id="email"
                  type="email"
                  label="Email"
                  variant="filled"
                  error={!!errors.email}
                  helperText={<>{errors.email?.message}</>}
                  {...register('email')}
                />
              </Grid>
              <Grid item xs={12} mb={4}>
                <PasswordTextField
                  fullWidth
                  size="large"
                  id="password"
                  label="Password"
                  variant="filled"
                  error={!!errors.password}
                  helperText={<>{errors.password?.message}</>}
                  {...register('password')}
                />
              </Grid>
              <Grid item xs={12} mb={2.5}>
                <Typography variant="body2">
                  <IconifyIcon
                    icon="material-symbols:info-outline-rounded"
                    fontSize={16}
                    color="warning.main"
                    sx={{ verticalAlign: 'text-bottom' }}
                  />{' '}
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of
                  Service apply. By clicking the Create Account button, you are agreeing to the{' '}
                  <Link href="#!">terms and conditions.</Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <LoadingButton
                  loading={isSubmitting}
                  fullWidth
                  type="submit"
                  size="large"
                  variant="contained"
                >
                  Create Account
                </LoadingButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Link href="#!" variant="subtitle2" sx={{ flex: 1 }}>
        Trouble signing in?
      </Link>
    </Stack>
  );
};

export default SignupForm;
