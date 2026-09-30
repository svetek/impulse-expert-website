import type { ServiceId } from '../enums/service-id.enum';

export interface ServiceContent {
    id: ServiceId;
    short: string;
    kicker: string;
    title: string;
    text: string;
    items: string[];
}

export interface ServiceOfferingsContent {
    eyebrow: string;
    title: string;
    intro: string;
    expertise: string;
    expertiseIntro: string;
    learnMore: string;
    items: ServiceContent[];
    imageAlt: [cloud: string, containers: string];
    complianceVisualLabel: string;
    complianceBadges: {
        aligned: string;
        ready: string;
        controls: string;
    };
}
