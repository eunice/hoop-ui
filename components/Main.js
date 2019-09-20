import Link from 'next/link';
import React, { Component } from 'react';

function getProjects() {
    return [
        {
            id: "project-123445",
            title: "Announcement Interface", 
            projects: [
                {
                    id: "subproject-34456",
                    subtitle: "Release Notes Date Range Filters",
                    status: "New",
                    version: 1.0,
                    dueDate: "Sep 3, 2019",
                    owner: [
                        {id: 'eunice', name: "Eunice", image_url: "https://pbs.twimg.com/profile_images/470695020899860480/dYqnVNnT_400x400.jpeg"},
                        {id: 'kareem', name: "Kareem", image_url: "https://pbs.twimg.com/profile_images/470695020899860480/dYqnVNnT_400x400.jpeg"}
                    ],
                    tags: [
                        {id: "tag-1",name:'filters'},
                        {id: "tag-2",name:'announcements'}, 
                        {id: "tag-3",name:'releases'}
                    ]
                },
                {
                    id: "subproject-34457",
                    subtitle: "Release Notes Keyword Search",
                    status: "New",
                    version: 1.0,
                    dueDate: "Sep 3, 2019",
                    owner: [
                        {id: 'eunice', name: "Eunice", image_url: "https://pbs.twimg.com/profile_images/470695020899860480/dYqnVNnT_400x400.jpeg"},
                        {id: 'kareem', name: "Kareem", image_url: "https://pbs.twimg.com/profile_images/470695020899860480/dYqnVNnT_400x400.jpeg"}
                    ],
                    tags: [
                        {id: "tag-1",name:'filters'},
                        {id: "tag-2",name:'announcements'}, 
                        {id: "tag-3",name:'releases'}
                    ]
                }
            ],           
        }    
    ]
}

const Project = ({project}) => (
   <div className="p-2 w-full overflow-auto">
       <h2 className="px-4 my-2 text-gray-900 text-base font-semibold leading-loose">{project.title}</h2>
       {project.projects.map(proj => (
            <div key={proj.id} className="flex w-full cursor-pointer items-center px-4 py-3 border-t-2 border-gray-200 leading-loose hover:bg-gray-100 whitespace-no-wrap" > 
                <div className="w-4/6">
                    <span className="text-gray-700">{proj.subtitle}</span>
                    <div className="flex">
                        {proj.tags.map(tag => (
                            <span key={tag.id+"-"+proj.id} className="mr-2 text-gray-500 text-sm">{tag.name}</span>
                        ))}
                    </div>                    
                </div>
                
                <div className="w-1/6 text-gray-700">{proj.status}</div>

                <div className="w-1/6 text-gray-700 text-sm">
                    <div>{proj.dueDate}</div>
                    <div>Due (3 days)</div>
                </div>
                <div className="w-1/6 flex pr-2">
                    {proj.owner.map(owner => (
                        <img key={ owner.id+"-"+proj.id} className="h-8 w-8 md:h-8 md:w-8 mx-auto md:mx-0 md:mr-6 rounded" src={owner.image_url}/> 
                    ))}
                </div>
            </div>
       ))}
    </div>
)

const MainActionBar = () => (
     <div className="flex">
        <input className="w-1/3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search"></input>
        
        <div className="w-1/3"></div>
        <button className="w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+ Add Project</button>
    </div>
)

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {
        return(
            <div className="w-3/4 h-12 m-4">        
                <MainActionBar />
                {getProjects().map(project => (
                    <Project key={project.id} project={project} />
                ))}
            </div>
        )
    }
}

/*const Main = () => (
    <div className="w-3/4 h-12 m-4">        
       <MainActionBar />
        {getProjects().map(project => (
            <Project key={project.id} project={project} />
        ))}
    </div>
);*/

export default Main;