import { Grid, TextField, Box, Typography, Stack, Link } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';

interface FormValues {
  email: string;
}

const schema = yup
  .object({
    email: yup.string().email('Email must be a valid email').required('This field is required'),
  })
  .required();

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
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
      <Grid container maxWidth="35rem" rowGap={6} p={{ xs: 3, sm: 5 }} mb={5}>
        <Grid item xs={12}>
          <Typography variant="h4" mb={2}>
            Forgot Password?
          </Typography>
          <Typography variant="body1">
            Please enter your email address and an email with a link to reset your password will be
            sent.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
              <Grid item xs={12} mb={4}>
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
              <Grid item xs={12} mb={2}>
                <LoadingButton
                  type="submit"
                  loading={isSubmitting}
                  fullWidth
                  size="large"
                  variant="contained"
                >
                  Send Reset Link
                </LoadingButton>
              </Grid>
              <Grid item xs={12} mb={6}>
                <Typography variant="subtitle2" color="text.secondary">
                  Don&apos;t have access to that email?
                  <Link href="#!" sx={{ ml: 1 }}>
                    Try alternate methods
                  </Link>
                </Typography>
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

export default ForgotPasswordForm;
