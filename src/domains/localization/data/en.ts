import { ServiceId } from '../../../features/service-offerings/enums/service-id.enum';
import type { SiteContent } from '../../site/interfaces/site-content.interface';

export const en = {
    locale: 'en',
    siteName: 'Impulse Expert',
    seo: {
        title: 'Impulse Expert — Cloud, Kubernetes, Web3 & AI Infrastructure',
        description:
            'Secure, scalable cloud, Kubernetes, Web3 and AI infrastructure: architecture, deployment, monitoring and compliance-ready operations.',
        socialImageAlt: 'Glowing cloud infrastructure network',
    },
    header: {
        switchLocale: 'RU',
        alternateLanguageName: 'Русский',
        navLabel: 'Main navigation',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
        homeLabel: 'Impulse Expert home',
        nav: [
            ['Services', '#services'],
            ['Solutions', '#solutions'],
            ['Why Impulse', '#why'],
            ['Infrastructure', '#infrastructure'],
            ['About', '#about'],
        ],
        talk: 'Talk to an Expert',
        switchLanguageLabel: 'Русская версия',
    },
    hero: {
        eyebrow: 'Reliable infrastructure for innovators',
        title: 'Build without',
        accent: 'limits.',
        text: 'We deploy, manage and secure infrastructure for Web3, cloud and AI — so your team can focus on what matters.',
        talk: 'Talk to an Expert',
        explore: 'Explore Services',
        scroll: 'Explore infrastructure',
    },
    services: {
        eyebrow: 'Designed for what comes next',
        title: 'Infrastructure for what’s next.',
        intro: 'From decentralized networks to enterprise cloud and AI workloads, we deliver secure, scalable and high-performance infrastructure for innovative teams.',
        expertise: 'Our Expertise',
        expertiseIntro: 'End-to-end solutions for modern business challenges',
        learnMore: 'Learn more',
        items: [
            {
                id: ServiceId.Infrastructure,
                short: 'Cloud Infrastructure',
                kicker: 'Cloud architecture',
                title: 'Cloud Infrastructure',
                text: 'Flexible and secure cloud environments, designed around the way your team builds and grows.',
                items: [
                    'Multi-cloud across AWS, Azure & GCP',
                    'Scalable compute and storage',
                    'Load balancing & auto-scaling',
                    'Disaster recovery and backup',
                ],
                scenario: {
                    title: 'Multi-region cloud platform launch',
                    challenge:
                        'A growing product team needs to remove a single-region dependency and make infrastructure changes repeatable without increasing operational complexity.',
                    approach:
                        'Define availability and recovery requirements, separate critical workloads, automate infrastructure delivery and introduce centralized monitoring and backup policies.',
                    checks: [
                        'Regional failover exercise',
                        'Backup restoration test',
                        'Load and capacity test',
                        'Infrastructure drift review',
                    ],
                },
            },
            {
                id: ServiceId.Kubernetes,
                short: 'Kubernetes & DevOps',
                kicker: 'Platform engineering',
                title: 'Kubernetes & Containers',
                text: 'Production-ready Kubernetes environments for scalable and resilient workloads.',
                items: [
                    'Kubernetes cluster setup',
                    'Container orchestration',
                    'CI/CD integration',
                    'Monitoring, scaling & hardening',
                ],
                scenario: {
                    title: 'Migration to a production Kubernetes platform',
                    challenge:
                        'A team has containerized applications but lacks predictable deployments, controlled rollbacks and a consistent operating model.',
                    approach:
                        'Design cluster boundaries, automate delivery, define resource and security policies, and add workload-level observability before migration.',
                    checks: [
                        'Deployment and rollback test',
                        'Worker-node failure simulation',
                        'Autoscaling verification',
                        'Access and network policy review',
                    ],
                },
            },
            {
                id: ServiceId.Web3,
                short: 'Web3 & Nodes',
                kicker: 'Decentralized systems',
                title: 'Web3 & Node Infrastructure',
                text: 'Run validators, RPC endpoints, rollups and production Web3 workloads on reliable, high-performance infrastructure.',
                items: [
                    'Validator & full node deployment',
                    'Multi-chain support',
                    'High-uptime architecture',
                    'Monitoring, alerting & auto-recovery',
                ],
                scenario: {
                    title: 'Resilient RPC and validator infrastructure',
                    challenge:
                        'A protocol team needs stable node access, early detection of synchronization problems and a controlled recovery path after host failure.',
                    approach:
                        'Separate validator and RPC roles, automate node provisioning, monitor chain-specific health signals and document failover procedures.',
                    checks: [
                        'Node synchronization monitoring',
                        'RPC latency and error-rate test',
                        'Host failure recovery exercise',
                        'Key-access procedure review',
                    ],
                },
            },
            {
                id: ServiceId.Compliance,
                short: 'Compliance-Ready Infrastructure',
                kicker: 'Security by design',
                title: 'Compliance-Ready Infrastructure',
                text: 'Meet regulatory requirements with secure, auditable and resilient environments.',
                items: [
                    'ISO 27001 aligned environments',
                    'SOC 2 ready controls & monitoring',
                    'Data protection and encryption',
                    'Access management & audit logging',
                ],
                scenario: {
                    title: 'Infrastructure preparation for an audit',
                    challenge:
                        'A company needs technical controls, traceable access and operational evidence before an independent compliance assessment.',
                    approach:
                        'Map applicable controls to infrastructure, close logging and access-management gaps, automate evidence collection and document operating procedures.',
                    checks: [
                        'Privileged-access review',
                        'Audit-log coverage check',
                        'Encryption configuration review',
                        'Backup restoration evidence',
                    ],
                },
            },
            {
                id: ServiceId.AiInfrastructure,
                short: 'AI Infrastructure',
                kicker: 'Accelerated compute',
                title: 'AI Infrastructure',
                text: 'High-performance infrastructure for AI and machine learning, from training to inference.',
                items: [
                    'GPU-optimized compute',
                    'Scalable AI/ML environments',
                    'Model deployment at scale',
                    'Secure, cost-optimized setup',
                ],
                scenario: {
                    title: 'Moving an AI model from prototype to inference',
                    challenge:
                        'A team needs repeatable model deployment, predictable inference performance and visibility into GPU utilization and operating cost.',
                    approach:
                        'Profile the workload, select the serving architecture, automate model releases and establish performance, capacity and cost monitoring.',
                    checks: [
                        'Inference latency benchmark',
                        'Throughput and concurrency test',
                        'GPU utilization review',
                        'Release and rollback test',
                    ],
                },
            },
        ],
        imageAlt: [
            'Glowing cloud infrastructure network',
            'Secure container platform visualization',
        ],
        complianceVisualLabel: 'ISO 27001 aligned and SOC 2 ready',
        complianceBadges: {
            aligned: 'ALIGNED',
            ready: 'READY',
            controls: 'CONTROLS',
        },
        page: {
            breadcrumbHome: 'Home',
            breadcrumbServices: 'Services',
            capabilitiesTitle: 'What we deliver',
            approachTitle: 'How we approach the work',
            approachText:
                'We start with workload, security and availability requirements, then design the architecture, automate delivery and establish observable day-to-day operations.',
            otherServicesTitle: 'Related infrastructure services',
            discussProject: 'Discuss your project',
            scenarioEyebrow: 'Illustrative delivery scenario',
            scenarioDisclaimer:
                'This is a representative project pattern, not a claim about a specific client or completed engagement.',
            challengeLabel: 'Typical challenge',
            solutionLabel: 'Delivery approach',
            verificationLabel: 'Acceptance checks',
            measurementTitle: 'How outcomes are verified',
            measurementIntro:
                'Targets are agreed before implementation and supported by reproducible measurements rather than marketing estimates.',
            measurementItems: [
                {
                    title: 'Availability',
                    description:
                        'Measured by agreed external probes over a defined reporting window, with maintenance and exclusions documented.',
                },
                {
                    title: 'Incident response',
                    description:
                        'Calculated from monitoring or ticket timestamps between detection and acknowledgement.',
                },
                {
                    title: 'Recovery',
                    description:
                        'RTO and RPO are checked through scheduled restore and failover exercises.',
                },
                {
                    title: 'Performance',
                    description:
                        'Latency, throughput and resource utilization are recorded under an agreed representative workload.',
                },
            ],
        },
    },
    proof: {
        eyebrow: 'Built for ambitious teams',
        title: 'Trusted where uptime matters.',
        metricsLabel: 'Company metrics',
        metricsNote:
            'Coverage and target values depend on the agreed service scope. Measurement rules and reporting windows are documented for each project.',
        metrics: [
            ['99.99%', 'target uptime'],
            ['24/7', 'expert monitoring'],
            ['15+', 'supported networks'],
            ['<15m', 'response target'],
        ],
        quotes: [
            [
                'Impulse Expert became a critical part of our validator infrastructure — reliable, responsive and easy to work with.',
                'James T.',
                'Core Team',
                'JT',
            ],
            [
                'Their multi-cloud expertise gave us the flexibility we needed to scale globally.',
                'Sarah Kim',
                'CTO',
                'SK',
            ],
            [
                'Professional, fast and highly knowledgeable. Our go-to infrastructure partner.',
                'Alex Ryu',
                'Head of Infrastructure',
                'AR',
            ],
        ],
    },
    contact: {
        eyebrow: 'Let’s build together',
        title: 'Ready to scale your infrastructure?',
        text: 'Tell us what you’re building. We’ll map the right path from architecture to operations.',
        talk: 'Talk to an Expert',
        explore: 'Explore Services',
    },
    footer: {
        text: 'Infrastructure engineered for momentum.',
        homeLabel: 'Impulse Expert home',
    },
    analytics: {
        notice: 'We use Google Analytics and Yandex Metrica to understand how the site is used. Analytics starts only with your consent.',
        accept: 'Accept analytics',
        decline: 'Decline',
        preferencesLabel: 'Analytics preferences',
    },
    accessibility: {
        skipToContent: 'Skip to content',
    },
    notFound: {
        title: 'Page not found — Impulse Expert',
        heading: 'Page not found',
        description: 'The page may have moved or the address may be incorrect.',
        action: 'Return home',
    },
} satisfies SiteContent;
