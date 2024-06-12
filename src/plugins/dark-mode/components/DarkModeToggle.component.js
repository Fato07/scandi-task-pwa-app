/* eslint-disable react/forbid-dom-props */
/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-conditional */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './DarkModeToggle.style.scss';

/** @namespace ScandiTaskPwaApp/Plugins/DarkMode/Components/DarkModeToggle/Component */
export class DarkModeToggleComponent extends PureComponent {
    static propTypes = {
        toggleDarkMode: PropTypes.func.isRequired,
        isDarkMode: PropTypes.bool.isRequired,
    };

    render() {
        const { toggleDarkMode, isDarkMode } = this.props;

        return (
            <button className="DarkModeToggle" onClick={ toggleDarkMode }>
                { isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode' }
            </button>
        );
    }
}

export default DarkModeToggleComponent;
