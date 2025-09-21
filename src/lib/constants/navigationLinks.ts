// Navigation links array to be used in both desktop and mobile menus
export const navigationLinks = [
    { href: "/", label: "Home" },
    {
        label: "Features",
        submenu: true,
        type: "description",
        items: [
            {
                href: "/extract-image-color",
                label: "Extract Image Color",
                description: "Dynamicaly Extract Color from Image.",
            },
            {
                href: "/download-pdf",
                label: "PDF Downloader",
                description: "Generate and download pdf from html template.",
            },
            {
                href: "#",
                label: "Components",
                description: "Browse all components in the library.",
            },
            {
                href: "#",
                label: "Documentation",
                description: "Learn how to use the library.",
            },
            {
                href: "#",
                label: "Templates",
                description: "Pre-built layouts for common use cases.",
            },
        ],
    },
    {
        label: "Pricing",
        submenu: true,
        type: "simple",
        items: [
            { href: "#", label: "Product A" },
            { href: "#", label: "Product B" },
            { href: "#", label: "Product C" },
            { href: "#", label: "Product D" },
        ],
    },
    {
        label: "About",
        submenu: true,
        type: "icon",
        items: [
            { href: "#", label: "Getting Started", icon: "BookOpenIcon" },
            { href: "#", label: "Tutorials", icon: "LifeBuoyIcon" },
            { href: "#", label: "About Us", icon: "InfoIcon" },
        ],
    },
];