import { usePathname, useRouter } from 'next/navigation';
import { toast } from '../ui/use-toast';
import TypingAnimation from '../magicui/typing-animation';
import { Reveal } from '../generics/Reveal';
import Image from 'next/image';

export const HeroBanner = () => {
    const router = useRouter();
    const pathname = usePathname();

    
    toast({
        title: pathname === '/' ? "Welcom Customer!!" : "Welcom Recruiter!!",
        className: "bg-gradient-to-r from-purple-500 to-orange-400 text-background",
    });

    const validateRoute = (action: string) => {
        if (pathname.includes('/recruiters')) {
            if (action === 'recruiter') {
                toast({
                    title: "You're in the right place",
                    className: "text-background bg-green-600",
                });
            } else if (action === 'project') {
                router.push('/');
            }
        } else if (pathname === '/') {
            if (action === 'project') {
                toast({
                    title: "You're in the right place",
                    className: "text-background bg-green-600",
                });
            } else if (action === 'recruiter') {
                router.push('/recruiters');
            }
        }
    };

    return (
        <div className="h-auto lg:h-[calc(100vh-80px)] w-full bg-background dark:bg-pseudoblack">
            <div className="container mx-auto flex flex-wrap items-center h-full">
                <div className="w-full lg:w-1/2">
                    <div className="lg:container mx-auto py-10 flex flex-col gap-4 items-center">
                        <div className="flex flex-col gap-4">
                            <div className="text-3xl font-extrabold lg:text-5xl flex flex-col gap-2">
                                <h1 className="">Hi, I&apos;m Sebastian</h1>
                                <TypingAnimation className="leading-none text-start bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text transition-all duration-500 text-transparent text-5xl" text="Front-End Developer"/>
                            </div>
                            <p className="text-xs lg:text-sm font-light">Freelancer specializing in React and Next.js to create dynamic, user-friendly websites.</p>
                            <div className="flex gap-4 pt-2">
                                <button onClick={() => validateRoute('recruiter')} className="max-w-fit font-bold text-lg px-8 py-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-pseudoblack hover:text-background transition-all duration-500">
                                    I am a recruiter
                                </button>
                                <button onClick={() => validateRoute('project')} className="max-w-fit font-bold text-lg px-8 py-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-pseudoblack hover:text-background transition-all duration-500">
                                    I have a project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 py-10 flex justify-center items-center">
                    <Reveal hidden={{ opacity: 0, x: 75}} visible={{ opacity: 1, x: 0}}>
                        <div className="relative mx-auto">
                            <div className="card rounded-full">
                                <div className="relative h-[300px] lg:h-[350px] xl:h-[600px] aspect-square rounded-full z-10">
                                    <Image
                                        src={'/sebastian_picture.jpeg'}
                                        alt="Background Image"
                                        layout="fill"
                                        objectFit="cover"
                                        quality={100}
                                        className="absolute top-0 left-0 w-full h-full rounded-full p-5"
                                    />
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};
