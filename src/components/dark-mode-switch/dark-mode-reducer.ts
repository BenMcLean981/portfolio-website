export type DarkModeState = boolean;

export type DarkModeAction =
  | { type: 'TOGGLE' }
  | { type: 'ENABLE' }
  | { type: 'DISABLE' };

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
