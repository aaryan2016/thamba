export interface Job {
    id: number;
    jobTitle: string;
    aboutTheJob: string;
    requirements: string[];
}

export const jobsHeaderDescription = `We’re growing and always open to fresh talent. If you’re a designer, strategist, or creative mind who loves good ideas and better execution — let’s talk.`;

export const jobsData: Job[] = [
    {
        id: 1,
        jobTitle: "ILLUSTRATION ARTIST, REMOTE(FREELANCE / PROJECT BASED)",
        aboutTheJob: `Calling all doodlers, sketchbook lovers, and Procreate wizards — we want your magic. We’re building visual stories that need a fresh, handcrafted touch. You’ll be creating illustrations for branding, social content, packaging, and more. Whether you love clean lines or chaotic energy — we’re open to all styles.`,
        requirements: [
            "A strong portfolio with illustration samples", "Comfortable with digital formats (Procreate, Illustrator, etc.)", "Can take creative direction & deliver on time", "Bonus if you’ve done brand or merch work before"]
    },
    {
        id: 2,
        jobTitle: "CONTENT WRITER, REMOTE (FREELANCE / PROJECT BASED)",
        aboutTheJob: `If you write like you talk and your words have rhythm, we’re already fans. We’re looking for a writer who can make brands sound bold, human, and unforgettable. You’ll write for social media, websites, brand decks, and marketing campaigns. We love storytellers, quirky thinkers, and clear communicators.`,
        requirements: [
            "Experience in writing for creative/lifestyle/fashion brands",
            "Ability to shift tone and voice across brands",
            "Knowledge of SEO is a plus",
            "Must send writing samples or your portfolio"
        ]
    },
    {
        id: 3,
        jobTitle: "GRAPHIC DESIGNER, REMOTE (FREELANCE / PROJECT BASED)",
        aboutTheJob: `Love fonts more than food? We’re looking for someone who can bring our concepts to life visually. From branding decks to campaign creatives, you’ll help design our agency’s story — pixel by pixel. This is a freelance/project-based role, perfect if you enjoy working across different styles and formats. We’d love to see your portfolio — the weirder, the better.`,
        requirements: [
            "Strong design sense & typography skills",
            "Familiar with Adobe Suite and Figma",
            "Ability to adapt to different aesthetics",
            "Past experience with branding, layout, and digital assets"
        ]
    },
    {
        id: 4,
        jobTitle: "SOCIAL MEDIA MANAGER, REMOTE(PART- TIME / FREELANCE)",
        aboutTheJob: `We’re looking for a creative and curious mind to take over our digital playground. From planning Instagram grids to cooking up content ideas, you'll be the voice behind our brand. If you know what’s trending before it’s trending and love crafting clever captions — we want you. Bonus points if you’ve got a knack for memes, analytics, and aesthetics. You’ll work with our creative team to align social strategy with projects.Freelance / Project - based role with flexible hours. Show us your favorite posts and your proudest campaigns.`,
        requirements: [
            "Prior experience managing social media for creative brands",
            "Good taste and a strong eye for detail",
            "Basic knowledge of tools like Adobe Suite, Canva, Meta Suite, Buffer, etc.",
            "Understanding of trends, reels, and reach"
        ]
    },

]