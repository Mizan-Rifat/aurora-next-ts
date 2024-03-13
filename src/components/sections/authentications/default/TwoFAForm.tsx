import { ChangeEvent, Fragment, KeyboardEvent, useEffect, useRef, useState } from 'react';
import {
  Grid,
  Box,
  Typography,
  Stack,
  Button,
  FormControlLabel,
  Checkbox,
  Link
} from '@mui/material';
import StyledTextField from 'components/styled/StyledTextField';
import dayjs from 'dayjs';
import useCountdown from 'hooks/useCountdown';

const totalInputLength = 6;

const TwoFAForm = () => {
  const [otp, setOtp] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otpSent, setOtpSent] = useState(false);
  const { time, startTimer } = useCountdown();

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number): void => {
    const { value } = e.target;
    if (value) {
      [...value].slice(0, totalInputLength).forEach((char, charIndex) => {
        if (inputRefs.current && inputRefs.current[index + charIndex]) {
          inputRefs.current[index + charIndex]!.value = char;
          inputRefs.current[index + charIndex + 1]?.focus();
        }
      });
      const updatedOtp = inputRefs.current.reduce((acc, input) => acc + (input?.value || ''), '');
      setOtp(updatedOtp);
    }
  };

  const handleKeydown = (event: KeyboardEvent, index: number) => {
    if (event.key === 'Backspace') {
      inputRefs.current[index]!.value = '';
      inputRefs.current[index - 1]?.focus();
      inputRefs.current[index - 1]?.select();

      const updatedOtp = inputRefs.current.reduce((acc, input) => acc + (input?.value || ''), '');
      setOtp(updatedOtp);
    }
    if (event.key === 'ArrowLeft') {
      inputRefs.current[index - 1]?.focus();
      inputRefs.current[index - 1]?.select();
    }
    if (event.key === 'ArrowRight') {
      inputRefs.current[index + 1]?.focus();
      inputRefs.current[index + 1]?.select();
    }
  };

  const sentOtp = () => {
    setOtpSent(true);
    startTimer(30, () => {
      setOtpSent(false);
    });
  };

  useEffect(() => {
    sentOtp();
  }, []);

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
          <Typography variant="h4" mb={2}>
            Enter the OTP
          </Typography>
          <Typography variant="body1">
            An 6-digit one time password (OTP) has been sent to your number{' '}
            <Typography component="span" whiteSpace="nowrap">
              +12 ** *** ***89
            </Typography>
          </Typography>
          <Typography variant="caption" color="text.secondary" fontWeight="medium">
            Didn&apos;t receive the code?{' '}
            <Link
              variant="caption"
              component="button"
              fontWeight="medium"
              underline={otpSent ? 'none' : 'always'}
              ml={0.5}
              disabled={otpSent}
              onClick={() => sentOtp()}
            >
              Send again {otpSent && <>in {dayjs(time * 1000).format('m:ss')} s</>}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box component="form" noValidate>
            <Grid container>
              <Grid item xs={12} mb={2.5}>
                <Grid container spacing={{ xs: 1, sm: 2 }} alignItems="center">
                  {Array(totalInputLength)
                    .fill('')
                    .map((_, index) => (
                      <Fragment key={index}>
                        <Grid item>
                          <StyledTextField
                            inputRef={(el: HTMLInputElement) => {
                              inputRefs.current[index] = el;
                            }}
                            type="number"
                            disabledSpinButton
                            sx={{ width: '42px', textAlign: 'center' }}
                            inputProps={{
                              style: { textAlign: 'center' }
                            }}
                            onClick={() => inputRefs.current[index]?.select()}
                            onFocus={() => inputRefs.current[index]?.select()}
                            onKeyUp={e => handleKeydown(e, index)}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, index)}
                            size="large"
                          />
                        </Grid>
                        {index === totalInputLength / 2 - 1 && (
                          <Grid item sx={{ lineHeight: '32px', marginX: '4px' }}>
                            -
                          </Grid>
                        )}
                      </Fragment>
                    ))}
                </Grid>
              </Grid>
              <Grid item xs={12} mb={4}>
                <FormControlLabel
                  control={<Checkbox name="checked" size="small" />}
                  label={
                    <Typography variant="subtitle2" color="text.secondary">
                      Remember this device
                    </Typography>
                  }
                />
              </Grid>
              <Grid item xs={12} mb={2}>
                <Button
                  fullWidth
                  color="primary"
                  size="large"
                  variant="contained"
                  disabled={otp.length < totalInputLength}
                >
                  Verify
                </Button>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Link href="#!" variant="subtitle2">
                  Try alternate methods
                </Link>
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

export default TwoFAForm;
