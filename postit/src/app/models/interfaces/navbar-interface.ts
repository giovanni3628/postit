import { NavbarEnum } from 'src/app/models/enums/navbar';

export interface NavbarItemInterface {
    type: NavbarEnum;
    link: string;
    icon: string;
    iconActivated: string;
}
