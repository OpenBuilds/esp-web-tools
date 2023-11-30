import { css } from "lit";

// We set font-size to 16px and all the mdc typography styles
// because it defaults to rem, which means that the font-size
// of the host website would influence the ESP Web Tools dialog.

export const dialogStyles = css`
  :host {
    --mdc-dialog-heading-ink-color: #fff;
    --mdc-theme-surface: #222;
    --mdc-theme-primary: var(--improv-primary-color, #fff);
    --mdc-theme-on-primary: var(--improv-on-primary-color, #222);
    --improv-danger-color: #9E2B25;
    --improv-text-color: rgba(255, 255, 255, 1);
    --mdc-theme-text-primary-on-background: var(--improv-text-color);
    --mdc-dialog-content-ink-color: var(--improv-text-color);
    text-align: left;
    font-size: 16px;
    --mdc-typography-headline6-font-size: 1.25em;
    --mdc-typography-headline6-line-height: 2em;
    --mdc-typography-body1-font-size: 1em;
    --mdc-typography-body1-line-height: 1.5em;
    --mdc-typography-button-font-size: 0.875em;
    --mdc-typography-button-line-height: 2.25em;
    --mdc-typography-subtitle1-font-size: 1em;
    --mdc-typography-subtitle1-line-height: 1.75em;
  }

  a {
    color: var(--improv-primary-color, #ffffff);
  }

  a.button {
    text-decoration: none;
  }
`;
