import { type DarkModeAction, type DarkModeState } from './dark-mode-context';

export function darkModeReducer(state: DarkModeState, action: DarkModeAction) {
  switch (action.type) {
    case 'TOGGLE':
      return !state;
    case 'ENABLE':
      return true;
    case 'DISABLE':
      return false;
  }
}
