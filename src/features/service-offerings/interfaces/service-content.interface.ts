import type { ServiceId } from '../enums/service-id.enum';

export interface ServiceContent {
    id: ServiceId;
    short: string;
    kicker: string;
    title: string;
    text: string;
    items: string[];
    scenario: {
        title: string;
        challenge: string;
        approach: string;
        checks: string[];
    };
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
    page: {
        breadcrumbHome: string;
        breadcrumbServices: string;
        capabilitiesTitle: string;
        approachTitle: string;
        approachText: string;
        otherServicesTitle: string;
        discussProject: string;
        scenarioEyebrow: string;
        scenarioDisclaimer: string;
        challengeLabel: string;
        solutionLabel: string;
        verificationLabel: string;
        measurementTitle: string;
        measurementIntro: string;
        measurementItems: Array<{
            title: string;
            description: string;
        }>;
    };
}
