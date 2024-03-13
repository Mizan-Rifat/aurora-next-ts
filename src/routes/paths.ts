export const rootPaths = {
  pagesRoot: 'pages',
  authRoot: 'authentication',
  authDefaultRoot: 'default',
  errorRoot: 'error'
};

export default {
  root: '/dashboards/e-commerce',
  starter: `/${rootPaths.pagesRoot}/starter`,
  login: `/${rootPaths.authRoot}/${rootPaths.authDefaultRoot}/login`,
  signup: `/${rootPaths.authRoot}/${rootPaths.authDefaultRoot}/sign-up`,
  forgotPassword: `/${rootPaths.authRoot}/${rootPaths.authDefaultRoot}/forgot-password`,
  '2FA': `/${rootPaths.authRoot}/${rootPaths.authDefaultRoot}/2FA`,
  comingSoon: `/coming-soon`,
  404: `/${rootPaths.errorRoot}/404`
};
