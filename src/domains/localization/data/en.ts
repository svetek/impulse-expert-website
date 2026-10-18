import { ServiceId } from '../../../features/service-offerings/enums/service-id.enum';
import type { SiteContent } from '../../site/interfaces/site-content.interface';

export const en = {
    locale: 'en',
    siteName: 'Impulse Expert',
    seo: {
        title: 'Managed DevOps & Cloud Infrastructure | Impulse Expert',
        description:
            'Managed DevOps, cloud and Kubernetes services for product teams: architecture, migration, automation, monitoring, security and ongoing operations.',
        socialImageAlt: 'Glowing cloud infrastructure network',
    },
    header: {
        switchLocale: 'RU',
        alternateLanguageName: 'Русский',
        navLabel: 'Main navigation',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
        homeLabel: 'Impulse Expert home',
        contactPrompt: 'Get in touch today',
        nav: [
            ['Services', '#services'],
            ['Solutions', '#solutions'],
            ['Why Impulse', '#why'],
            ['Infrastructure', '#infrastructure'],
            ['About', '#about'],
        ],
        talk: 'Talk to an Expert',
        switchLanguageLabel: 'Русская версия',
        themeSwitcherLabel: 'Switch theme',
        themeNames: {
            dark: 'Dark',
            light: 'Light',
        },
    },
    hero: {
        eyebrow: 'Managed infrastructure for product teams',
        title: 'Managed cloud & DevOps',
        accent: 'for product teams',
        text: 'Extend your team with senior infrastructure expertise. We architect, migrate, manage and secure cloud, Kubernetes, Web3 and AI workloads.',
        talk: 'Talk to an Expert',
        explore: 'Explore Services',
    },
    services: {
        eyebrow: 'Designed for what comes next',
        title: 'Managed infrastructure services',
        intro: 'Use us as a delivery partner for a defined project or as an ongoing infrastructure team across cloud, Kubernetes, Web3, compliance and AI workloads.',
        expertise: 'Our Expertise',
        learnMore: 'Learn more',
        items: [
            {
                id: ServiceId.Infrastructure,
                short: 'Cloud Infrastructure',
                kicker: 'Cloud architecture',
                title: 'Managed Cloud Infrastructure',
                text: 'Flexible and secure cloud environments, designed around the way your team builds and grows.',
                seoTitle:
                    'Managed Cloud Infrastructure Services — Impulse Expert',
                seoDescription:
                    'Managed AWS, Azure and GCP infrastructure services for product teams: architecture, migration, automation, monitoring, backup and ongoing cloud operations.',
                audience:
                    'Product and engineering teams that need senior cloud ownership, a migration partner or dependable day-to-day operations without building a full internal platform team.',
                engagements: [
                    'Cloud architecture and migration projects',
                    'Ongoing managed cloud operations',
                    'Reliability, cost and security improvements',
                ],
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
                title: 'Kubernetes & Managed DevOps',
                text: 'Production-ready Kubernetes environments for scalable and resilient workloads.',
                seoTitle:
                    'Kubernetes Consulting & Managed DevOps — Impulse Expert',
                seoDescription:
                    'Kubernetes consulting and managed DevOps services: cluster architecture, migration, CI/CD, GitOps, observability, security and production support.',
                audience:
                    'Engineering teams adopting Kubernetes, stabilizing an existing platform or adding experienced DevOps capacity without extending the hiring cycle.',
                engagements: [
                    'Kubernetes design and production migration',
                    'CI/CD, GitOps and platform automation',
                    'Managed operations and reliability support',
                ],
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
                title: 'Managed Web3 & Node Infrastructure',
                text: 'Run validators, RPC endpoints, rollups and production Web3 workloads on reliable, high-performance infrastructure.',
                seoTitle:
                    'Web3 Node & Validator Infrastructure — Impulse Expert',
                seoDescription:
                    'Managed Web3 infrastructure for validators, full nodes, RPC endpoints and rollups with automated deployment, monitoring, alerting and recovery.',
                audience:
                    'Protocols, foundations and Web3 product teams that need reliable node operations, observable RPC capacity and documented recovery procedures.',
                engagements: [
                    'Validator and full-node deployment',
                    'Managed RPC and multi-chain operations',
                    'Monitoring, incident response and recovery',
                ],
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
                title: 'Compliance-Ready Cloud Infrastructure',
                text: 'Meet regulatory requirements with secure, auditable and resilient environments.',
                seoTitle:
                    'Compliance-Ready Cloud Infrastructure — Impulse Expert',
                seoDescription:
                    'Prepare cloud infrastructure for SOC 2 and ISO 27001 assessments with access controls, audit logging, encryption, evidence collection and recovery testing.',
                audience:
                    'Growing SaaS and technology companies that need infrastructure controls and operational evidence before an independent compliance assessment.',
                engagements: [
                    'Infrastructure control and gap assessment',
                    'Security control implementation',
                    'Evidence automation and readiness support',
                ],
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
                title: 'AI Infrastructure & MLOps',
                text: 'High-performance infrastructure for AI and machine learning, from training to inference.',
                seoTitle:
                    'AI Infrastructure & MLOps Consulting — Impulse Expert',
                seoDescription:
                    'AI infrastructure and MLOps consulting for training and inference: GPU environments, model deployment, observability, scaling and cost optimization.',
                audience:
                    'AI product teams moving from experiments to repeatable production inference, or improving GPU utilization, reliability and deployment speed.',
                engagements: [
                    'AI workload and infrastructure assessment',
                    'Production inference platform delivery',
                    'MLOps automation and ongoing optimization',
                ],
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
            audienceTitle: 'Who this service is for',
            engagementsTitle: 'Ways we can work with your team',
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
    about: {
        eyebrow: 'An extension of your engineering team',
        title: 'Infrastructure ownership without another hiring cycle',
        text: 'Impulse Expert works with product and engineering teams that need focused infrastructure expertise for a delivery project or ongoing operations. We work in your cloud and repositories, define responsibilities up front and leave behind documented, observable systems.',
        principles: [
            {
                title: 'Built around your stack',
                description:
                    'Architecture and automation fit your workloads, security boundaries and delivery process instead of forcing a generic platform.',
            },
            {
                title: 'Clear operational ownership',
                description:
                    'Scope, access, escalation paths and acceptance criteria are agreed before implementation and kept visible throughout delivery.',
            },
            {
                title: 'Evidence over promises',
                description:
                    'Availability, recovery and performance targets are validated with monitoring, tests and documented operating procedures.',
            },
        ],
    },
    proof: {
        title: 'Trusted where uptime matters',
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
        details: {
            title: 'Let’s start a conversation',
            text: 'Call, email or visit our Vancouver office to discuss your infrastructure needs.',
            phoneLabel: 'Call us',
            emailLabel: 'Email us',
            addressLabel: 'Visit us',
            mapLabel: 'Open in Google Maps',
        },
    },
    footer: {
        text: 'Infrastructure engineered for momentum.',
        homeLabel: 'Impulse Expert home',
    },
    analytics: {
        notice: 'We use cookies to improve the site. Only with your consent.',
        accept: 'Accept cookies',
        decline: 'Decline',
        preferencesLabel: 'Cookie settings',
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
