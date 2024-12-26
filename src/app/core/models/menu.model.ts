import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface MenuItemModel {
    group: string;
    separator?: boolean;
    selected?: boolean;
    active?: boolean;
    items: Array<SubMenuItemModel>;
}

export interface SubMenuItemModel {
    icon?: IconDefinition;
    label?: string;
    route?: string | null;
    expanded?: boolean;
    active?: boolean;
    children?: Array<SubMenuItemModel>;
}
