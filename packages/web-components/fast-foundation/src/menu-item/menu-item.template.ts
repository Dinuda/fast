import { html, when } from "@microsoft/fast-element";
import { endTemplate, startTemplate } from "../patterns/start-end";
import { MenuItem, MenuItemRole } from "./menu-item";

/**
 * The template for the {@link @microsoft/fast-foundation#(MenuItem:class)} component.
 * @public
 */
export const MenuItemTemplate = html<MenuItem>`
    <template
        role="${x => x.role}"
        aria-checked="${x => (x.role !== MenuItemRole.menuitem ? x.checked : void 0)}"
        aria-disabled="${x => x.disabled}"
        aria-expanded="${x => x.expanded}"
        @keydown="${(x, c) => x.handleMenuItemKeyDown(c.event as KeyboardEvent)}"
        @click="${(x, c) => x.handleMenuItemClick(c.event as MouseEvent)}"
        class="without-role ${x => (x.disabled ? "disabled" : "")} ${x =>
            x.expanded ? "expanded" : ""}"
    >
        <div part="start-container" class="start-container">
            ${when(
                x => x.role === MenuItemRole.menuitemcheckbox,
                html<MenuItem>`
                    <span part="checkbox" class="checkbox"></span>
                `
            )}
            ${when(
                x => x.role === MenuItemRole.menuitemcheckbox && x.checked,
                html<MenuItem>`
                    <span part="checkbox-checked" class="checkbox-checked">
                        <svg
                            aria-hidden="true"
                            part="checkbox-indicator"
                            class="checkbox-indicator"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"
                            />
                        </svg>
                    </span>
                `
            )}
            ${when(
                x => x.role === MenuItemRole.menuitemradio,
                html<MenuItem>`
                    <span part="radio" class="radio"></span>
                `
            )}
            ${when(
                x => x.role === MenuItemRole.menuitemradio && x.checked,
                html<MenuItem>`
                    <span part="radio-checked" class="radio-checked">
                        <div part="radio-indicator" class="radio-indicator"></div>
                    </span>
                `
            )}
            ${startTemplate}
        </div>
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${endTemplate}
    </template>
`;
