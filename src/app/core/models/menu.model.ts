import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface MenuItem {
    group: string;
    separator?: boolean;
    selected?: boolean;
    active?: boolean;
    items: Array<SubMenuItem>;
}

export interface SubMenuItem {
    icon?: IconDefinition;
    label?: string;
    route?: string | null;
    expanded?: boolean;
    active?: boolean;
    children?: Array<SubMenuItem>;
}
