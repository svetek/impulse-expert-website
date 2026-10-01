import { localeConfig } from '../../../domains/localization/config/locale.config';
import type { Locale } from '../../../domains/localization/types/locale.type';
import { ServiceId } from '../enums/service-id.enum';

export const serviceSlugById = {
    [ServiceId.Infrastructure]: 'cloud-infrastructure',
    [ServiceId.Kubernetes]: 'kubernetes-devops',
    [ServiceId.Web3]: 'web3-node-infrastructure',
    [ServiceId.Compliance]: 'compliance-ready-infrastructure',
    [ServiceId.AiInfrastructure]: 'ai-infrastructure',
} satisfies Record<ServiceId, string>;

export const serviceIds = Object.values(ServiceId);

export const getServicePath = (locale: Locale, serviceId: ServiceId) =>
    `${localeConfig[locale].path}services/${serviceSlugById[serviceId]}/`;
