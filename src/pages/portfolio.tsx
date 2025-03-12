interface Project {
    title: string;
    description: string;
    image: string;
    repo: string;
    deployed: string;
}

export default function Portfolio(): React.ReactNode {
    const projects: Project[] = [
        {
            title: "Project 1",
            description: "This is a project",
            image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            repo: "XXXXXXXXXXXXXXXXXX",
            deployed: "XXXXXXXXXXXXXXXXXX"
        },
        {
            title: "Project 2",
            description: "This is a project",
            image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            repo: "XXXXXXXXXXXXXXXXXX",
            deployed: "XXXXXXXXXXXXXXXXXX"
        },
        {
            title: "Project 3",
            description: "This is a project",
            image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            repo: "XXXXXXXXXXXXXXXXXX",
            deployed: "XXXXXXXXXXXXXXXXXX"
        },
        {
            title: "Project 4",
            description: "This is a project",
            image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            repo: "XXXXXXXXXXXXXXXXXX",
            deployed: "XXXXXXXXXXXXXXXXXX"
        },
        {
            title: "Project 5",
            description: "This is a project",
            image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            repo: "XXXXXXXXXXXXXXXXXX",
            deployed: "XXXXXXXXXXXXXXXXXX"
        },
        {
            title: "Project 6",
            description: "This is a project",
            image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            repo: "XXXXXXXXXXXXXXXXXX",
            deployed: "XXXXXXXXXXXXXXXXXX"
        }
    ]

    return (
        <div className="container">
            <h1>Portfolio</h1>
            <div className="row">
                {projects.map((project: Project) => (
                    <div className="col-md-4">
                        <div className="card">
                            <img src={project.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <a href={project.repo} className="btn btn-primary">Repo</a>
                                <a href={project.deployed} className="btn btn-primary">Deployed</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}