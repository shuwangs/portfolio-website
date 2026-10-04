import "./Me.css";

const Me = () => {
    return (
        <article className="me-page">
            <header className="me-header">
                <h1>From biology🧬 to software 👩‍💻</h1>
            </header>

            <div className="me-story">
                <p className="me-intro">
                    Hi, I’m Shu — a software developer with a background in biological
                    research , and a cat mom.
                </p>
                <p>
                    Before moving into software, I earned a Ph.D. in Plant Pathology and
                    worked as a postdoctoral researcher. Research taught me to stay
                    curious, work through uncertainty, and keep asking questions. It also
                    taught me persistence and resilience when the results didn’t match my
                    expectations.
                </p>

                <p>
                    My first hands-on experience with programming came through a research
                    project investigating changes in bacterial genomes following specific
                    treatments. To analyze the data, I had to learn R, get comfortable
                    working in Linux, and use my university’s high-performance computing
                    (HPC) system. That project opened the door to programming and became
                    the starting point of my journey into software.
                </p>

                <p>
                    I’m grateful for my time at Georgetown University, where I had the
                    opportunity to work on bioinformatics and data analysis. That
                    experience helped me grow my computational skills and explore my
                    interest in programming.
                </p>
                <p>
                    Changing careers wasn’t an easy decision, and navigating that
                    transition as an immigrant made it even more challenging. But I knew
                    that if I never gave it a try, I would regret it for the rest of my
                    life.
                </p>
                <p>
                    Techtonica played an important role in making that transition
                    possible. It gave me the opportunity to develop my software
                    engineering skills and gain hands-on experience. I’m grateful to have
                    had that support as I worked toward a new career.
                </p>
                <p>
                    Today, I’m pursuing an M.S. in Computer Science at Georgia Tech and
                    working as a Software Developer Apprentice on PlayStation’s payments
                    team. My work includes backend development, automated testing, and
                    investigating how payment systems behave.
                </p>

                <p>
                    I bring a researcher’s mindset to engineering: breaking large
                    questions into smaller ones, testing assumptions, and following the
                    evidence when something goes wrong. There’s plenty to learn, but the
                    process of investigating an unfamiliar problem already feels familiar.
                </p>
            </div>

            <div className="me-personal">
                <p>
                    Outside of work and studying, I share my life with my cat, Bobo —
                    who also makes an occasional appearance on this website.
                    And here we are together.
                </p>
                <figure className="me-photo">
                    <img
                        src="/image/bobo-and-me.jpeg"
                        alt="Me with my cat, Bobo"
                        loading="lazy"
                    />
                    <figcaption>A little glimpse of life with Bobo.</figcaption>
                </figure>
            </div>

            <p className="me-closing">
                Thanks for stopping by and getting to know a little more about me.
            </p>
        </article>
    );
};

export default Me;
