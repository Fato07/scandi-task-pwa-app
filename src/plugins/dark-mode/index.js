/* eslint-disable no-undef */
import DarkModeToggle from './components/DarkModeToggle.component';

export default function DarkModePlugin() {
    // Register the component
    register({
        'Component/Header/Component': {
            member: {
                render: [
                    {
                        position: 'before',
                        content: DarkModeToggle,
                        props: {
                            toggleDarkMode: () => {
                                document.body.classList.toggle('dark-mode');
                            },
                            isDarkMode: document.body.classList.contains('dark-mode'),
                        },
                    },
                ],
            },
        },
    });
}
