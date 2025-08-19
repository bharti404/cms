// assets
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';



const icons = {
  NavigationOutlinedIcon: NavigationOutlinedIcon,
  HomeOutlinedIcon: HomeOutlinedIcon,
  ChromeReaderModeOutlinedIcon: ChromeReaderModeOutlinedIcon,
  HelpOutlineOutlinedIcon: HelpOutlineOutlinedIcon,
  SecurityOutlinedIcon: SecurityOutlinedIcon,
  AccountTreeOutlinedIcon: AccountTreeOutlinedIcon,
  BlockOutlinedIcon: BlockOutlinedIcon,
  AppsOutlinedIcon: AppsOutlinedIcon,
  ContactSupportOutlinedIcon: ContactSupportOutlinedIcon,
  BarChartOutlinedIcon: BarChartOutlinedIcon,
  AccountBalanceWalletOutlinedIcon: AccountBalanceWalletOutlinedIcon,
  MonitorHeartOutlinedIcon: MonitorHeartOutlinedIcon,
  CalendarMonthOutlinedIcon: CalendarMonthOutlinedIcon,
  MailOutlineOutlinedIcon: MailOutlineOutlinedIcon,
  FolderOpenOutlinedIcon: FolderOpenOutlinedIcon,


};

// ==============================|| MENU ITEMS ||============================== //

// eslint-disable-next-line
export default {
    items: [
      {
        id: 'navigation',
        title: 'Main Menu',
        // caption: 'Main Menu',
        type: 'group',
        icon: icons['NavigationOutlinedIcon'],
        children: [
                    // {
                    //   id: 'dashboard',
                    //   title: 'Dashboard',
                    //   type: 'collapse', // changed from 'item' to 'collapse'
                    //   icon: icons['HomeOutlinedIcon'],
                    //   children: [
                    //     {
                    //       id: 'dashboard-default',
                    //       title: 'Default',
                    //       type: 'item',
                    //       url: '/dashboard/default',
                    //       icon: icons['HomeOutlinedIcon']
                    //     },
                    //     {
                    //       id: 'dashboard-reports',
                    //       title: 'Reports',
                    //       type: 'item',
                    //       url: '/dashboard/reports',
                    //       icon: icons['ChromeReaderModeOutlinedIcon'] // optional icon
                    //     },
                    //     {
                    //       id: 'monitoring',
                    //       title: 'Monitoring',
                    //       type: 'item',
                    //       url: '/dashboard/monitoring',
                    //       icon: icons['MonitorHeartOutlinedIcon']

                    //     },

                    //     {
                    //     id: 'expenses',
                    //     title: 'Expenses',
                    //     type: 'item',
                    //     url: '/dashboard/expenses',
                    //     icon: icons['AccountBalanceWalletOutlinedIcon'] // You can change this
                    //     },
                    //     {
                    //       id: 'statistics',
                    //       title: 'Statistics',
                    //       type: 'item',
                    //       url: '/dashboard/statistics',
                    //       icon: icons['BarChartOutlinedIcon']
                    //     }


                    //   ]
                    // },
                    // {
                    //   id : "Applications",
                    //   title: "Applications",
                    //   type: "collapse",
                    //   icon: icons['AppsOutlinedIcon'],
                    //   children: [ 

                    //     {
                    //     id: "Calendar" ,
                    //     title: "Calendar",
                    //     type: "item",
                    //     url: '/Applications/Calendar',
                    //     icon :  icons["CalendarMonthOutlinedIcon"]
                    //     },
                    //     {
                    //       id:"File manager",
                    //       title: "File manager",
                    //       type: "item",
                    //       url: '/Applications/File manager',
                    //       icon : icons["FolderOpenOutlinedIcon"],
                    //     },
                    //     {
                    //       id :"Mailbox",  
                    //       title: "Mailbox",
                    //       type: "item",
                    //       url: '/Applications/Mailbox',
                    //       icon : icons["MailOutlineOutlinedIcon"],
                    //     }
                    //   ]

                    // },

                     {
                      id : "account",
                      title: "Accounting",
                      type: "collapse",
                      icon: icons['AppsOutlinedIcon'],
                      children: [ 

                        {
                          id:"accounting summary",
                          title: "Summary",
                          type: "item",
                          url: '/accounting/summary',
                          icon : icons["FolderOpenOutlinedIcon"],
                        },

                        {
                        id: "invoice" ,
                        title: "Invoice",
                        type: "item",
                        url: '/accounting/invoice',
                        icon :  icons["CalendarMonthOutlinedIcon"]
                        },
                         {
                        id: "bookkeeping" ,
                        title: "BookKeeping",
                        type: "item",
                        url: '/accounting/bookkeeping',
                        icon :  icons["CalendarMonthOutlinedIcon"]
                        },
                        {
                          id:"File manager",
                          title: "File manager",
                          type: "item",
                          url: '/Applications/File manager',
                          icon : icons["FolderOpenOutlinedIcon"],
                        },
                        {
                          id :"Mailbox",  
                          title: "Mailbox",
                          type: "item",
                          url: '/Applications/Mailbox',
                          icon : icons["MailOutlineOutlinedIcon"],
                        }
                      ]

                    }
                  ]

      },
      {
        id: 'pages',
        title: 'Pages',
        caption: 'Prebuild Pages',
        type: 'group',
        icon: icons['NavigationOutlinedIcon'],
        children: [
          {
            id: 'sample-page',
            title: 'Sample Page',
            type: 'item',
            url: '/sample-page',
            icon: icons['ChromeReaderModeOutlinedIcon']
          },
          {
            id: 'auth',
            title: 'Authentication',
            type: 'collapse',
            icon: icons['SecurityOutlinedIcon'],
            children: [
              {
                id: 'login-1',
                title: 'Login',
                type: 'item',
                url: '/application/login',
                target: true
              },
              {
                id: 'register',
                title: 'Register',
                type: 'item',
                url: '/application/register',
                target: true
              }
            ]
          }
        ]
      },
      {
        id: 'utils',
        title: 'Utils',
        type: 'group',
        icon: icons['AccountTreeOutlinedIcon'],
        children: [
          {
            id: 'util-icons',
            title: 'Icons',
            type: 'item',
            url: 'https://mui.com/material-ui/material-icons/',
            icon: icons['AppsOutlinedIcon'],
            external: true,
            target: true
          },
          {
            id: 'util-typography',
            title: 'Typography',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons['FormatColorTextOutlinedIcon']
          }
        ]
      },
      {
        id: 'support',
        title: 'Support',
        type: 'group',
        icon: icons['ContactSupportOutlinedIcon'],
        children: [
          {
            id: 'disabled-menu',
            title: 'Disabled Menu',
            type: 'item',
            url: '#',
            icon: icons['BlockOutlinedIcon'],
            disabled: true
          },
          {
            id: 'documentation',
            title: 'Documentation',
            type: 'item',
            url: 'https://codedthemes.gitbook.io/materially-react-material-documentation/',
            icon: icons['HelpOutlineOutlinedIcon'],
            external: true,
            target: true
          }
        ]
      }
    ]
};
