import paths, { rootPaths } from './paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path?: string;
  active?: boolean;
  icon?: string;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  items: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 'homepage',
    subheader: 'Homepage',
    items: [
      {
        name: 'E-commerce',
        path: rootPaths.root,
        pathName: 'e-commerce',
        icon: 'material-symbols:shopping-cart-outline',
        active: true,
      },
      {
        name: 'Project ',
        path: paths.comingSoon,
        pathName: 'project ',
        icon: 'material-symbols:pending-actions-rounded',
      },
      {
        name: 'CRM',
        path: paths.comingSoon,
        pathName: 'crm',
        icon: 'material-symbols:phone-in-talk-outline-rounded',
      },
      {
        name: 'Analytics',
        path: paths.comingSoon,
        pathName: 'analytics',
        icon: 'material-symbols:query-stats-rounded',
      },
      {
        name: 'HRM',
        path: paths.comingSoon,
        pathName: 'hrm',
        icon: 'material-symbols:manage-accounts-outline',
      },
    ],
  },
  {
    id: 'pages',
    subheader: 'Pages',
    items: [
      {
        name: 'Starter',
        path: paths.starter,
        pathName: 'starter',
        icon: 'material-symbols:play-circle-outline-rounded',
        active: true,
      },
      {
        name: 'Authentication',
        pathName: 'authentication',
        icon: 'material-symbols:security-rounded',
        active: true,
        items: [
          {
            name: 'Login',
            path: paths.login,
            pathName: 'login',
            active: true,
          },
          {
            name: 'Sign up',
            path: paths.signup,
            pathName: 'sign-up',
            active: true,
          },
          {
            name: 'Forgot password',
            path: paths.forgotPassword,
            pathName: 'forgot-password',
            active: true,
          },
          {
            name: '2FA',
            path: paths['2FA'],
            pathName: '2FA',
            active: true,
          },
        ],
      },
      {
        name: 'Error 404',
        pathName: 'error',
        active: true,
        icon: 'material-symbols:error-outline-rounded',
        path: paths[404],
      },
    ],
  },

  {
    id: 'misc',
    subheader: 'Misc',
    items: [
      {
        name: 'Landing',
        path: paths.comingSoon,
        pathName: 'landing',
        icon: 'material-symbols:flight-land-rounded',
      },
      {
        name: 'Account',
        path: paths.comingSoon,
        pathName: 'account',
        icon: 'material-symbols:manage-accounts-outline-rounded',
      },
      {
        name: 'Pricing',
        path: paths.comingSoon,
        pathName: 'pricing',
        icon: 'material-symbols:sell-outline',
      },
      {
        name: 'Error',
        path: paths.comingSoon,
        pathName: 'error',
        icon: 'material-symbols:error-outline-rounded',
      },
      {
        name: 'FAQ',
        path: paths.comingSoon,
        pathName: 'faq',
        icon: 'material-symbols:quiz-outline-rounded',
      },
      {
        name: 'Multi level',
        pathName: 'multi-level',
        icon: 'material-symbols:layers-outline-rounded',
        active: true,
        items: [
          {
            name: 'Level two (1)',
            pathName: 'multi-level-2',
            active: true,
          },
          {
            name: 'Level two (2)',
            pathName: 'multi-level-3',
            active: true,
            items: [
              {
                name: 'Level three (1)',
                path: '#!',
                pathName: 'multi-level-item-3',
                active: true,
              },
              {
                name: 'Level three (2)',
                path: '#!',
                pathName: 'multi-level-item-4',
                active: true,
              },
            ],
          },
          {
            name: 'Level two (3)',
            pathName: 'multi-level-4',
            active: true,
            items: [
              {
                name: 'Level three (3)',
                path: '#!',
                pathName: 'multi-level-item-6',
                active: true,
              },
              {
                name: 'Level three (4)',
                pathName: 'multi-level-item-7',
                active: true,
                items: [
                  {
                    name: 'Level four (1)',
                    path: '#!',
                    pathName: 'multi-level-item-8',
                    active: true,
                  },
                  {
                    name: 'Level four (2)',
                    pathName: 'multi-level-item-9',
                    active: true,
                    items: [
                      {
                        name: 'Level five (1)',
                        path: '#!',
                        pathName: 'multi-level-item-10',
                        active: true,
                      },
                      {
                        name: 'Level five (2)',
                        path: '#!',
                        pathName: 'multi-level-item-11',
                        active: true,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default sitemap;
