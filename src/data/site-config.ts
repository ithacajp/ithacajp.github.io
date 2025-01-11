export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type About = {
    companyName: string;
    founded: string;
    address: string;
    ceo: string;
    capital: string;
    lawfirm: string;
};

export type SiteConfig = {
    about?: About;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: '合同会社イタカ',
    subtitle: '創るよろこび',
    description: '小型自走式ペンプロッターの合同会社イタカの会社サイトです。',
    image: {
        src: '/ithaca-product.png',
        alt: 'Ithaca product iimage'
    },
    about: {
        companyName: '合同会社イタカ',
        founded: '2024年4月26日',
        address: '〒104-0061 東京都中央区銀座1-12-4 N&E BLD. 7F',
        capital: '1,000,000円',
        ceo: '豊田 史子',
        lawfirm: '共栄法律事務所 小澤拓弁護士',
      },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '#projects'
        },
        {
            text: 'News',
            href: '#news'
        },
        {
            text: 'About',
            href: '#news'
        },
        // {
        //     text: 'Blog',
        //     href: '/blog'
        // },
        // {
        //     text: 'Tags',
        //     href: '/tags'
        // }
    ],
    // footerNavLinks: [
    //     {
    //         text: 'About',
    //         href: '/about'
    //     },
    //     {
    //         text: 'Contact',
    //         href: '/contact'
    //     },
    //     {
    //         text: 'Terms',
    //         href: '/terms'
    //     },
    //     {
    //         text: 'Download theme',
    //         href: 'https://github.com/JustGoodUI/dante-astro-theme'
    //     }
    // ],
    // socialLinks: [
    //     {
    //         text: 'Dribbble',
    //         href: 'https://dribbble.com/'
    //     },
    //     {
    //         text: 'Instagram',
    //         href: 'https://instagram.com/'
    //     },
    //     {
    //         text: 'X/Twitter',
    //         href: 'https://twitter.com/'
    //     }
    // ],
    hero: {
        title: 'The Joy of Creating',
        text: "創りだすよろこび",
        // image: {
        //     src: '/ithaca-product.png',
        //     alt: 'Ithaca product image'
        // },
        // actions: [
        //     {
        //         text: 'Get in Touch',
        //         href: '/contact'
        //     }
        // ]
    },
    // subscribe: {
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
