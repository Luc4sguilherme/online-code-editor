import './style.css';

import { useState } from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import LogoutIcon from '@mui/icons-material/Logout';

import { useAuth } from '../../contexts/authContext';
import { useLanguage } from '../../contexts/languageContext';
import { useResult } from '../../contexts/resultContext';
import languageHelper from '../../utils/languageHelper';
import DropDownMenu from '../DropDownMenu';
import ThemeSwitcher from '../ThemeSwitcher';

function Menu() {
  const [dropDownState, setDropDownState] = useState(false);
  const { signOut } = useAuth();
  const { language, changeLanguage } = useLanguage();
  const { clearResult, getResult } = useResult();

  function handleChangeLanguage(newLanguage: string) {
    changeLanguage(newLanguage);
    setDropDownState(false);
    clearResult();
  }

  return (
    <div className="menu">
      <div className="controls-wrapper">
        <ThemeSwitcher />

        <div className="select-language">
          <button
            type="button"
            id="drop-down"
            className="drop-down-btn btn"
            onClick={() => setDropDownState(prev => !prev)}
          >
            {languageHelper.getFormatted(language)}
            {dropDownState ? (
              <ArrowDropUpIcon style={{ color: 'var(--primaryText)' }} />
            ) : (
              <ArrowDropDownIcon style={{ color: 'var(--primaryText)' }} />
            )}
          </button>
          <DropDownMenu
            show={dropDownState}
            changeLanguage={newLanguage => handleChangeLanguage(newLanguage)}
          />
        </div>
        <button
          type="button"
          id="run"
          className="run-btn btn"
          onClick={() => getResult()}
        >
          Run
        </button>
      </div>

      <div className="logged-wrapper">
        <button type="button" className="logout-btn" onClick={signOut}>
          <LogoutIcon />
        </button>
      </div>
    </div>
  );
}

export default Menu;
