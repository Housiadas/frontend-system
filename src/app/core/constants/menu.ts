import { MenuItem } from '@app/core/models';
import { faBell, faCogs, faDashboard, faDownload, faGift, faUsers } from '@fortawesome/free-solid-svg-icons';

export class Menu {
    public static pages: MenuItem[] = [
        {
            group: 'Base',
            separator: true,
            items: [
                {
                    icon: faDashboard,
                    label: 'Dashboard',
                    route: '/dashboard',
                },
                {
                    icon: faUsers,
                    label: 'Users',
                    route: '/users',
                },
            ],
        },
        {
            group: 'Collaboration',
            separator: true,
            items: [
                {
                    icon: faDownload,
                    label: 'Download',
                    route: '/download',
                },
                {
                    icon: faGift,
                    label: 'Gift Card',
                    route: '/gift',
                },
                {
                    icon: faUsers,
                    label: 'Users',
                    route: '/users',
                    children: [
                        { label: 'Sign up', route: '/auth/sign-up' },
                        { label: 'Sign in', route: '/auth/sign-in' },
                        { label: 'Forgot Password', route: '/auth/forgot-password' },
                        { label: 'New Password', route: '/auth/new-password' },
                        { label: 'Two Steps', route: '/auth/two-steps' },
                    ],
                },
            ],
        },
        {
            group: 'Settings',
            separator: false,
            items: [
                {
                    icon: faCogs,
                    label: 'Settings',
                    route: '/settings',
                },
                {
                    icon: faBell,
                    label: 'Notifications',
                    route: '/gift',
                },
            ],
        },
    ];
}
