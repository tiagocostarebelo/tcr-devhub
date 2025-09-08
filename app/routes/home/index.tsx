import type { Route } from "./+types/index";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "DevHub | Welcome" },
        { name: "description", content: "Custom web dev hub" },
    ];
}

export default function Home() {
    const now = new Date().toISOString();

    if (typeof window === 'undefined') {
        console.log('Server Render at: ', now);
    } else {
        console.log('Client Hydration at: ', now);
    }
    return <section>My App</section>;
}
