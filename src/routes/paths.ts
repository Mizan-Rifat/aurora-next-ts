export const rootPaths = {
  root: '/',
  pagesRoot: 'pages',
  authRoot: 'authentication',
  errorRoot: 'error',
};

export default {
  starter: `/${rootPaths.pagesRoot}/starter`,
  login: `/${rootPaths.authRoot}/login`,
  signup: `/${rootPaths.authRoot}/sign-up`,
  forgotPassword: `/${rootPaths.authRoot}/forgot-password`,
  '2FA': `/${rootPaths.authRoot}/2FA`,
  comingSoon: `/coming-soon`,
  404: `/${rootPaths.errorRoot}/404`,
};
