import { TestEmail } from "./TestEmail"

export const AboutMe = ({ recruiter= false }) => {
    return (
        <div className="bg-background dark:bg-pseudoblack text-pseudoblack dark:text-background flex flex-wrap">
            <div className="lg:container lg:mx-auto flex">
                <div className="container mx-auto py-20 w-full flex flex-col gap-8 text-center items-center">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text transition-all duration-500 text-transparent">Hi, I&apos;m Sebastian.</h2>
                    {
                        recruiter ? <p className="text-start lg:text-center text-lg">I&apos;m a passionate developer with a keen interest in continuously learning and applying new technologies to my projects. I pay close attention to detail and am highly receptive to client and user feedback, striving to provide the best experience possible. I am adaptable and work well in team environments, whether it involves front-end development or diving into back-end tasks. When faced with challenges, I seek assistance from colleagues or consult documentation to find solutions. I am excited to join a dynamic team where I can contribute to and grow with the company&apos;s innovative projects.</p>
                        : <p className="text-start lg:text-center text-lg">I&apos;m a passionate developer with a keen interest in continuously learning and applying new technologies to my projects. I pay close attention to detail and am highly receptive to client and user feedback, striving to provide the best experience possible. I am adaptable and work well in team environments, whether it involves front-end development or diving into back-end tasks. When faced with challenges, I seek assistance from colleagues or consult documentation to find solutions. I am excited to join a dynamic team where I can contribute to and grow with the company&apos;s innovative projects.</p>
                    }
                    <span className="mt-4 text-sm font-light text-gray-400">
                        I welcome any feedback to help me improve my profile or website. Feel free to share your thoughts!
                    </span>
                    {/* <button aria-label="Share your feedback" className="lg:flex font-bold text-lg px-4 xl:px-8 py-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-pseudoblack hover:text-background transition-all duration-500">
                        Share Your Feedback
                    </button> */}
                    <TestEmail />
                </div>
            </div>
        </div>
    )
}