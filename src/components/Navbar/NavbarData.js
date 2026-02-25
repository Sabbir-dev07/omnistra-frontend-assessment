/**
 * Navigation data registry for the Chargeflow Navbar.
 * Separated to ensure Vite HMR Fast Refresh compatibility.
 */

export const NAV_LINKS = [
    { label: 'Product', dropdown: true },
    { label: 'Customers', dropdown: true },
    { label: 'Pricing', href: '#' },
    { label: 'Integrations', dropdown: true },
    { label: 'Resources', dropdown: true },
    { label: 'Company', dropdown: true },
];

export const DROPDOWN_REGISTRY = {
    Product: {
        type: 'product',
        items: [
            { title: 'Prevent', desc: 'Stop friendly fraud, block digital shoplifters & prevent the next chargeback before it happens.', badge: 'NEW' },
            { title: 'Automation', desc: 'Fully automated chargeback recovery with 4x ROI guarantee.' },
            { title: 'Alerts', desc: 'Cut 90% of chargebacks before they happen, powered by Visa and Mastercard.' },
            { title: 'Insights', desc: "Get a bird's-eye view into your payments and chargebacks, all in a single, powerful dashboard.", badge: 'FREE' },
            { title: 'Connect', desc: 'Integrate Chargeflow into your platform, either via Embedding, Whitelabel or API.', badge: 'FOR PLATFORMS' },
        ],
    },
    Customers: {
        type: 'customers',
        leftSide: { title: 'All Case Studies', desc: 'See how leading brands recover revenue automatically.' },
        items: [
            { title: 'obvi.', desc: '170% win-rate increase', category: 'eCommerce' },
            { title: 'elementor', desc: '90% reduction in time spent managing chargebacks', category: 'SaaS' },
            { title: 'Fanatics', desc: '2X Chargeback Win Rate', category: 'Marketplace' },
            { title: 'HEXCLAD', desc: '328 hrs. and 40 minutes saved', category: 'Travel' },
        ],
    },
    Integrations: {
        type: 'integrations',
        leftSide: { title: 'All Integrations', desc: 'Choose from hundreds of integrated platforms.' },
        items: [
            { title: 'Stripe', desc: 'The #1 Chargeback Solution for Stripe Merchants worldwide.', icon: 'stripe' },
            { title: 'Shopify', desc: 'Powering automated recovery for 30k+ Shopify Merchants.', icon: 'shopify' },
            { title: 'WooCommerce', desc: 'Native WooCommerce Integration with deep payment analytics.', icon: 'woo' },
            { title: 'Braintree', desc: 'Optimized dispute handling for Braintree & PayPal platforms.', icon: 'braintree' },
        ],
    },
    Resources: {
        type: 'resources',
        items: [
            { title: 'Blog', desc: 'Insights on payments, fraud prevention, and eCommerce growth.' },
            { title: 'Reports', desc: 'Deep dives into industry benchmarks and reason code trends.' },
            { title: 'Podcast', desc: 'Interviews with leading founders on scaling global brands.' },
            { title: 'Webinars', desc: 'Live workshops on automated dispute recovery strategies.' },
        ],
        sidebar: [
            { title: 'ROI Calculator', desc: '1,020 HOURS | $7,500 USD' },
            { title: 'Reason Codes', desc: 'Enter Code: 12.7' },
        ]
    },
    Company: {
        type: 'company',
        items: [
            { title: 'About Us', desc: 'Our mission and vision.' },
            { title: 'Careers', desc: 'Join our global team.', badge: 'HIRING' },
            { title: 'Newsroom', desc: 'Latest press releases.' },
            { title: 'Contact Us', desc: 'Get in touch with support.' },
        ],
    },
};
