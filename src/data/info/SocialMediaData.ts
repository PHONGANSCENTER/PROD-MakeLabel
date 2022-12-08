import {Settings} from '../../settings/Settings';

export interface ISocialMedia {
    displayName:string;
    imageSrc:string;
    imageAlt:string;
    href:string;
    tooltipMessage:string;
}

export const SocialMediaData: ISocialMedia[] = [
    {
        displayName: 'Linkedin',
        imageSrc: '/ico/linkedin.png',
        imageAlt: 'Linkedin',
        href: Settings.GITHUB_URL,
        tooltipMessage: 'Show us some love on Linkedin',
    },
    {
        displayName: 'Website',
        imageSrc: '/ico/online.png',
        imageAlt: 'Website',
        href: Settings.MEDIUM_URL,
        tooltipMessage: 'Read our AI content on Website',
    },
    {
        displayName: 'Facebook',
        imageSrc: '/ico/facebook.png',
        imageAlt: 'Facebook',
        href: Settings.TWITCH_URL,
        tooltipMessage: 'Watch as we build Make Sense right in front your eyes on Facebook'
    },
];
